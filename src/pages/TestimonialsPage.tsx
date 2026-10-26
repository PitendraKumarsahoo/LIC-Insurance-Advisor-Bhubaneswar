import React from 'react';
import { Star, ShieldCheck, HeartHandshake, AlertCircle } from 'lucide-react';
import { TESTIMONIALS_DATA, TESTIMONIAL_DISCLAIMER_NOTE } from '../data/testimonials';
import { AGENT_DATA } from '../data/agent';

interface TestimonialsPageProps {
  onOpenConsultation: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Client Experiences & Trust
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Client Stories from Across Bhubaneswar
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Read genuine experiences from families, doctors, and professionals who rely on {AGENT_DATA.name} for honest insurance advisory and claim settlements.
        </p>

        {/* Regulatory note */}
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>{TESTIMONIAL_DISCLAIMER_NOTE}</span>
        </div>
      </div>

      {/* Grid of Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS_DATA.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-400">{t.date}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                "{t.story}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-1">
              <h4 className="font-bold text-sm text-slate-900">{t.name}</h4>
              <p className="text-xs text-slate-500">{t.roleOrLocation}</p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] font-semibold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded">
                  {t.planPurchased}
                </span>
                <span className="text-[10px] text-emerald-700 font-medium">
                  {t.verifiedTag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust CTA Banner */}
      <div className="bg-gradient-to-r from-[#0B3C8C] to-[#0D47A1] text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
        <h3 className="text-2xl font-bold">Experience Pressure-Free Consultation</h3>
        <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Join {AGENT_DATA.familiesServed} families who have planned their financial security with peace of mind. We provide free doorstep consultations across Bhubaneswar and Cuttack.
        </p>
        <button
          onClick={onOpenConsultation}
          className="bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition cursor-pointer"
        >
          Book Your Free Consultation Session
        </button>
      </div>
    </div>
  );
};
