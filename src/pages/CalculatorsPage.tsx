import React, { useState, useEffect } from 'react';
import {
  Calculator,
  ShieldCheck,
  TrendingUp,
  GraduationCap,
  Sparkles,
  Bookmark,
  Share2,
  Trash2,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  User,
  Info
} from 'lucide-react';
import {
  auth,
  loginWithGoogle,
  saveQuote,
  fetchUserSavedQuotes,
  deleteSavedQuote,
  SavedQuoteData
} from '../firebase/config';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { AGENT_DATA } from '../data/agent';

export const CalculatorsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'life_cover' | 'premium' | 'child_edu' | 'retirement'>(
    'life_cover'
  );

  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [savedQuotes, setSavedQuotes] = useState<SavedQuoteData[]>([]);
  const [savingLoading, setSavingLoading] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  // 1. Life Cover Needs State
  const [annualIncome, setAnnualIncome] = useState<number>(1000000); // 10 Lakhs
  const [yearsToSupport, setYearsToSupport] = useState<number>(15);
  const [totalLiabilities, setTotalLiabilities] = useState<number>(3500000); // Home loan etc.
  const [existingSavings, setExistingSavings] = useState<number>(1200000); // Liquid assets

  // 2. Indicative Premium Estimator State
  const [planType, setPlanType] = useState<string>('term');
  const [entryAge, setEntryAge] = useState<number>(30);
  const [policyTerm, setPolicyTerm] = useState<number>(20);
  const [sumAssured, setSumAssured] = useState<number>(2500000); // 25 Lakhs

  // 3. Child Education Goal State
  const [childCurrentAge, setChildCurrentAge] = useState<number>(4);
  const [targetCollegeFund, setTargetCollegeFund] = useState<number>(2500000); // 25 Lakhs
  const [expectedReturnRate, setExpectedReturnRate] = useState<number>(7.5);

  // 4. Retirement Corpus State
  const [currentAge, setCurrentAge] = useState<number>(35);
  const [retirementAge, setRetirementAge] = useState<number>(60);
  const [desiredMonthlyPension, setDesiredMonthlyPension] = useState<number>(60000);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        loadUserQuotes(u.uid);
      } else {
        setSavedQuotes([]);
      }
    });
    return () => unsub();
  }, []);

  const loadUserQuotes = async (uid: string) => {
    try {
      const quotes = await fetchUserSavedQuotes(uid);
      setSavedQuotes(quotes);
    } catch (err) {
      console.error('Error fetching quotes:', err);
    }
  };

  // Calculations
  // 1. Life Cover Needs: (Annual Income * Years) + Liabilities - Existing Savings
  const calculatedLifeCover = Math.max(
    annualIncome * yearsToSupport + totalLiabilities - existingSavings,
    annualIncome * 10
  );

  // 2. Premium Estimator (Indicative rate model)
  const calculateIndicativePremium = () => {
    let ratePerThousand = 2.5; // default base
    if (planType === 'term') {
      ratePerThousand = 1.2 + (entryAge - 18) * 0.15;
    } else if (planType === 'endowment') {
      ratePerThousand = 45 - (policyTerm - 15) * 1.2 + (entryAge - 20) * 0.8;
    } else if (planType === 'guaranteed_income') {
      ratePerThousand = 80 - (policyTerm - 10) * 2;
    } else if (planType === 'child') {
      ratePerThousand = 50 + (entryAge - 25) * 0.5;
    }
    const annual = Math.round((sumAssured / 1000) * ratePerThousand);
    const monthly = Math.round(annual / 12);
    return { annual, monthly };
  };
  const { annual: estAnnualPremium, monthly: estMonthlyPremium } = calculateIndicativePremium();

  // 3. Child Education Goal
  const yearsToCollege = Math.max(18 - childCurrentAge, 1);
  const monthsToCollege = yearsToCollege * 12;
  const monthlyRate = expectedReturnRate / 100 / 12;
  const requiredMonthlySavings = Math.round(
    targetCollegeFund * (monthlyRate / (Math.pow(1 + monthlyRate, monthsToCollege) - 1))
  );

  // 4. Retirement Corpus
  const yearsToRetire = Math.max(retirementAge - currentAge, 1);
  const annualPensionRequired = desiredMonthlyPension * 12;
  // Rule of thumb at 6.5% safe withdrawal/annuity rate
  const requiredRetirementCorpus = Math.round(annualPensionRequired / 0.065);
  const monthlyRetirementInvestment = Math.round(
    requiredRetirementCorpus / (yearsToRetire * 12 * 1.8)
  );

  const formatRupees = (amount: number) => {
    return '₹' + amount.toLocaleString('en-IN');
  };

  const handleSaveCurrentQuote = async () => {
    if (!user) {
      try {
        await loginWithGoogle();
      } catch (err) {
        console.error('Login error:', err);
        return;
      }
    }

    const currentUser = auth.currentUser;
    if (!currentUser) return;

    setSavingLoading(true);
    try {
      let quotePayload: any;
      if (activeTab === 'life_cover') {
        quotePayload = {
          calculatorType: 'Life Cover Needs',
          summary: `Required Cover: ${formatRupees(calculatedLifeCover)} based on ${formatRupees(
            annualIncome
          )} income`,
          inputs: { annualIncome, yearsToSupport, totalLiabilities, existingSavings },
          results: { calculatedLifeCover }
        };
      } else if (activeTab === 'premium') {
        quotePayload = {
          calculatorType: 'Indicative Premium Estimator',
          summary: `Plan: ${planType.toUpperCase()} | Cover: ${formatRupees(
            sumAssured
          )} | Est: ${formatRupees(estAnnualPremium)}/yr`,
          inputs: { planType, entryAge, policyTerm, sumAssured },
          results: { estAnnualPremium, estMonthlyPremium }
        };
      } else if (activeTab === 'child_edu') {
        quotePayload = {
          calculatorType: 'Child Education Goal',
          summary: `Target: ${formatRupees(
            targetCollegeFund
          )} in ${yearsToCollege} yrs | Req: ${formatRupees(requiredMonthlySavings)}/mo`,
          inputs: { childCurrentAge, targetCollegeFund, expectedReturnRate },
          results: { requiredMonthlySavings, yearsToCollege }
        };
      } else {
        quotePayload = {
          calculatorType: 'Retirement Corpus Planner',
          summary: `Target Corpus: ${formatRupees(
            requiredRetirementCorpus
          )} for ${formatRupees(desiredMonthlyPension)}/mo pension`,
          inputs: { currentAge, retirementAge, desiredMonthlyPension },
          results: { requiredRetirementCorpus, monthlyRetirementInvestment }
        };
      }

      await saveQuote({
        userId: currentUser.uid,
        userEmail: currentUser.email || 'unknown',
        ...quotePayload
      });

      setSaveSuccessMsg('Calculation saved successfully to your account!');
      loadUserQuotes(currentUser.uid);
      setTimeout(() => setSaveSuccessMsg(''), 4000);
    } catch (err) {
      console.error('Failed to save calculation:', err);
    } finally {
      setSavingLoading(false);
    }
  };

  const handleDeleteQuote = async (id?: string) => {
    if (!id || !user) return;
    try {
      await deleteSavedQuote(id);
      loadUserQuotes(user.uid);
    } catch (err) {
      console.error('Failed to delete quote:', err);
    }
  };

  const getWhatsAppShareUrl = () => {
    let text = `Hello ${AGENT_DATA.name}, I used your website calculator for `;
    if (activeTab === 'life_cover') {
      text += `Life Cover Needs. My annual income is ${formatRupees(
        annualIncome
      )}, and the recommended cover is ${formatRupees(calculatedLifeCover)}. Could you send me an exact LIC policy quotation?`;
    } else if (activeTab === 'premium') {
      text += `Premium Estimator for ${planType.toUpperCase()} plan (Age: ${entryAge}, Term: ${policyTerm} yrs, SA: ${formatRupees(
        sumAssured
      )}). Please guide me with official benefit charts.`;
    } else if (activeTab === 'child_edu') {
      text += `Child Education Goal. Target fund is ${formatRupees(
        targetCollegeFund
      )} in ${yearsToCollege} years. Please share Amritbaal / Jeevan Tarun illustrations.`;
    } else {
      text += `Retirement Corpus. I desire ${formatRupees(
        desiredMonthlyPension
      )} monthly pension at age ${retirementAge}. Please share Jeevan Shanti or Saral Pension options.`;
    }
    return `https://wa.me/${AGENT_DATA.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Financial Advisory Tools
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Interactive Insurance & Wealth Calculators
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Estimate your family's exact life cover requirements, indicative premiums, child education goals, and retirement corpus with mathematical clarity.
        </p>

        {/* Regulatory disclaimer */}
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Regulatory Notice:</strong> Calculators generate indicative values only. Actual premiums and benefits are subject to official LIC proposal underwriting and applicable taxes.
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 overflow-x-auto max-w-full">
          {[
            { id: 'life_cover', label: '1. Life Cover Needs', icon: ShieldCheck },
            { id: 'premium', label: '2. Premium Estimator', icon: Calculator },
            { id: 'child_edu', label: '3. Child Education Fund', icon: GraduationCap },
            { id: 'retirement', label: '4. Retirement Corpus', icon: TrendingUp }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-[#0B3C8C] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Calculator Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          {/* TAB 1: LIFE COVER NEEDS */}
          {activeTab === 'life_cover' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Human Life Value & Debt Shield Calculator
                </h3>
                <p className="text-xs text-slate-500">
                  Formula: (Annual Income × Years to Support) + Outstanding Liabilities - Existing Liquid Savings
                </p>
              </div>

              {/* Annual Income */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Current Annual Income (Take-Home):</span>
                  <span className="font-mono text-blue-700 font-bold">{formatRupees(annualIncome)}</span>
                </div>
                <input
                  type="range"
                  min={300000}
                  max={5000000}
                  step={50000}
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Number(e.target.value))}
                  className="w-full accent-[#0B3C8C]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>₹3 Lakhs</span>
                  <span>₹25 Lakhs</span>
                  <span>₹50 Lakhs</span>
                </div>
              </div>

              {/* Years to Support */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Years Your Family Needs Income Support:</span>
                  <span className="font-mono text-blue-700 font-bold">{yearsToSupport} Years</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={yearsToSupport}
                  onChange={(e) => setYearsToSupport(Number(e.target.value))}
                  className="w-full accent-[#0B3C8C]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>5 Yrs</span>
                  <span>15 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>

              {/* Outstanding Liabilities */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Total Debt (Home Loan, Car Loan, Personal Debt):</span>
                  <span className="font-mono text-blue-700 font-bold">{formatRupees(totalLiabilities)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={10000000}
                  step={100000}
                  value={totalLiabilities}
                  onChange={(e) => setTotalLiabilities(Number(e.target.value))}
                  className="w-full accent-[#0B3C8C]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>₹0</span>
                  <span>₹50 Lakhs</span>
                  <span>₹1 Crore</span>
                </div>
              </div>

              {/* Existing Savings */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Existing Liquid Savings (FD, EPF, Mutual Funds):</span>
                  <span className="font-mono text-blue-700 font-bold">{formatRupees(existingSavings)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={5000000}
                  step={100000}
                  value={existingSavings}
                  onChange={(e) => setExistingSavings(Number(e.target.value))}
                  className="w-full accent-[#0B3C8C]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>₹0</span>
                  <span>₹25 Lakhs</span>
                  <span>₹50 Lakhs</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INDICATIVE PREMIUM ESTIMATOR */}
          {activeTab === 'premium' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Indicative LIC Premium Estimator
                </h3>
                <p className="text-xs text-slate-500">
                  Estimate approximate annual and monthly contributions across major policy categories.
                </p>
              </div>

              {/* Plan Type Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Plan Category:
                </label>
                <select
                  value={planType}
                  onChange={(e) => setPlanType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-slate-50 focus:outline-hidden focus:ring-2 focus:ring-[#0B3C8C]"
                >
                  <option value="term">Pure Term Assurance (e.g. New Jeevan Amar 755)</option>
                  <option value="endowment">Endowment Savings (e.g. Jeevan Labh 836 / Anand 715)</option>
                  <option value="guaranteed_income">10% Guaranteed Income For Life (e.g. Jeevan Utsav 871)</option>
                  <option value="child">Child Higher Education (e.g. Amritbaal 874)</option>
                </select>
              </div>

              {/* Entry Age */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Your Current Age:</span>
                  <span className="font-mono text-blue-700 font-bold">{entryAge} Years</span>
                </div>
                <input
                  type="range"
                  min={18}
                  max={60}
                  step={1}
                  value={entryAge}
                  onChange={(e) => setEntryAge(Number(e.target.value))}
                  className="w-full accent-[#0B3C8C]"
                />
              </div>

              {/* Policy Term */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Policy Term (Duration):</span>
                  <span className="font-mono text-blue-700 font-bold">{policyTerm} Years</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={35}
                  step={1}
                  value={policyTerm}
                  onChange={(e) => setPolicyTerm(Number(e.target.value))}
                  className="w-full accent-[#0B3C8C]"
                />
              </div>

              {/* Sum Assured */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Basic Sum Assured:</span>
                  <span className="font-mono text-blue-700 font-bold">{formatRupees(sumAssured)}</span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={20000000}
                  step={500000}
                  value={sumAssured}
                  onChange={(e) => setSumAssured(Number(e.target.value))}
                  className="w-full accent-[#0B3C8C]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>₹5 Lakhs</span>
                  <span>₹1 Crore</span>
                  <span>₹2 Crores</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CHILD EDUCATION GOAL */}
          {activeTab === 'child_edu' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Child Higher Education Fund Calculator
                </h3>
                <p className="text-xs text-slate-500">
                  Calculate required monthly savings to fund engineering, medical, or foreign studies at age 18.
                </p>
              </div>

              {/* Child Age */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Child's Current Age:</span>
                  <span className="font-mono text-blue-700 font-bold">{childCurrentAge} Years Old</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={13}
                  step={1}
                  value={childCurrentAge}
                  onChange={(e) => setChildCurrentAge(Number(e.target.value))}
                  className="w-full accent-[#0B3C8C]"
                />
                <p className="text-[11px] text-slate-500">
                  Years until college (Age 18): <strong className="text-slate-800">{yearsToCollege} Years</strong>
                </p>
              </div>

              {/* Target Fund */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Target Higher Education Corpus:</span>
                  <span className="font-mono text-blue-700 font-bold">{formatRupees(targetCollegeFund)}</span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={10000000}
                  step={250000}
                  value={targetCollegeFund}
                  onChange={(e) => setTargetCollegeFund(Number(e.target.value))}
                  className="w-full accent-[#0B3C8C]"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>₹5 Lakhs</span>
                  <span>₹50 Lakhs</span>
                  <span>₹1 Crore</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: RETIREMENT CORPUS */}
          {activeTab === 'retirement' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Retirement Corpus & Pension Planner
                </h3>
                <p className="text-xs text-slate-500">
                  Determine target corpus for guaranteed monthly pension with LIC New Jeevan Shanti / Saral Pension.
                </p>
              </div>

              {/* Current Age */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Your Current Age:</span>
                  <span className="font-mono text-blue-700 font-bold">{currentAge} Years</span>
                </div>
                <input
                  type="range"
                  min={25}
                  max={55}
                  step={1}
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full accent-[#0B3C8C]"
                />
              </div>

              {/* Retirement Age */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Planned Retirement Age:</span>
                  <span className="font-mono text-blue-700 font-bold">{retirementAge} Years</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={65}
                  step={1}
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full accent-[#0B3C8C]"
                />
              </div>

              {/* Desired Monthly Pension */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Desired Monthly Pension (Post-Retirement):</span>
                  <span className="font-mono text-blue-700 font-bold">{formatRupees(desiredMonthlyPension)}</span>
                </div>
                <input
                  type="range"
                  min={20000}
                  max={250000}
                  step={5000}
                  value={desiredMonthlyPension}
                  onChange={(e) => setDesiredMonthlyPension(Number(e.target.value))}
                  className="w-full accent-[#0B3C8C]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Output Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-br from-slate-900 to-[#0B3C8C] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-white/10 px-2.5 py-1 rounded">
                Calculated Estimate
              </span>

              {/* TAB 1 RESULT */}
              {activeTab === 'life_cover' && (
                <div className="space-y-3">
                  <h4 className="text-sm text-blue-200">Recommended Minimum Life Cover:</h4>
                  <p className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-mono">
                    {formatRupees(calculatedLifeCover)}
                  </p>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    This cover ensures your family can clear all debts of {formatRupees(totalLiabilities)} and replace your income for {yearsToSupport} years even if you are not around.
                  </p>
                </div>
              )}

              {/* TAB 2 RESULT */}
              {activeTab === 'premium' && (
                <div className="space-y-3">
                  <h4 className="text-sm text-blue-200">Indicative Premium Estimate:</h4>
                  <div className="space-y-1">
                    <p className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-mono">
                      ~{formatRupees(estAnnualPremium)}
                      <span className="text-xs font-normal text-blue-200"> / year</span>
                    </p>
                    <p className="text-sm font-semibold text-blue-100">
                      Or approx <strong className="text-white">{formatRupees(estMonthlyPremium)} / month</strong>
                    </p>
                  </div>
                  <p className="text-[11px] text-blue-200">
                    Calculated for Sum Assured of {formatRupees(sumAssured)} for {policyTerm} years term.
                  </p>
                </div>
              )}

              {/* TAB 3 RESULT */}
              {activeTab === 'child_edu' && (
                <div className="space-y-3">
                  <h4 className="text-sm text-blue-200">Required Monthly Savings:</h4>
                  <p className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-mono">
                    ~{formatRupees(requiredMonthlySavings)}
                    <span className="text-xs font-normal text-blue-200"> / month</span>
                  </p>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    Accumulates your target of {formatRupees(targetCollegeFund)} over the next {yearsToCollege} years. Combine with LIC Amritbaal for guaranteed additions and waiver of premium.
                  </p>
                </div>
              )}

              {/* TAB 4 RESULT */}
              {activeTab === 'retirement' && (
                <div className="space-y-3">
                  <h4 className="text-sm text-blue-200">Target Retirement Corpus Required:</h4>
                  <p className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-mono">
                    {formatRupees(requiredRetirementCorpus)}
                  </p>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    Invest approx {formatRupees(monthlyRetirementInvestment)}/month over the next {yearsToRetire} years until retirement to generate {formatRupees(desiredMonthlyPension)}/month guaranteed lifetime pension.
                  </p>
                </div>
              )}

              {/* Interactive Actions */}
              <div className="pt-4 border-t border-white/20 space-y-3">
                {saveSuccessMsg && (
                  <div className="p-2.5 bg-emerald-500/20 border border-emerald-400 text-emerald-200 text-xs rounded-lg flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>{saveSuccessMsg}</span>
                  </div>
                )}

                <button
                  onClick={handleSaveCurrentQuote}
                  disabled={savingLoading}
                  className="w-full bg-white hover:bg-slate-100 text-blue-950 font-bold py-2.5 px-4 rounded-xl text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Bookmark className="w-4 h-4 text-amber-600" />
                  <span>
                    {user ? 'Save Calculation to My Account' : 'Sign In with Google to Save'}
                  </span>
                </button>

                <a
                  href={getWhatsAppShareUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-md transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Calculation to Advisor on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* User's Saved Quotes Box */}
          {user && (
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
              <h4 className="font-bold text-sm text-slate-900 flex items-center justify-between">
                <span>My Saved Calculations ({savedQuotes.length})</span>
                <span className="text-[11px] text-slate-500 font-normal">{user.email}</span>
              </h4>

              {savedQuotes.length === 0 ? (
                <p className="text-xs text-slate-500 italic py-2">
                  No saved quotes yet. Click "Save Calculation" above to keep your scenarios.
                </p>
              ) : (
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {savedQuotes.map((q) => (
                    <div
                      key={q.id}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-center justify-between gap-2"
                    >
                      <div className="space-y-0.5">
                        <strong className="text-slate-800 block">{q.calculatorType}</strong>
                        <p className="text-slate-600 text-[11px]">{q.summary}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteQuote(q.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 transition"
                        title="Delete saved calculation"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
