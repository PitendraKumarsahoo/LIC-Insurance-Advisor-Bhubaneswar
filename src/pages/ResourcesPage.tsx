import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  Download,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { ARTICLES_DATA, DOWNLOADABLE_DOCS } from '../data/resources';
import { ResourceArticle, DownloadableDoc } from '../types';

export const ResourcesPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'articles' | 'downloads'>('articles');

  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const q = searchQuery.toLowerCase();
    return (
      art.title.toLowerCase().includes(q) ||
      art.category.toLowerCase().includes(q) ||
      art.summary.toLowerCase().includes(q)
    );
  });

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Knowledge Base & Client Downloads
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Insurance Guides, Checklists & Articles
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Educate yourself on policy selection, claim documentation, tax savings, and download official KYC and revival checklists.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-5 py-2 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'articles'
                ? 'bg-[#0B3C8C] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Educational Articles ({ARTICLES_DATA.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('downloads')}
            className={`px-5 py-2 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'downloads'
                ? 'bg-[#0B3C8C] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Document Checklists ({DOWNLOADABLE_DOCS.length})</span>
          </button>
        </div>
      </div>

      {/* ARTICLES TAB */}
      {activeTab === 'articles' && (
        <div className="space-y-6">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles (e.g. claim, term, 80C, sum assured)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B3C8C] bg-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.slug}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg transition space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-semibold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{article.publishedDate}</span>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B3C8C] hover:underline cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DOWNLOADS & CHECKLISTS TAB */}
      {activeTab === 'downloads' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DOWNLOADABLE_DOCS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                    {doc.category}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                    Ready Reference
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-700" />
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{doc.description}</p>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Required Checklist Items:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {doc.itemsList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-900">
                  <strong>Pro Advisor Tip:</strong> {doc.tips}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-black py-1.5 px-3 rounded-lg border border-slate-300 hover:bg-slate-50 transition cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Print Checklist</span>
                </button>
                <a
                  href={`https://wa.me/918908677424?text=${encodeURIComponent(
                    `Hello, please help me with documents for ${doc.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#0B3C8C] hover:underline"
                >
                  Doorstep Verification Request →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              {selectedArticle.title}
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wide">
                Key Takeaways:
              </h4>
              <ul className="space-y-1 text-xs text-slate-600">
                {selectedArticle.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-[#0B3C8C] text-white px-5 py-2 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Back to Resources
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
