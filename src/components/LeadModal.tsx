import React from 'react';
import { X, ShieldCheck, Sparkles } from 'lucide-react';
import { ConsultationForm } from './ConsultationForm';
import { AGENT_DATA } from '../data/agent';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanName?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, selectedPlanName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-slate-100 animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0B3C8C] to-[#0D47A1] text-white p-5 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition focus:outline-hidden"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-900 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wide">
              <Sparkles className="w-3 h-3 text-slate-900" />
              Free Consultation
            </span>
            <span className="text-blue-200 text-xs">• Bhubaneswar & Cuttack</span>
          </div>

          <h3 className="text-lg font-bold text-white">
            {selectedPlanName ? `Get Quote: ${selectedPlanName}` : "Schedule Your Advisory Session"}
          </h3>
          <p className="text-xs text-blue-100 mt-1">
            Personal guidance from {AGENT_DATA.name} (License No. {AGENT_DATA.licenseNo}). Doorstep, office, or phone consultations available.
          </p>
        </div>

        {/* Modal Body with Form */}
        <div className="p-5">
          <ConsultationForm initialPlanName={selectedPlanName} onSuccessClose={onClose} />
        </div>
      </div>
    </div>
  );
};
