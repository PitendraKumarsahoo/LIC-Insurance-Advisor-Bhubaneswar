import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { FAQS_DATA } from '../data/faqs';
import { AGENT_DATA } from '../data/agent';

export const FaqPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({
    'revival-lapsed-policy': true,
    'death-claim-process': true
  });

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'servicing', label: 'Revival & Servicing' },
    { id: 'claims', label: 'Claim Settlement' },
    { id: 'buying', label: 'Choosing Plans' },
    { id: 'tax', label: 'Tax Deductions' },
    { id: 'general', label: 'Advisor & Grievance' }
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'all' || faq.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesQuery =
        faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Knowledge Base & Help Desk
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Detailed, clear answers regarding lapsed policy revivals, death claims, maturity payouts, emergency loans, and nominee updates.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0B3C8C] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. revival, loan, nominee, free-look, tax)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B3C8C] bg-slate-50/50"
          />
        </div>
      </div>

      {/* FAQ Items Accordion */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-10 text-center bg-white rounded-2xl border border-slate-200 space-y-2">
            <p className="font-semibold text-slate-800 text-sm">
              No matching questions found for "{searchQuery}".
            </p>
            <p className="text-xs text-slate-500">
              Have a custom query? Reach out directly via WhatsApp for immediate guidance.
            </p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openFaqIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-900 hover:text-[#0B3C8C] transition cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0B3C8C]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5 space-y-3 bg-slate-50/30">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Direct Contact Bar */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 text-center space-y-3">
        <h3 className="font-bold text-base text-slate-900">
          Still Have Questions About Your Specific LIC Policy?
        </h3>
        <p className="text-xs text-slate-600 max-w-lg mx-auto">
          Every policy is unique. Message me your policy number or question on WhatsApp for a fast, free verification.
        </p>
        <div className="flex items-center justify-center gap-3 pt-1">
          <a
            href={`https://wa.me/${AGENT_DATA.whatsappNumber}?text=${encodeURIComponent(
              'Hello, I have a specific question about my LIC policy.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask on WhatsApp</span>
          </a>
          <a
            href={`tel:${AGENT_DATA.phone}`}
            className="inline-flex items-center gap-1.5 bg-[#0B3C8C] hover:bg-[#093275] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {AGENT_DATA.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
