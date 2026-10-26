import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  CheckCircle,
  ArrowRight,
  Filter,
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { PLANS_DATA } from '../data/plans';
import { PlanCategory } from '../types';
import { VERIFY_LIC_NOTE } from '../data/agent';

interface PlansPageProps {
  onOpenConsultation: (planName?: string) => void;
}

export const PlansPage: React.FC<PlansPageProps> = ({ onOpenConsultation }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = (searchParams.get('category') as PlanCategory | null) || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');

  const categoryTabs = [
    { id: 'all', label: 'All Plans' },
    { id: 'term', label: 'Term & Protection' },
    { id: 'endowment', label: 'Endowment & Savings' },
    { id: 'child', label: 'Child Education' },
    { id: 'pension', label: 'Pension & Annuity' },
    { id: 'ulip', label: 'ULIP / Market-Linked' },
    { id: 'riders', label: 'Riders' }
  ];

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const filteredPlans = useMemo(() => {
    return PLANS_DATA.filter((plan) => {
      const matchesCategory =
        selectedCategory === 'all' || plan.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesQuery =
        plan.name.toLowerCase().includes(q) ||
        plan.tableNumber.toLowerCase().includes(q) ||
        plan.tagline.toLowerCase().includes(q) ||
        plan.whoItIsFor.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Authorized LIC Portfolio
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore Current LIC Insurance Plans
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Comprehensive, government-backed life assurance solutions for savings, education, retirement, and family income protection in Bhubaneswar.
        </p>

        {/* Regulatory note */}
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>{VERIFY_LIC_NOTE}</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categoryTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleCategoryChange(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-[#0B3C8C] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by plan name (e.g. Jeevan Anand, Jeevan Labh, Amritbaal) or Table Number (715, 836, 755)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B3C8C] focus:border-transparent bg-slate-50/50"
          />
        </div>
      </div>

      {/* Plan Cards Grid */}
      {filteredPlans.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
          <p className="text-base font-semibold text-slate-800">
            No plans found matching "{searchQuery}" in this category.
          </p>
          <p className="text-xs text-slate-500">
            Try searching with broader terms or clear your filters to view all available policies.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-blue-50 text-[#0B3C8C] rounded-lg text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold font-mono text-[#0B3C8C] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                    {plan.tableNumber}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                    {plan.categoryLabel.split('/')[0]}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">{plan.name}</h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                  {plan.tagline}
                </p>

                {/* Key features */}
                <div className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
                  {plan.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Eligibility specs */}
                <div className="mt-4 p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 space-y-1">
                  <div className="flex justify-between">
                    <span>Entry Age:</span>
                    <strong className="text-slate-800">{plan.eligibility.minAge}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Min Sum Assured:</span>
                    <strong className="text-slate-800">{plan.eligibility.minSumAssured}</strong>
                  </div>
                  {plan.eligibility.premiumPayingTerm && (
                    <div className="flex justify-between">
                      <span>Premium Term:</span>
                      <strong className="text-slate-800">{plan.eligibility.premiumPayingTerm}</strong>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                <Link
                  to={`/plans/${plan.id}`}
                  className="flex-1 text-center py-2 px-3 rounded-lg border border-slate-300 hover:border-blue-700 text-slate-700 hover:text-[#0B3C8C] text-xs font-semibold transition"
                >
                  View Details
                </Link>
                <button
                  onClick={() => onOpenConsultation(plan.name)}
                  className="flex-1 text-center py-2 px-3 rounded-lg bg-[#0B3C8C] hover:bg-[#093275] text-white text-xs font-semibold shadow-xs transition cursor-pointer"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Assistance Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-bold text-lg text-white">
            Unsure Which LIC Policy Fits Your Income & Goals?
          </h3>
          <p className="text-xs text-blue-200">
            Let's do a free 15-minute needs assessment. We compare maturity returns, tax deductions, and life covers with zero obligation.
          </p>
        </div>
        <button
          onClick={() => onOpenConsultation()}
          className="bg-amber-400 hover:bg-amber-300 text-blue-950 px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition whitespace-nowrap cursor-pointer"
        >
          Request Personalized Comparison
        </button>
      </div>
    </div>
  );
};
