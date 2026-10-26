import React from 'react';
import {
  ShieldCheck,
  Award,
  Users,
  HeartHandshake,
  FileCheck,
  CheckCircle,
  Calendar,
  Building2,
  Clock,
  Phone,
  MessageCircle,
  MapPin
} from 'lucide-react';
import { AGENT_DATA, MANDATORY_COMPLIANCE_DISCLAIMER } from '../data/agent';

interface AboutPageProps {
  onOpenConsultation: () => void;
  onOpenHandoverModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation, onOpenHandoverModal }) => {
  return (
    <div className="py-12 space-y-16">
      {/* Hero / Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Professional Biography
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              About {AGENT_DATA.name} – Your Trusted Insurance Partner in Bhubaneswar
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              With over <strong className="text-slate-900">{AGENT_DATA.experienceYears} years</strong> of dedicated service and more than <strong className="text-slate-900">{AGENT_DATA.familiesServed} families</strong> guided across Bhubaneswar, Cuttack, and Odisha, my mission is to deliver transparent, reliable, and pressure-free financial protection for your household.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              As an authorized Life Insurance Advisor licensed by the Insurance Regulatory and Development Authority of India (IRDAI), I operate with strict adherence to ethical standards, prompt doorstep service, and lifelong claim support.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${AGENT_DATA.phone}`}
                className="bg-[#0B3C8C] hover:bg-[#093275] text-white px-5 py-2.5 rounded-xl font-semibold text-xs shadow-md transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Advisor Directly</span>
              </a>
              <button
                onClick={onOpenConsultation}
                className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 px-5 py-2.5 rounded-xl font-semibold text-xs transition shadow-2xs cursor-pointer"
              >
                Schedule Free Meeting
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 text-center relative overflow-hidden">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-[#0B3C8C] to-[#1E88E5] p-1.5 shadow-lg mb-4">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <ShieldCheck className="w-16 h-16 text-[#0B3C8C]" />
                </div>
              </div>
              <h3 className="font-bold text-xl text-slate-900">{AGENT_DATA.name}</h3>
              <p className="text-xs text-amber-600 font-semibold">{AGENT_DATA.tagline}</p>
              <p className="text-xs text-slate-500 mt-1">{AGENT_DATA.division}</p>

              <div className="mt-5 p-3.5 bg-slate-50 rounded-xl text-xs space-y-2 text-left border border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-500">License No:</span>
                  <span className="font-mono font-bold text-slate-800">{AGENT_DATA.licenseNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Agent Code:</span>
                  <span className="font-mono font-bold text-slate-800">{AGENT_DATA.agentCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Branch Office:</span>
                  <span className="font-bold text-slate-800">{AGENT_DATA.branch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">License Validity:</span>
                  <span className="font-bold text-slate-800">{AGENT_DATA.licenseValidity}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Office: {AGENT_DATA.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Credentials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Official IRDAI & LIC Registration Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
                Regulator & Licensing
              </span>
              <p className="font-bold text-slate-900 text-sm">IRDAI Life Insurance License</p>
              <p className="text-slate-600">
                Licensed under Section 42 of Insurance Act 1938 to solicit and service life insurance policies for LIC of India.
              </p>
              <p className="font-mono text-blue-700 font-bold pt-1">No: {AGENT_DATA.licenseNo}</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
                Servicing Branch & Division
              </span>
              <p className="font-bold text-slate-900 text-sm">{AGENT_DATA.branch}</p>
              <p className="text-slate-600">
                Attached to {AGENT_DATA.division}, East Central Zone. Direct coordination with branch underwriters and claims officers.
              </p>
              <p className="font-mono text-blue-700 font-bold pt-1">Code: {AGENT_DATA.agentCode}</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
                Performance Standing
              </span>
              <p className="font-bold text-slate-900 text-sm">Professional Club Standing</p>
              <p className="text-slate-600">
                {AGENT_DATA.clubMembership}. Awarded based on high persistency ratio, ethical sales practices, and client satisfaction.
              </p>
              <button
                onClick={onOpenHandoverModal}
                className="text-amber-600 hover:text-amber-700 font-medium underline text-[11px] pt-1 cursor-pointer block"
              >
                Customize details via Handover Checklist →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C]">
            Advisory Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Our Guiding Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3C8C] flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-bold text-base text-slate-900">Need-Based Suitability</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never recommend a plan just because of commissions. Every policy proposal begins with calculating your Human Life Value, existing loans, and realistic monthly surplus.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-bold text-base text-slate-900">Lifelong Claim Commitment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Buying a policy takes 20 minutes, but claims happen decades later. I ensure all nominee records are current and personally guide your family through branch paperwork when needed most.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-bold text-base text-slate-900">Complete Transparency</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We clearly highlight surrender deductions, lock-in periods, and tax exemptions so there are never any surprises or unmet expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center">
          Milestones in Insurance Advisory
        </h2>
        <div className="space-y-6 border-l-2 border-blue-200 ml-4 pl-6">
          <div className="relative">
            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#0B3C8C] border-2 border-white"></span>
            <span className="text-xs font-mono font-bold text-blue-700">Year 1 – Beginning</span>
            <h4 className="font-bold text-sm text-slate-900 mt-0.5">IRDAI Licensing & Training</h4>
            <p className="text-xs text-slate-600 mt-1">
              Completed rigorous IRDAI pre-recruitment training and joined LIC Bhubaneswar Division to provide professional life insurance consulting.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-2 border-white"></span>
            <span className="text-xs font-mono font-bold text-amber-600">Milestone 500+</span>
            <h4 className="font-bold text-sm text-slate-900 mt-0.5">Expanding Doorstep Services</h4>
            <p className="text-xs text-slate-600 mt-1">
              Crossed 500+ families served across Saheed Nagar, Nayapalli, Patia, and Cuttack. Pioneered proactive annual renewal reminders and claim dossier prep.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white"></span>
            <span className="text-xs font-mono font-bold text-emerald-600">Present Day</span>
            <h4 className="font-bold text-sm text-slate-900 mt-0.5">
              {AGENT_DATA.familiesServed} Families & Digital Policyholder Hub
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              Equipping clients with digital calculators, instant WhatsApp queries, and seamless branch liaison for swift claim settlements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
