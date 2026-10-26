import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  ArrowRight,
  Award,
  Users,
  HeartHandshake,
  FileCheck2,
  CheckCircle,
  Calculator,
  ChevronRight,
  Star,
  ExternalLink,
  Instagram,
  Umbrella,
  Clock,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { AGENT_DATA, VERIFY_LIC_NOTE } from '../data/agent';
import { PLANS_DATA } from '../data/plans';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { FAQS_DATA } from '../data/faqs';
import { ConsultationForm } from '../components/ConsultationForm';

interface HomePageProps {
  onOpenConsultation: (planName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('revival-lapsed-policy');
  const featuredPlans = PLANS_DATA.filter((p) => p.featured);
  const homeFaqs = FAQS_DATA.slice(0, 6);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const categories = [
    {
      id: 'term',
      name: 'Term / Protection',
      desc: 'High financial cover at lowest annual premium for family security',
      icon: Umbrella,
      badge: 'Max Cover',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'endowment',
      name: 'Endowment & Savings',
      desc: 'Guaranteed maturity corpus plus lifelong risk cover and bonuses',
      icon: Award,
      badge: 'Popular',
      color: 'from-amber-600 to-orange-700'
    },
    {
      id: 'child',
      name: 'Child Education Plans',
      desc: 'Guaranteed funds for engineering, medical, college & study abroad',
      icon: Sparkles,
      badge: 'Top Pick for Parents',
      color: 'from-emerald-600 to-teal-700'
    },
    {
      id: 'pension',
      name: 'Pension & Annuity',
      desc: 'Guaranteed monthly lifetime pension with return of purchase price',
      icon: Clock,
      badge: 'Retirement',
      color: 'from-purple-600 to-indigo-800'
    },
    {
      id: 'ulip',
      name: 'ULIP / Market Linked',
      desc: 'Equity & bond market growth with life cover and mortality refund',
      icon: FileCheck2,
      badge: 'Market Growth',
      color: 'from-cyan-600 to-blue-700'
    },
    {
      id: 'riders',
      name: 'Add-on Riders',
      desc: 'Double accident cover, permanent disability, and critical illness',
      icon: ShieldCheck,
      badge: 'Extra Protection',
      color: 'from-rose-600 to-red-700'
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-6 pb-14 lg:py-20 bg-gradient-to-b from-blue-50/70 via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 text-[#0B3C8C] px-3 py-1 rounded-full text-xs font-semibold shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Authorised IRDAI Life Insurance Advisor • Bhubaneswar</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.18] tracking-tight">
                Secure Your Family's Future with a Trusted{' '}
                <span className="text-[#0B3C8C] relative inline-block">
                  LIC Advisor
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2 text-amber-400 opacity-60"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="5" />
                  </svg>
                </span>{' '}
                in Bhubaneswar
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Expert, unbiased financial planning and 100% doorstep servicing. From high-cover Term Assurance to Child Education and Lifelong Guaranteed Pension, get customized solutions backed by India’s largest insurer.
              </p>

              {/* Two Direct CTAs + Consultation Button */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${AGENT_DATA.phone}`}
                  className="inline-flex items-center gap-2 bg-[#0B3C8C] hover:bg-[#093275] text-white px-5 py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call {AGENT_DATA.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${AGENT_DATA.whatsappNumber}?text=${encodeURIComponent(
                    AGENT_DATA.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenConsultation()}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-2xs cursor-pointer"
                >
                  <span>Free Consultation Form</span>
                  <ArrowRight className="w-4 h-4 text-blue-700" />
                </button>
              </div>

              {/* Trust badges strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Advisory Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Doorstep Document Pickup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Lifelong Claim Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Trust Card & Agent Photo Slot */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-slate-200/90 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl"></div>

                {/* Professional Advisor Portrait Slot */}
                <div className="relative mb-5 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50 border border-slate-200 text-center p-6">
                  {/* High Quality Professional Advisor Illustration / Photo Slot */}
                  <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-[#0B3C8C] to-[#1976D2] p-1.5 shadow-md mb-3">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <ShieldCheck className="w-14 h-14 text-[#0B3C8C]" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{AGENT_DATA.name}</h3>
                  <p className="text-xs text-slate-500 font-medium">{AGENT_DATA.tagline}</p>
                  <p className="text-[11px] text-blue-700 font-mono mt-0.5 font-semibold">
                    IRDAI License No: {AGENT_DATA.licenseNo}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Available in Bhubaneswar Today</span>
                  </div>
                </div>

                {/* Quick Consultation Intake Box */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Quick Doorstep Guidance
                    </span>
                    <span className="text-[11px] text-amber-600 font-medium">Bhubaneswar & Cuttack</span>
                  </div>
                  <ConsultationForm compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0B3C8C] via-[#0D47A1] to-[#0A3273] rounded-2xl p-6 sm:p-8 text-white shadow-xl shadow-blue-900/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-blue-800/60">
            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">
                {AGENT_DATA.experienceYears}
              </p>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 font-medium">
                Years Professional Experience
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                {AGENT_DATA.familiesServed}
              </p>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 font-medium">
                Odisha Families Guided
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">100%</p>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 font-medium">
                Personal Claim Support
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono">₹0</p>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 font-medium">
                Advisory & Doorstep Fee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLAN CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C] bg-blue-50 px-2.5 py-1 rounded-md">
            Comprehensive Life Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Explore LIC Insurance Plans by Financial Goal
          </h2>
          <p className="text-sm text-slate-600">
            Every family is unique. Choose the exact category that matches your milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                to={`/plans?category=${cat.id}`}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0B3C8C] transition">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{cat.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0B3C8C]">
                  <span>Explore Plans</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED PLANS SHOWCASE */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C]">
                Top Recommended
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Most Trusted LIC Policies for Odisha Families
              </h2>
              <p className="text-xs text-slate-500 mt-1">{VERIFY_LIC_NOTE}</p>
            </div>
            <Link
              to="/plans"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B3C8C] hover:text-blue-900"
            >
              <span>View All 20+ Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold font-mono text-[#0B3C8C] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                      {plan.tableNumber}
                    </span>
                    {plan.popularTag && (
                      <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full">
                        {plan.popularTag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{plan.name}</h3>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">{plan.tagline}</p>

                  {/* Key Highlights */}
                  <div className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
                    {plan.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 space-y-1">
                    <div className="flex justify-between">
                      <span>Entry Age:</span>
                      <strong className="text-slate-800">{plan.eligibility.minAge}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Min Sum Assured:</span>
                      <strong className="text-slate-800">{plan.eligibility.minSumAssured}</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <Link
                    to={`/plans/${plan.id}`}
                    className="flex-1 text-center py-2 px-3 rounded-lg border border-slate-300 hover:border-blue-700 text-slate-700 hover:text-[#0B3C8C] text-xs font-semibold transition"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => onOpenConsultation(plan.name)}
                    className="flex-1 text-center py-2 px-3 rounded-lg bg-[#0B3C8C] hover:bg-[#093275] text-white text-xs font-semibold shadow-xs transition"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE ME (6 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C]">
            Why Work With {AGENT_DATA.name}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Dedicated Doorstep Service vs. Impersonal Call Centers
          </h2>
          <p className="text-sm text-slate-600">
            When you invest in a 20-year policy, you need a trusted advisor in Bhubaneswar who will personally answer your calls and stand by your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Personalized Needs Analysis',
              desc: 'We calculate your Human Life Value and family liabilities before recommending any plan. No random product pitching.',
              icon: Calculator
            },
            {
              title: '100% Doorstep Claim Support',
              desc: 'During unfortunate events, I personally handle death or maturity claim dossiers at the Bhubaneswar branch so your family doesn’t suffer.',
              icon: HeartHandshake
            },
            {
              title: 'Lapsed Policy Revival Guidance',
              desc: 'Restart your old lapsed policies with maximum late-fee concessions during LIC Special Revival campaigns.',
              icon: Clock
            },
            {
              title: 'Nominee & Address Servicing',
              desc: 'Hassle-free endorsements for nominee updates, bank NEFT changes, and address transfers without standing in branch queues.',
              icon: FileCheck2
            },
            {
              title: 'Transparent & Ethical Advice',
              desc: 'Clear disclosure of bonuses, lock-in periods, and tax implications. Zero false promises or unrealistic return projections.',
              icon: ShieldCheck
            },
            {
              title: 'Direct WhatsApp Support',
              desc: 'Immediate replies for premium due dates, premium receipts, loan availability, and policy status queries on WhatsApp.',
              icon: MessageCircle
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-blue-300 shadow-2xs hover:shadow-md transition space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3C8C] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. HOW IT WORKS (4 Steps) */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              How We Help You Choose the Ideal Policy
            </h2>
            <p className="text-xs text-blue-200">
              Clear, transparent consultation at your home, office, or over a phone call.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Talk to Advisor',
                desc: 'Call or WhatsApp +91 89086 77424 or submit the consultation request form.'
              },
              {
                step: '02',
                title: 'Analyze Needs',
                desc: 'We assess your family’s income, monthly budget, liabilities, and financial milestones.'
              },
              {
                step: '03',
                title: 'Choose the Plan',
                desc: 'Review custom comparison charts and transparent benefit illustrations.'
              },
              {
                step: '04',
                title: 'Ongoing Servicing',
                desc: 'Doorstep KYC submission, fast policy bond issuance, and lifelong claim support.'
              }
            ].map((st, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-xs p-6 rounded-2xl border border-white/15 space-y-2"
              >
                <span className="text-2xl font-black font-mono text-amber-400">{st.step}</span>
                <h3 className="font-bold text-base text-white">{st.title}</h3>
                <p className="text-xs text-blue-100 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onOpenConsultation()}
              className="bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg transition"
            >
              Start Step 1: Request Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* 7. ADVERTISEMENT / BANNER SECTION (Compliant & Honest) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <ShieldCheck className="w-96 h-96" />
          </div>

          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="bg-white/20 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Family Security Campaign
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              A ₹1 Crore Pure Term Cover Costs Less Than Your Daily Morning Coffee*
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
              Don’t leave your family’s home loan and children’s education to chance. Protect them today with LIC New Jeevan Amar (Plan 755). Differentiated rates for healthy non-smokers and female lives.
            </p>
            <p className="text-[10px] text-amber-100/90 italic">
              *Indicative cost for a healthy 25-year-old non-smoker male for 30-year term. Exact premium depends on age, medical underwriting, and sum assured.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/plans/new-jeevan-amar"
                className="bg-slate-900 hover:bg-black text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition"
              >
                Learn About New Jeevan Amar
              </Link>
              <button
                onClick={() => onOpenConsultation('New Jeevan Amar (Plan 755)')}
                className="bg-white hover:bg-slate-100 text-orange-950 px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-xs"
              >
                Get Exact Term Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALCULATOR TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3C8C] bg-blue-50 px-2.5 py-1 rounded">
              <Calculator className="w-4 h-4" />
              <span>Interactive Financial Planning</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Calculate Your Life Cover & Retirement Corpus in 60 Seconds
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Use our 4 free calculators: Life Cover Needs, Premium Estimator, Child Higher Education Goal, and Retirement Corpus. Save calculation results to your account or share them with our advisor on WhatsApp.
            </p>
            <p className="text-[11px] text-slate-400 italic">
              Indicative values only. Final terms subject to official LIC proposal underwriting.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              to="/calculators"
              className="inline-flex items-center gap-2 bg-[#0B3C8C] hover:bg-[#093275] text-white px-6 py-3.5 rounded-xl text-xs font-semibold shadow-md transition"
            >
              <span>Launch Calculators</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SLIDER / GRID */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C]">
              Client Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What Families in Bhubaneswar Say
            </h2>
            <p className="text-xs text-slate-500">
              Real feedback from local doctors, software engineers, teachers, and business owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{item.story}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <h4 className="font-bold text-xs text-slate-900">{item.name}</h4>
                  <p className="text-[11px] text-slate-500">{item.roleOrLocation}</p>
                  <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {item.planPurchased}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/testimonials"
              className="text-xs font-semibold text-[#0B3C8C] hover:underline inline-flex items-center gap-1"
            >
              <span>Read More Client Stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION (Top 6) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C]">
            Common Queries
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-600">
            Clear answers on policy revivals, nominee updates, and claim settlements.
          </p>
        </div>

        <div className="space-y-3">
          {homeFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-900 hover:text-[#0B3C8C] transition"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0B3C8C]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/faq"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B3C8C] hover:underline"
          >
            <span>View All 16+ FAQs & Answers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 11. INSTAGRAM CONNECT BLOCK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-amber-50 rounded-2xl p-6 sm:p-8 border border-pink-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-md">
              <Instagram className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900">
                Follow @lic.bhubaneswar on Instagram
              </h3>
              <p className="text-xs text-slate-600">
                Daily financial tips, LIC bonus announcements, and awareness campaigns for Odisha residents.
              </p>
            </div>
          </div>
          <a
            href={AGENT_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-sm"
          >
            <span>Visit Instagram Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
};
