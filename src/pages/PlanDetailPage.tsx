import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  ArrowLeft,
  MessageCircle,
  Phone,
  FileCheck2,
  AlertTriangle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { PLANS_DATA } from '../data/plans';
import { AGENT_DATA, VERIFY_LIC_NOTE } from '../data/agent';
import { ConsultationForm } from '../components/ConsultationForm';

interface PlanDetailPageProps {
  onOpenConsultation: (planName?: string) => void;
}

export const PlanDetailPage: React.FC<PlanDetailPageProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const plan = PLANS_DATA.find((p) => p.id === slug);

  if (!plan) {
    return (
      <div className="py-20 max-w-xl mx-auto px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Plan Not Found</h2>
        <p className="text-sm text-slate-600">
          The requested insurance plan could not be located in our catalog.
        </p>
        <Link
          to="/plans"
          className="inline-flex items-center gap-2 bg-[#0B3C8C] text-white px-5 py-2.5 rounded-xl text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Plans</span>
        </Link>
      </div>
    );
  }

  const whatsappMessage = `Hello ${AGENT_DATA.name}, I want more information and a premium quote for ${plan.name} (${plan.tableNumber}).`;
  const whatsappUrl = `https://wa.me/${AGENT_DATA.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-[#0B3C8C]">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/plans" className="hover:text-[#0B3C8C]">
          LIC Plans
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-800 font-semibold">{plan.name}</span>
      </nav>

      {/* Hero Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#0B3C8C] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
              {plan.tableNumber}
            </span>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
              {plan.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-xs transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${AGENT_DATA.phone}`}
              className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700" />
              <span>Call Advisor</span>
            </a>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {plan.name}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          {plan.tagline}
        </p>

        {/* Regulatory Note */}
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Regulatory Note:</strong> {VERIFY_LIC_NOTE} As an authorized advisor in Bhubaneswar, I provide personalized premium benefit charts and proposal guidance at your doorstep.
          </p>
        </div>
      </div>

      {/* Main Grid: Details Left, Quote Form Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column (8 cols): Plan Details */}
        <div className="lg:col-span-8 space-y-8">
          {/* Overview */}
          <section className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-3">
            <h2 className="text-lg font-bold text-slate-900">Plan Overview</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{plan.overview}</p>

            <div className="mt-4 p-4 bg-blue-50/70 rounded-xl border border-blue-100 space-y-1">
              <span className="text-xs font-bold text-[#0B3C8C] uppercase tracking-wider">
                Who It Is Designed For:
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">{plan.whoItIsFor}</p>
            </div>
          </section>

          {/* Key Features */}
          <section className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Salient Features</h2>
            <div className="grid grid-cols-1 gap-3">
              {plan.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility Matrix */}
          <section className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Eligibility & Restrictions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <span className="text-slate-500 font-medium">Minimum Entry Age:</span>
                <p className="font-bold text-slate-900">{plan.eligibility.minAge}</p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <span className="text-slate-500 font-medium">Maximum Entry Age:</span>
                <p className="font-bold text-slate-900">{plan.eligibility.maxAge}</p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <span className="text-slate-500 font-medium">Policy Term:</span>
                <p className="font-bold text-slate-900">
                  {plan.eligibility.minTerm} to {plan.eligibility.maxTerm}
                </p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <span className="text-slate-500 font-medium">Minimum Basic Sum Assured:</span>
                <p className="font-bold text-slate-900">{plan.eligibility.minSumAssured}</p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1 sm:col-span-2">
                <span className="text-slate-500 font-medium">Maximum Sum Assured:</span>
                <p className="font-bold text-slate-900">{plan.eligibility.maxSumAssured}</p>
              </div>
              {plan.eligibility.premiumPayingTerm && (
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1 sm:col-span-2">
                  <span className="text-slate-500 font-medium">Premium Paying Term:</span>
                  <p className="font-bold text-slate-900">{plan.eligibility.premiumPayingTerm}</p>
                </div>
              )}
            </div>
          </section>

          {/* Benefits: Maturity & Death */}
          <section className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-3">
            <h2 className="text-lg font-bold text-slate-900">Benefits Payable</h2>
            <div className="space-y-3 text-xs sm:text-sm">
              {plan.benefits.map((b, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                  <p className="text-slate-800 leading-relaxed font-medium">{b}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Riders & Tax Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-2.5">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                Available Riders
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                {plan.riders.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-2.5">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-emerald-700" />
                Tax Implications
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{plan.taxNote}</p>
            </section>
          </div>

          {/* FAQs on this Plan */}
          {plan.faqs && plan.faqs.length > 0 && (
            <section className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-700" />
                Frequently Asked Questions about {plan.name}
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                {plan.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl space-y-1.5">
                    <p className="font-bold text-slate-900">{faq.question}</p>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Official Website verification link */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
            <span>Want to cross-check latest circulars directly?</span>
            <a
              href="https://www.licindia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-700 hover:underline inline-flex items-center gap-1"
            >
              <span>Visit licindia.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column (4 cols): Lead Quote Form Sticky */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded">
                Personalized Quotation
              </span>
              <h3 className="text-lg font-bold text-slate-900">Get a Quote for this Plan</h3>
              <p className="text-xs text-slate-500">
                Receive customized maturity illustration charts and premium calculation directly on WhatsApp.
              </p>
            </div>

            <ConsultationForm initialPlanName={`${plan.name} (${plan.tableNumber})`} compact />
          </div>
        </div>
      </div>
    </div>
  );
};
