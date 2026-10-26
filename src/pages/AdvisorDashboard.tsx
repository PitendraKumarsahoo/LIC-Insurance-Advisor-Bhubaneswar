import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle,
  Download,
  Filter,
  User,
  LogOut,
  RefreshCw,
  Sliders,
  AlertCircle
} from 'lucide-react';
import {
  auth,
  loginWithGoogle,
  logoutUser,
  isUserAdvisor,
  fetchAllLeadsForAdvisor,
  fetchUserLeads,
  updateLeadStatus,
  LeadData
} from '../firebase/config';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { AGENT_DATA } from '../data/agent';

export const AdvisorDashboard: React.FC = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      setAuthLoading(false);
      if (u) {
        loadLeads(u);
      }
    });
    return () => unsub();
  }, []);

  const isAdvisor = user && isUserAdvisor(user.email);

  const loadLeads = async (currentUser: FirebaseUser) => {
    setLoadingLeads(true);
    try {
      if (isUserAdvisor(currentUser.email)) {
        const data = await fetchAllLeadsForAdvisor();
        setLeads(data);
      } else {
        const data = await fetchUserLeads(currentUser.uid);
        setLeads(data);
      }
    } catch (err) {
      console.error('Failed to load leads:', err);
    } finally {
      setLoadingLeads(false);
    }
  };

  const handleStatusChange = async (leadId: string, newStatus: LeadData['status']) => {
    setUpdatingId(leadId);
    try {
      await updateLeadStatus(leadId, newStatus);
      if (user) {
        await loadLeads(user);
      }
    } catch (err) {
      console.error('Failed to update lead status:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const exportLeadsToCSV = () => {
    if (leads.length === 0) return;
    const headers = ['Name', 'Phone', 'City', 'Plan Category', 'Plan Name', 'Preferred Time', 'Status', 'Message'];
    const rows = leads.map(l => [
      `"${l.name || ''}"`,
      `"${l.phone || ''}"`,
      `"${l.city || ''}"`,
      `"${l.planCategory || ''}"`,
      `"${l.planName || ''}"`,
      `"${l.preferredTime || ''}"`,
      `"${l.status || ''}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `LIC_Bhubaneswar_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(l => {
    if (statusFilter === 'all') return true;
    return l.status === statusFilter;
  });

  if (authLoading) {
    return (
      <div className="py-24 text-center">
        <div className="w-8 h-8 border-3 border-[#0B3C8C] border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-xs text-slate-500 mt-3">Checking authentication state...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="py-16 max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 bg-blue-100 text-[#0B3C8C] rounded-2xl flex items-center justify-center mx-auto shadow-sm">
          <ShieldCheck className="w-10 h-10" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Advisor Portal & Inquiry Manager</h2>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Please sign in with your authorized Google account to view prospective client consultation requests, track inquiries, and update servicing notes.
          </p>
        </div>
        <button
          onClick={loginWithGoogle}
          className="w-full bg-[#0B3C8C] hover:bg-[#093275] text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <User className="w-4 h-4" />
          <span>Sign In with Google</span>
        </button>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Dashboard Header Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
              {isAdvisor ? 'Advisor Administration' : 'Client Inquiries Desk'}
            </span>
            <span className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Firestore Connected
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            {isAdvisor ? 'Consultation Inquiries & Leads' : 'My Consultation Requests'}
          </h1>
          <p className="text-xs text-slate-500">
            Logged in as <strong className="text-slate-700">{user.email}</strong>
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={() => loadLeads(user)}
            disabled={loadingLeads}
            className="p-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition cursor-pointer"
            title="Refresh Inquiries"
          >
            <RefreshCw className={`w-4 h-4 ${loadingLeads ? 'animate-spin' : ''}`} />
          </button>

          {isAdvisor && (
            <button
              onClick={exportLeadsToCSV}
              disabled={leads.length === 0}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-semibold shadow-xs transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          )}

          <button
            onClick={logoutUser}
            className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold transition cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {['all', 'pending', 'contacted', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize transition cursor-pointer ${
                statusFilter === status
                  ? 'bg-[#0B3C8C] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {status} ({status === 'all' ? leads.length : leads.filter((l) => l.status === status).length})
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table / Cards */}
      {filteredLeads.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
          <Clock className="w-8 h-8 text-slate-400 mx-auto" />
          <p className="font-semibold text-slate-800 text-sm">
            No inquiries currently in this status.
          </p>
          <p className="text-xs text-slate-500">
            When visitors request free consultations from the home or plan pages, they will instantly appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      lead.status === 'completed'
                        ? 'bg-emerald-100 text-emerald-800'
                        : lead.status === 'contacted'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {lead.status}
                  </span>
                  <span className="text-[11px] text-slate-400">{lead.city}</span>
                </div>

                <div>
                  <h3 className="font-bold text-base text-slate-900">{lead.name}</h3>
                  <p className="text-xs font-mono text-slate-600 mt-0.5">{lead.phone}</p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1.5 border border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Goal / Plan:</span>
                    <strong className="text-slate-800">{lead.planName || lead.planCategory}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Preferred Time:</span>
                    <span className="text-slate-700">{lead.preferredTime}</span>
                  </div>
                  {lead.age && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Age:</span>
                      <span className="text-slate-700">{lead.age} yrs</span>
                    </div>
                  )}
                </div>

                {lead.message && (
                  <p className="text-xs text-slate-600 bg-amber-50/50 p-2.5 rounded-lg border border-amber-100 italic">
                    "{lead.message}"
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${lead.phone}`}
                    className="flex-1 py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0B3C8C] text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Client</span>
                  </a>
                  <a
                    href={`https://wa.me/91${lead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Hello ${lead.name}, this is ${AGENT_DATA.name}, your authorized LIC Insurance Advisor in Bhubaneswar. I received your consultation request regarding ${lead.planName || lead.planCategory}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Status Switcher (for Advisor) */}
                {isAdvisor && lead.id && (
                  <div className="flex items-center justify-between text-[11px] pt-1 text-slate-500">
                    <span>Update Status:</span>
                    <div className="flex gap-1">
                      {(['pending', 'contacted', 'completed'] as LeadData['status'][]).map((s) => (
                        <button
                          key={s}
                          disabled={updatingId === lead.id || lead.status === s}
                          onClick={() => handleStatusChange(lead.id!, s)}
                          className={`px-2 py-0.5 rounded capitalize ${
                            lead.status === s
                              ? 'bg-slate-800 text-white font-bold'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
