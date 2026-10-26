import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, AlertTriangle, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { AGENT_DATA, MANDATORY_COMPLIANCE_DISCLAIMER } from '../data/agent';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const getInitialTab = () => {
    if (location.pathname.includes('terms')) return 'terms';
    if (location.pathname.includes('disclaimer')) return 'disclaimer';
    if (location.pathname.includes('grievance')) return 'grievance';
    return 'privacy';
  };

  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'disclaimer' | 'grievance'>(
    getInitialTab()
  );

  return (
    <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Legal & Compliance Disclosures
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Regulatory Policies & Grievance Mechanism
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Strictly compliant with Insurance Regulatory and Development Authority of India (IRDAI) guidelines.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto max-w-full">
          {[
            { id: 'privacy', label: 'Privacy Policy' },
            { id: 'terms', label: 'Terms of Use' },
            { id: 'disclaimer', label: 'Regulatory Disclaimer' },
            { id: 'grievance', label: 'Grievance Redressal' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#0B3C8C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        {/* PRIVACY POLICY */}
        {activeTab === 'privacy' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Privacy Policy</h2>
            <p>
              Last updated: October 2026. This Privacy Policy outlines how <strong>{AGENT_DATA.name}</strong>, an authorized Life Insurance Advisor in Bhubaneswar, Odisha, collects, uses, and safeguards client personal information.
            </p>

            <h3 className="font-bold text-slate-800 text-sm pt-2">1. Information We Collect</h3>
            <p>
              When you submit a consultation request or save a calculation, we collect information such as your name, contact telephone/WhatsApp number, age, location within Odisha, and specified insurance requirements. For official policy proposals, standard KYC documents (Aadhaar, PAN, Bank verification) are collected strictly for submission to Life Insurance Corporation of India.
            </p>

            <h3 className="font-bold text-slate-800 text-sm pt-2">2. How We Use Your Data</h3>
            <p>
              Your contact details are used solely to provide personalized policy quotations, premium calculations, claim assistance, and renewal reminders. We operate a strict <strong>Zero Spam Guarantee</strong>. Your information is never sold, leased, or shared with third-party telemarketers.
            </p>

            <h3 className="font-bold text-slate-800 text-sm pt-2">3. Data Security</h3>
            <p>
              All digital form submissions and saved calculation estimates are securely encrypted and stored using Google Cloud & Firebase Firestore infrastructure conforming to industry safety standards.
            </p>
          </div>
        )}

        {/* TERMS OF USE */}
        {activeTab === 'terms' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Terms of Use</h2>
            <p>
              By accessing this website, you agree to these Terms of Use. If you disagree, please discontinue using this portal.
            </p>

            <h3 className="font-bold text-slate-800 text-sm pt-2">1. Nature of Website</h3>
            <p>
              This is an independent advisory and client support website operated by <strong>{AGENT_DATA.name}</strong>, an authorized agent of LIC of India (IRDAI License No. {AGENT_DATA.licenseNo}). It is not the official corporate portal of Life Insurance Corporation of India. The official website of LIC is{' '}
              <a href="https://www.licindia.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">
                www.licindia.in
              </a>.
            </p>

            <h3 className="font-bold text-slate-800 text-sm pt-2">2. Calculators & Estimators</h3>
            <p>
              All interactive calculators and charts on this site provide indicative estimates only based on illustrative mathematical models. Actual premiums, bonus declarations, and eligibility are governed strictly by the official policy contract issued by LIC of India upon underwriting.
            </p>
          </div>
        )}

        {/* REGULATORY DISCLAIMER */}
        {activeTab === 'disclaimer' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Regulatory Disclaimer & Compliance</h2>

            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-2">
              <div className="flex items-center gap-2 font-bold">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Statutory IRDAI Soliciation Notice:</span>
              </div>
              <p className="leading-relaxed font-medium">
                {MANDATORY_COMPLIANCE_DISCLAIMER}
              </p>
            </div>

            <h3 className="font-bold text-slate-800 text-sm pt-2">Section 41 of Insurance Act 1938 (Prohibition of Rebates)</h3>
            <p className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs italic">
              "No person shall allow or offer to allow, either directly or indirectly, as an inducement to any person to take out or renew or continue an insurance in respect of any kind of risk relating to lives or property in India, any rebate of the whole or part of the commission payable or any rebate of the premium shown on the policy, nor shall any person taking out or renewing or continuing a policy accept any rebate, except such rebate as may be allowed in accordance with the published prospectuses or tables of the insurer."
            </p>
            <p className="text-xs text-slate-500">
              Any breach of Section 41 is punishable with a fine which may extend to ten lakh rupees.
            </p>
          </div>
        )}

        {/* GRIEVANCE REDRESSAL */}
        {activeTab === 'grievance' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Grievance Redressal Mechanism</h2>
            <p>
              In case of any grievance or unresolved concern regarding your LIC policy, policyholders in Bhubaneswar have a structured, multi-tier escalation hierarchy:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <h4 className="font-bold text-slate-900 text-xs">Level 1: Branch & Divisional Office</h4>
                <p className="text-xs text-slate-600">
                  Approach the Branch Manager or Manager (CRM) at your servicing branch or the Divisional Office:
                  <br />
                  <strong>LIC Divisional Office, Jeevan Prakash, Master Canteen / Kharavela Nagar, Bhubaneswar - 751001</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <h4 className="font-bold text-slate-900 text-xs">Level 2: IRDAI Bima Bharosa Portal</h4>
                <p className="text-xs text-slate-600">
                  If the complaint is not resolved within 15 days, lodge your grievance directly on the IRDAI online grievance portal:
                </p>
                <a
                  href="https://bimabharosa.irdai.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0B3C8C] hover:underline pt-1"
                >
                  <span>Access Bima Bharosa Portal (bimabharosa.irdai.gov.in)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <h4 className="font-bold text-slate-900 text-xs">Level 3: Insurance Ombudsman (Bhubaneswar Jurisdiction)</h4>
                <p className="text-xs text-slate-600">
                  For claims repudiations, delay in settlement, or dispute in terms:
                  <br />
                  <strong>Office of the Insurance Ombudsman, 62, Forest Park, Bhubaneswar - 751009</strong>.
                  <br />
                  Email: <code>bhubaneswar@cioins.co.in</code>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
