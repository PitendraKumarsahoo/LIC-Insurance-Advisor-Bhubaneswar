import React, { useState } from 'react';
import { X, CheckSquare, Copy, Check, Info, FileText } from 'lucide-react';
import { CLIENT_HANDOVER_CHECKLIST, AGENT_DATA } from '../data/agent';

interface HandoverChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HandoverChecklistModal: React.FC<HandoverChecklistModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200">
        <div className="p-5 bg-slate-900 text-white rounded-t-2xl flex items-center justify-between sticky top-0 z-10 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Client Handover Checklist</h3>
              <p className="text-xs text-slate-400">
                Replace all bracketed [PLACEHOLDERS] with your genuine IRDAI & LIC details in <code>/src/data/agent.ts</code>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-2">
            <div className="flex items-center gap-1.5 font-bold">
              <Info className="w-4 h-4 text-amber-700" />
              <span>Production Client Handover Guide</span>
            </div>
            <p>
              To complete the handover for your client, simply update the single configuration file:
              <br />
              <strong className="font-mono bg-amber-100/80 px-1.5 py-0.5 rounded text-amber-950">
                /src/data/agent.ts
              </strong>
              . All pages, headers, footers, schema markup, and compliance notices will automatically update across the entire website!
            </p>
          </div>

          <div className="space-y-3">
            {CLIENT_HANDOVER_CHECKLIST.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:shadow-xs transition space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0B3C8C] text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <strong className="text-xs font-mono bg-blue-50 text-blue-900 px-2 py-0.5 rounded border border-blue-200">
                      {item.field}
                    </strong>
                  </div>
                  <button
                    onClick={() => handleCopy(item.field, idx)}
                    className="text-[11px] text-slate-500 hover:text-[#0B3C8C] flex items-center gap-1 px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 transition"
                    title="Copy placeholder tag"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy tag</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-700 font-medium">{item.purpose}</p>

                <div className="text-[11px] text-slate-500 flex flex-wrap gap-x-4 gap-y-1">
                  <span>
                    <strong>Current value:</strong> {item.currentValue}
                  </span>
                  <span>
                    <strong>Appears on:</strong> {item.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
            <h5 className="font-semibold text-slate-800 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-blue-700" />
              IRDAI Compliance Rules Checked
            </h5>
            <p>✓ No official LIC corporate logo used (clean custom advisor wordmark with shield icon).</p>
            <p>✓ Mandatory solicitation disclaimer prominently present on all pages.</p>
            <p>✓ No misleading guaranteed returns or unfair comparisons with other insurers.</p>
            <p>✓ Dedicated link provided to official licindia.in and IRDAI Bima Bharosa portal.</p>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0B3C8C] hover:bg-[#093275] text-white rounded-lg text-xs font-semibold"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};
