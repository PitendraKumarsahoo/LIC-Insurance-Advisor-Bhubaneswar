import React from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  Clock,
  FileCheck2,
  Phone,
  MessageCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Receipt,
  RotateCcw,
  Landmark,
  UserCheck,
  Smartphone
} from 'lucide-react';
import { AGENT_DATA } from '../data/agent';

interface ServicesPageProps {
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const servicesList = [
    {
      id: 'claims',
      title: 'Doorstep Claim Assistance (Maturity & Death Claims)',
      badge: 'Zero Fee Commitment',
      icon: HeartHandshake,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description:
        'During life’s most difficult moments, you need an empathetic professional, not a call center bot. I provide 100% personal hands-on guidance for compiling municipal death certificates, hospital records, and claim forms, and represent your file directly with LIC Bhubaneswar branch officers.',
      deliverables: [
        'Complete claim dossier preparation and verification at your home in Bhubaneswar',
        'Direct submission to the servicing branch (Branch I, II, CBO or Divisional Office)',
        'Speedy NEFT bank credit follow-up until funds reach the nominee’s account',
        'Maturity discharge voucher verification & advance intimation'
      ]
    },
    {
      id: 'revival',
      title: 'Lapsed Policy Revival & Late-Fee Concessions',
      badge: 'Save Your Old Policies',
      icon: RotateCcw,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      description:
        'Did you stop paying premiums on an old LIC policy? Don’t let your hard-earned savings go waste! We calculate the exact unpaid arrears, arrange medical certificates if required, and leverage official LIC Special Revival Campaigns where late fee interest concessions of up to 25% to 30% are granted.',
      deliverables: [
        'Free status calculation of exact arrears and accumulated bonus',
        'Guidance on Form 680 (Declaration of Good Health)',
        'Assistance in converting lapsed policies to "Paid-Up" status if budget is tight'
      ]
    },
    {
      id: 'servicing',
      title: 'Policy Servicing (Nominee, Address, Duplicate Bond)',
      badge: 'Hassle-Free Endorsements',
      icon: UserCheck,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      description:
        'Life changes—marriages happen, children grow, or you relocate across Bhubaneswar. We handle essential policy endorsements so your documents remain legally foolproof.',
      deliverables: [
        'Nominee addition, removal, or update under Section 39 of Insurance Act',
        'Residential address updates and branch transfers between cities',
        'Duplicate policy bond issuance in case original document is lost or damaged',
        'Bank account & PAN linking for seamless direct benefit transfers'
      ]
    },
    {
      id: 'loans',
      title: 'Emergency Policy Loan Assistance (at ~9% p.a.)',
      badge: 'Instant Liquidity',
      icon: Landmark,
      color: 'bg-amber-50 text-amber-800 border-amber-200',
      description:
        'Facing urgent medical bills or family obligations? Most traditional LIC policies allow you to borrow up to 90% of their surrender value at very low interest rates (typically 9% to 9.5% p.a. simple interest), without requiring income proofs or credit checks.',
      deliverables: [
        'Calculation of maximum loan entitlement on your active policies',
        'Loan agreement paperwork preparation and endorsement on policy bond',
        'Flexible repayment advice (pay interest only or lump sum principal whenever convenient)'
      ]
    },
    {
      id: 'planning',
      title: 'New Policy Guidance & Needs Assessment',
      badge: 'Unbiased Consultation',
      icon: ShieldCheck,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description:
        'Instead of selling whatever policy is in trend, we evaluate your family’s Human Life Value, existing mortgage liabilities, children’s higher education timelines, and tax goals to select the exact right combination of Term and Endowment policies.',
      deliverables: [
        'Comprehensive HLV life cover estimation',
        'Term insurance comparison with smoker/non-smoker discounts',
        'Child education roadmap (Amritbaal / Jeevan Tarun)',
        'Guaranteed regular income structures (Jeevan Utsav)'
      ]
    },
    {
      id: 'portal',
      title: 'LIC Customer Portal & Mobile App Onboarding',
      badge: 'Digital Convenience',
      icon: Smartphone,
      color: 'bg-cyan-50 text-cyan-800 border-cyan-200',
      description:
        'Empower yourself with 24x7 online access. We help you register on the official LIC Customer Portal and Mobile App so you can view policy status, download premium receipts for income tax, and make UPI payments from your phone.',
      deliverables: [
        'Step-by-step account setup and MPIN generation on LIC Mobile App',
        'Adding all family policies under a single consolidated digital dashboard',
        'Downloading official signed premium payment certificates for employer Form 16'
      ]
    }
  ];

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Complete Policyholder Lifecycle Support
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Advisory & Policy Servicing in Bhubaneswar
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          From buying the right policy to reviving old investments, managing endorsements, and securing claims—we provide end-to-end doorstep servicing at zero extra cost.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesList.map((srv) => {
          const Icon = srv.icon;
          return (
            <div
              key={srv.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg transition space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl border ${srv.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{srv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {srv.description}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    What We Do For You:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {srv.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#0B3C8C] font-bold mt-0.5">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3C8C] hover:underline cursor-pointer"
                >
                  <span>Request this service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`https://wa.me/${AGENT_DATA.whatsappNumber}?text=${encodeURIComponent(
                    `Hello ${AGENT_DATA.name}, I need assistance with ${srv.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg flex items-center gap-1 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Query</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tax Saving Decoded Box */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl">
        <div className="flex items-center gap-2">
          <Receipt className="w-6 h-6 text-amber-400" />
          <h3 className="text-xl font-bold text-white">
            Tax Saving Under Section 80C & Section 10(10D)
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-3xl">
          Under the Old Tax Regime, life insurance premiums paid for self, spouse, and children are eligible for deduction up to <strong>₹1,50,000 annually under Section 80C</strong>. Furthermore, under <strong>Section 10(10D)</strong>, all death claim proceeds are 100% tax-exempt for your nominee without any monetary cap. For traditional policies issued with annual premium up to ₹5 Lakhs, maturity proceeds also remain completely tax-free.
        </p>
        <p className="text-[11px] text-blue-200 italic">
          *Tax benefits are subject to changes in the Income Tax Act 1961. Consult your chartered accountant for individual tax planning advice.
        </p>
      </div>
    </div>
  );
};
