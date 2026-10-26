import { PlanItem } from '../types';

export const PLANS_DATA: PlanItem[] = [
  // ==================== TERM / PROTECTION ====================
  {
    id: 'new-jeevan-amar',
    tableNumber: 'Plan 755',
    name: 'LIC New Jeevan Amar',
    category: 'term',
    categoryLabel: 'Term / Pure Protection',
    tagline: 'Pure risk term insurance for comprehensive family financial security at affordable premium',
    overview:
      'LIC New Jeevan Amar is a pure risk offline term assurance plan providing high financial cover to the family in case of an untimely event. It offers flexible premium payment options, smoker/non-smoker differentiated rates, and special rates for women.',
    whoItIsFor: 'Salaried professionals, business owners, and breadwinners looking for maximum financial protection with minimum premium expenditure.',
    keyFeatures: [
      'Pure protection term plan with no maturity cash value, keeping premiums highly cost-effective',
      'Two death benefit options: Level Sum Assured or Increasing Sum Assured (increases by 10% after 5th year)',
      'Special discounted premium rates for healthy non-smokers and female lives',
      'Flexibility to choose regular premium, limited premium (5 or 10 years), or single premium',
      'Option to receive death benefit in instalments over 5, 10, or 15 years'
    ],
    eligibility: {
      minAge: '18 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '65 Years [VERIFY ON LICINDIA.IN]',
      minTerm: '10 Years [VERIFY ON LICINDIA.IN]',
      maxTerm: '40 Years (Max maturity age 80 years) [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹25,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No upper limit (subject to underwriting & income) [VERIFY ON LICINDIA.IN]',
      premiumPayingTerm: 'Regular, Limited (Policy Term - 5 or 10 years), or Single'
    },
    benefits: [
      'Death Benefit: Sum Assured on Death payable to the nominee upon unfortunate demise of the life assured during policy term',
      'Option of Increasing Sum Assured up to 200% of basic sum assured',
      'Survival / Maturity Benefit: Nil (pure risk plan; all premiums fund mortality risk)'
    ],
    riders: ['Accident Benefit Rider [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Tax exemption on premiums paid under Section 80C and death benefit is fully tax-exempt under Section 10(10D) as per current Indian Income Tax rules.',
    faqs: [
      {
        question: 'Does New Jeevan Amar return money if the policyholder survives?',
        answer: 'No, New Jeevan Amar is a pure protection term assurance plan. It does not pay maturity value if the insured survives the term, which is why it provides the highest coverage per rupee of premium.'
      },
      {
        question: 'Can I choose how my nominee receives the claim amount?',
        answer: 'Yes, you can choose whether the death benefit is disbursed as a lump sum or in monthly, quarterly, half-yearly, or yearly instalments over 5, 10, or 15 years.'
      }
    ],
    featured: true,
    popularTag: 'Most Popular Term Cover'
  },
  {
    id: 'tech-term',
    tableNumber: 'Plan 854',
    name: 'LIC Tech Term',
    category: 'term',
    categoryLabel: 'Term / Online Protection',
    tagline: 'Exclusive online pure risk protection policy with attractive non-smoker discounts',
    overview:
      'LIC Tech Term is an online-only non-linked pure protection plan offering high sum assured coverage directly to tech-savvy individuals. It features preferential premium slabs for healthy lifestyles.',
    whoItIsFor: 'Digital-first professionals and young earners seeking convenient paperless issuance and competitive term premiums.',
    keyFeatures: [
      'Pure online proposal process with direct policy processing',
      'Lower premium rates compared to offline traditional channels',
      'Smoker and non-smoker differential pricing with medical checkup incentives',
      'Choice of Level Sum Assured or Increasing Sum Assured'
    ],
    eligibility: {
      minAge: '18 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '65 Years [VERIFY ON LICINDIA.IN]',
      minTerm: '10 Years [VERIFY ON LICINDIA.IN]',
      maxTerm: '40 Years [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹50,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No limit (subject to financial underwriting) [VERIFY ON LICINDIA.IN]'
    },
    benefits: [
      'Death Benefit payable in lump sum or structured staggered payouts',
      'Substantial peace of mind for home loan liabilities and income replacement'
    ],
    riders: ['Accident Benefit Rider [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Tax deductions under Section 80C and Section 10(10D) as per applicable tax slabs.',
    faqs: [
      {
        question: 'Can I purchase Tech Term through an advisor?',
        answer: 'As an authorized advisor in Bhubaneswar, I can assist you with pre-underwriting guidance, medical requirement verification, and policy documentation.'
      }
    ],
    featured: false
  },
  {
    id: 'digi-term',
    tableNumber: 'Plan 878',
    name: 'LIC Digi Term',
    category: 'term',
    categoryLabel: 'Term / Digital Assurance',
    tagline: 'Next-generation pure term cover designed for seamless digital onboarding and high sum assured',
    overview:
      'LIC Digi Term represents LIC’s modern digital assurance framework offering enhanced underwriting limits, transparent claims assistance, and flexible tenure options.',
    whoItIsFor: 'Young tech and corporate employees across Bhubaneswar and Odisha requiring high cover.',
    keyFeatures: [
      'Streamlined digital KYC and verification',
      'Preferential terms for non-tobacco users',
      'Comprehensive claim assistance guarantee'
    ],
    eligibility: {
      minAge: '18 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '65 Years [VERIFY ON LICINDIA.IN]',
      minTerm: '10 Years [VERIFY ON LICINDIA.IN]',
      maxTerm: '40 Years [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹50,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'Subject to underwriting [VERIFY ON LICINDIA.IN]'
    },
    benefits: ['Full Sum Assured payable to nominee upon death during term'],
    riders: ['Accidental Rider [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Sec 80C & 10(10D) tax benefits subject to prevailing provisions.',
    faqs: [
      {
        question: 'What documents are required for Digi Term?',
        answer: 'Identity proof (Aadhaar/Passport), PAN card, income proof (Form 16 or 3 years ITR), and recent salary slips.'
      }
    ]
  },
  {
    id: 'yuva-term',
    tableNumber: 'Plan 875',
    name: 'LIC Yuva Term',
    category: 'term',
    categoryLabel: 'Term / Youth Protection',
    tagline: 'Specially crafted term plan for young individuals starting their careers and financial journeys',
    overview:
      'LIC Yuva Term is structured specifically for young professionals entering the workforce, offering accessible sum assured entry points and locked-in low premiums for early starters.',
    whoItIsFor: 'Young earners aged 18 to 35 seeking to lock in low premiums early in life.',
    keyFeatures: [
      'Accessible starting sum assured tailored for first-time insurance buyers',
      'Extremely economical rates when locked in during early twenties',
      'Simple documentation process'
    ],
    eligibility: {
      minAge: '18 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '45 Years [VERIFY ON LICINDIA.IN]',
      minTerm: '10 Years [VERIFY ON LICINDIA.IN]',
      maxTerm: '40 Years [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹25,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'Subject to income verification [VERIFY ON LICINDIA.IN]'
    },
    benefits: ['Life cover protection throughout the chosen policy tenure'],
    riders: ['Accidental Death Rider [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Eligible for Section 80C deduction.',
    faqs: [
      {
        question: 'Why buy Yuva Term in your 20s?',
        answer: 'Premiums increase as you age. Locking in your term policy at age 22 to 28 provides rock-bottom premiums that remain fixed for your entire 30 or 40-year term.'
      }
    ]
  },
  {
    id: 'bima-kavach',
    tableNumber: 'Protection',
    name: 'LIC Bima Kavach',
    category: 'term',
    categoryLabel: 'Term / Risk Cover',
    tagline: 'Reliable risk protection cushion for business liabilities and personal family safeguards',
    overview: 'A robust pure risk framework ensuring dependents are completely safeguarded against unexpected liabilities.',
    whoItIsFor: 'Borrowers with home loans or car loans wanting matching debt protection.',
    keyFeatures: ['Direct debt-shield protection', 'Flexible terms matching loan tenures'],
    eligibility: {
      minAge: '18 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '60 Years [VERIFY ON LICINDIA.IN]',
      minTerm: '5 Years [VERIFY ON LICINDIA.IN]',
      maxTerm: '35 Years [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹10,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No upper limit [VERIFY ON LICINDIA.IN]'
    },
    benefits: ['Financial shield covering outstanding family commitments'],
    riders: ['Accidental Rider [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Tax exempt under Section 80C & 10(10D).',
    faqs: [{ question: 'Can this cover my Bhubaneswar home loan?', answer: 'Yes, it can be assigned to your mortgage lending bank.' }]
  },

  // ==================== ENDOWMENT / SAVINGS ====================
  {
    id: 'new-jeevan-anand',
    tableNumber: 'Plan 715',
    name: 'LIC New Jeevan Anand',
    category: 'endowment',
    categoryLabel: 'Endowment / Lifetime Protection',
    tagline: 'The iconic "Zindagi Ke Saath Bhi, Zindagi Ke Baad Bhi" double-benefit plan with lifelong cover',
    overview:
      'LIC New Jeevan Anand is one of India’s most cherished life insurance policies. It combines the twin benefits of savings with lifelong financial protection. Even after the maturity sum assured and bonuses are paid out, the life cover continues till age 100 or death without any further premiums.',
    whoItIsFor: 'Individuals who want disciplined long-term savings, maturity corpus, plus guaranteed life cover for their entire lifetime.',
    keyFeatures: [
      'Twin benefits: Lump sum maturity payout during lifetime PLUS lifelong death cover',
      'Participates in LIC simple reversionary bonuses and final additional bonuses',
      'Life cover continues even after maturity without paying any extra premium till death or age 100',
      'Loan facility available after completion of 2 full policy years',
      'High Sum Assured rebate on premiums'
    ],
    eligibility: {
      minAge: '18 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '50 Years [VERIFY ON LICINDIA.IN]',
      minTerm: '15 Years [VERIFY ON LICINDIA.IN]',
      maxTerm: '35 Years [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹1,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No upper limit [VERIFY ON LICINDIA.IN]',
      premiumPayingTerm: 'Same as Policy Term'
    },
    benefits: [
      'Maturity Benefit: Basic Sum Assured + Accrued Simple Reversionary Bonuses + Final Additional Bonus (if any)',
      'Death Benefit during term: 125% of Basic Sum Assured or 7 times annualised premium + accrued bonuses',
      'Lifelong Cover post-maturity: Additional 100% Basic Sum Assured paid to nominee whenever death occurs post-maturity'
    ],
    riders: [
      'Accidental Death and Disability Benefit Rider [VERIFY ON LICINDIA.IN]',
      'New Term Assurance Rider [VERIFY ON LICINDIA.IN]',
      'Critical Illness Rider [VERIFY ON LICINDIA.IN]'
    ],
    taxNote: 'Eligible for deduction under Section 80C. Maturity and death benefits exempt under Section 10(10D) as per prevailing income tax guidelines.',
    faqs: [
      {
        question: 'What happens to my life cover once I receive the maturity amount?',
        answer: 'Your policy remains active! You receive the full maturity amount (Sum Assured + Bonuses) at the end of the policy term, and the Basic Sum Assured remains as a lifelong risk cover payable to your nominee whenever death occurs.'
      },
      {
        question: 'Can I take a loan on New Jeevan Anand?',
        answer: 'Yes, policy loan is available after 2 years of continuous premium payment, which can be useful for family emergencies.'
      }
    ],
    featured: true,
    popularTag: 'Most Iconic Policy'
  },
  {
    id: 'jeevan-labh',
    tableNumber: 'Plan 836',
    name: 'LIC Jeevan Labh',
    category: 'endowment',
    categoryLabel: 'Endowment / Limited Premium',
    tagline: 'High bonus earning potential with limited premium paying term for maximum wealth creation',
    overview:
      'LIC Jeevan Labh is a non-linked, participating, limited premium paying endowment plan. You pay premiums for a shorter period (10, 15, or 16 years) and enjoy risk cover and bonus accrual for a longer period (16, 21, or 25 years). It is widely popular for its healthy bonus track record.',
    whoItIsFor: 'Parents planning for child higher education or individuals seeking maximum returns through limited premium commitments.',
    keyFeatures: [
      'Limited Premium Payment: Pay for 10 years (get 16 years term), pay for 15 years (get 21 years term), or pay for 16 years (get 25 years term)',
      'High bonus participation making it an exceptional long-term wealth builder',
      'Substantial risk cover during the full policy tenure',
      'Loan and surrender facilities after 2 years'
    ],
    eligibility: {
      minAge: '8 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '59 Years (for 16-yr term) / 54 Years (for 21-yr term) / 50 Years (for 25-yr term) [VERIFY ON LICINDIA.IN]',
      minTerm: '16, 21, or 25 Years [VERIFY ON LICINDIA.IN]',
      maxTerm: '25 Years [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹2,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No upper limit [VERIFY ON LICINDIA.IN]',
      premiumPayingTerm: '10, 15, or 16 Years'
    },
    benefits: [
      'Maturity Benefit: Basic Sum Assured + Vested Simple Reversionary Bonuses + Final Additional Bonus',
      'Death Benefit: Sum Assured on Death (higher of 7x annualised premium or Basic Sum Assured) + accrued bonuses'
    ],
    riders: [
      'Accidental Death & Disability Rider [VERIFY ON LICINDIA.IN]',
      'New Term Assurance Rider [VERIFY ON LICINDIA.IN]',
      'Premium Waiver Rider for minors [VERIFY ON LICINDIA.IN]'
    ],
    taxNote: 'Section 80C premium deduction and tax-free maturity under Section 10(10D).',
    faqs: [
      {
        question: 'Why is Jeevan Labh so popular among families in Bhubaneswar?',
        answer: 'Because of its limited premium paying term. For example, you only pay for 16 years, but your money grows with LIC bonuses for 25 years, generating a substantial corpus for child marriages or retirement.'
      }
    ],
    featured: true,
    popularTag: 'Highest Bonus Track Record'
  },
  {
    id: 'jeevan-utsav',
    tableNumber: 'Plan 871',
    name: 'LIC Jeevan Utsav',
    category: 'endowment',
    categoryLabel: 'Guaranteed Income / Whole Life',
    tagline: 'Guaranteed 10% annual income for life after premium term plus lifelong life cover',
    overview:
      'LIC Jeevan Utsav is a non-linked, non-participating, individual, savings, whole-life plan. It provides guaranteed regular income benefits equal to 10% of Basic Sum Assured every year throughout life after the deferment period, or flexi income that accumulates with guaranteed interest.',
    whoItIsFor: 'Anyone wanting guaranteed annual cash payouts for life alongside whole-life insurance cover.',
    keyFeatures: [
      'Guaranteed Addition of ₹40 per thousand Basic Sum Assured during premium paying term',
      'Regular Income Benefit: 10% of Basic Sum Assured paid every year for life starting after premium paying term',
      'Flexi Income Option: Accumulate income payouts with LIC at attractive interest rate (5.5% p.a.) and withdraw anytime',
      'Short premium paying terms of 5 to 16 years with whole-life coverage'
    ],
    eligibility: {
      minAge: '90 Days [VERIFY ON LICINDIA.IN]',
      maxAge: '65 Years [VERIFY ON LICINDIA.IN]',
      minTerm: 'Whole Life (till age 100) [VERIFY ON LICINDIA.IN]',
      maxTerm: 'Whole Life [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹5,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No upper limit [VERIFY ON LICINDIA.IN]',
      premiumPayingTerm: '5 to 16 Years'
    },
    benefits: [
      'Guaranteed Annual Payouts of 10% Basic Sum Assured every single year for life',
      'Guaranteed Additions of ₹40 per thousand Sum Assured added annually during premium paying term',
      'Death Benefit: Sum Assured on Death + accrued Guaranteed Additions'
    ],
    riders: ['Accidental Rider', 'Critical Illness Rider', 'Premium Waiver Rider [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Tax benefits under Section 80C and Section 10(10D) as applicable.',
    faqs: [
      {
        question: 'Are the 10% annual payouts in Jeevan Utsav really guaranteed?',
        answer: 'Yes, Jeevan Utsav is a non-participating plan with contractual guarantees explicitly mentioned in the policy bond.'
      }
    ],
    featured: true,
    popularTag: '10% Guaranteed Income For Life'
  },
  {
    id: 'new-endowment-plan',
    tableNumber: 'Plan 714',
    name: 'LIC New Endowment Plan',
    category: 'endowment',
    categoryLabel: 'Endowment / Standard Savings',
    tagline: 'Classic savings-plus-protection plan for goal-oriented capital preservation',
    overview:
      'LIC New Endowment Plan is a participating non-linked plan that provides an ideal combination of protection and financial savings for planned future milestones.',
    whoItIsFor: 'Conservative investors seeking complete capital safety backed by Sovereign Guarantee under Section 37 of LIC Act.',
    keyFeatures: [
      'Sovereign Guarantee on Sum Assured and accrued bonuses',
      'Flexible term choice from 12 to 35 years',
      'Reliable liquidity through policy loans'
    ],
    eligibility: {
      minAge: '8 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '55 Years [VERIFY ON LICINDIA.IN]',
      minTerm: '12 Years [VERIFY ON LICINDIA.IN]',
      maxTerm: '35 Years [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹1,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No limit [VERIFY ON LICINDIA.IN]'
    },
    benefits: ['Sum Assured + Simple Reversionary Bonuses + Final Additional Bonus at maturity'],
    riders: ['Accident Benefit Rider', 'Critical Illness Rider [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Tax deduction under Section 80C & tax-free maturity under 10(10D).',
    faqs: [{ question: 'What is Sovereign Guarantee in LIC plans?', answer: 'Under Section 37 of the LIC Act 1956, the Sum Assured and declared bonuses are guaranteed by the Government of India.' }]
  },
  {
    id: 'dhan-sanchay',
    tableNumber: 'Plan 865',
    name: 'LIC Dhan Sanchay',
    category: 'endowment',
    categoryLabel: 'Savings / Guaranteed Payout',
    tagline: 'Guaranteed income stream during payout period for predictable cash flows',
    overview: 'A non-linked, non-participating plan providing guaranteed income benefits over the payout tenure with protection.',
    whoItIsFor: 'Individuals needing steady predictable cash flow for household commitments.',
    keyFeatures: ['Four benefit options including level income and increasing income', 'Guaranteed maturity benefits'],
    eligibility: {
      minAge: '3 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '65 Years [VERIFY ON LICINDIA.IN]',
      minTerm: '5 to 15 Years [VERIFY ON LICINDIA.IN]',
      maxTerm: '15 Years [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹3,30,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No limit [VERIFY ON LICINDIA.IN]'
    },
    benefits: ['Guaranteed Income Benefit paid annually, semi-annually, quarterly, or monthly'],
    riders: ['Accidental Rider [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Tax benefits under 80C/10(10D) as per income tax regulations.',
    faqs: [{ question: 'Can I choose increasing income?', answer: 'Yes, Option B offers an annual income that increases by 5% simple rate every year.' }]
  },
  {
    id: 'bima-jyoti',
    tableNumber: 'Plan 860',
    name: 'LIC Bima Jyoti',
    category: 'endowment',
    categoryLabel: 'Savings / Guaranteed Additions',
    tagline: 'Guaranteed additions of ₹50 per thousand sum assured every year throughout policy term',
    overview: 'A non-linked savings plan with fixed guaranteed additions of ₹50 per thousand sum assured added every year.',
    whoItIsFor: 'Investors who prefer guaranteed growth over market-dependent bonus fluctuations.',
    keyFeatures: ['Guaranteed Addition of ₹50 per thousand SA accrued at end of each policy year', 'Limited premium paying term'],
    eligibility: {
      minAge: '90 Days [VERIFY ON LICINDIA.IN]',
      maxAge: '60 Years [VERIFY ON LICINDIA.IN]',
      minTerm: '15 to 20 Years [VERIFY ON LICINDIA.IN]',
      maxTerm: '20 Years [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹1,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No limit [VERIFY ON LICINDIA.IN]'
    },
    benefits: ['Sum Assured on Maturity + Accrued Guaranteed Additions (₹50/thousand SA per year)'],
    riders: ['Accidental Death Rider', 'Term Rider [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Eligible for 80C & 10(10D).',
    faqs: [{ question: 'Are bonuses variable in Bima Jyoti?', answer: 'No, returns in Bima Jyoti are contractually guaranteed additions of ₹50 per ₹1,000 sum assured.' }]
  },

  // ==================== CHILD PLANS ====================
  {
    id: 'amritbaal',
    tableNumber: 'Plan 874',
    name: 'LIC Amritbaal',
    category: 'child',
    categoryLabel: 'Child / Higher Education',
    tagline: 'High guaranteed additions of ₹80 per thousand sum assured to fund child higher education corpus',
    overview:
      'LIC Amritbaal is an individual, savings, life insurance plan specifically designed to build an education fund for children. It offers one of the highest guaranteed additions in the industry (₹80 per ₹1,000 Basic Sum Assured each year).',
    whoItIsFor: 'Parents and grandparents planning for a child’s engineering, medical, MBA, or study-abroad expenses.',
    keyFeatures: [
      'Industry-leading Guaranteed Addition of ₹80 per thousand Basic Sum Assured per year',
      'Short premium paying terms of 5, 6, or 7 years with policy term up to age 25',
      'Premium Waiver Benefit Rider protects child’s education even if parent is not around',
      'Loan facility available for academic emergency expenses'
    ],
    eligibility: {
      minAge: '30 Days (Child) [VERIFY ON LICINDIA.IN]',
      maxAge: '13 Years (Child) [VERIFY ON LICINDIA.IN]',
      minTerm: '10 Years [VERIFY ON LICINDIA.IN]',
      maxTerm: '25 Years (Maturity age 18 to 25 years) [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹2,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No upper limit [VERIFY ON LICINDIA.IN]',
      premiumPayingTerm: '5, 6, or 7 Years (Limited) or Single Premium'
    },
    benefits: [
      'Maturity Benefit: Sum Assured on Maturity + Accrued Guaranteed Additions (₹80 per ₹1,000 SA per year)',
      'Death Benefit: Sum Assured on Death + Accrued Guaranteed Additions'
    ],
    riders: ['Premium Waiver Benefit Rider for Proposer [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Section 80C tax deduction and tax-free maturity under Section 10(10D).',
    faqs: [
      {
        question: 'What is the Premium Waiver Benefit (PWB) in Amritbaal?',
        answer: 'If the parent (proposer) passes away during the policy term, all future premiums are waived by LIC, and the policy continues with full benefits paid to the child at maturity.'
      }
    ],
    featured: true,
    popularTag: 'Highest Guaranteed Child Fund'
  },
  {
    id: 'jeevan-tarun',
    tableNumber: 'Plan 834',
    name: 'LIC Jeevan Tarun',
    category: 'child',
    categoryLabel: 'Child / Staggered Education Fund',
    tagline: 'Customisable survival benefit payouts from age 20 to 24 matching college tuition semesters',
    overview:
      'LIC Jeevan Tarun is a participating non-linked limited premium child plan designed to meet the educational and other financial needs of growing children through annual survival benefits from age 20 to 24, and maturity at age 25.',
    whoItIsFor: 'Parents wanting annual cash inflows during their child’s 4 to 5 years of college degree.',
    keyFeatures: [
      '4 flexible payout options (from 0% to 15% annual survival benefit during age 20-24)',
      'Lump sum maturity with bonuses at age 25',
      'Premium payment stops when the child turns 20'
    ],
    eligibility: {
      minAge: '90 Days [VERIFY ON LICINDIA.IN]',
      maxAge: '12 Years [VERIFY ON LICINDIA.IN]',
      minTerm: '25 minus Child’s entry age [VERIFY ON LICINDIA.IN]',
      maxTerm: '25 Years [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹75,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No limit [VERIFY ON LICINDIA.IN]',
      premiumPayingTerm: '20 minus Child’s entry age'
    },
    benefits: ['Annual survival payouts at ages 20, 21, 22, 23, 24 + remaining Sum Assured with bonuses at age 25'],
    riders: ['Premium Waiver Benefit Rider [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Eligible for deductions under Section 80C and exempt under 10(10D).',
    faqs: [
      {
        question: 'When do survival payments start in Jeevan Tarun?',
        answer: 'Payments begin on the policy anniversary coinciding with or following the completion of 20 years of age of the child.'
      }
    ]
  },
  {
    id: 'new-childrens-money-back',
    tableNumber: 'Plan 732',
    name: 'LIC New Children’s Money Back Plan',
    category: 'child',
    categoryLabel: 'Child / Milestone Money Back',
    tagline: 'Milestone cash payouts at ages 18, 20, and 22 plus lump sum maturity at age 25',
    overview: 'A trusted money-back plan ensuring timely capital for school board completions, college entry, and graduation.',
    whoItIsFor: 'Parents looking for periodic liquidity at pivotal educational stages.',
    keyFeatures: ['20% of Sum Assured at age 18, 20% at age 20, 20% at age 22, and 40% + bonuses at age 25'],
    eligibility: {
      minAge: '0 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '12 Years [VERIFY ON LICINDIA.IN]',
      minTerm: '25 minus Entry Age [VERIFY ON LICINDIA.IN]',
      maxTerm: '25 Years [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹1,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No limit [VERIFY ON LICINDIA.IN]'
    },
    benefits: ['Periodic survival benefits totaling 60% of SA + 40% SA and bonuses at maturity'],
    riders: ['Premium Waiver Benefit Rider [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Section 80C & 10(10D) tax benefits apply.',
    faqs: [{ question: 'Can grandparents buy this for their grandchild in Bhubaneswar?', answer: 'Yes, with parents as consentors and proposers.' }]
  },

  // ==================== PENSION / RETIREMENT ====================
  {
    id: 'new-jeevan-shanti',
    tableNumber: 'Plan 858',
    name: 'LIC New Jeevan Shanti',
    category: 'pension',
    categoryLabel: 'Pension / Deferred Annuity',
    tagline: 'Single premium deferred annuity plan with guaranteed lifetime pension rates locked today',
    overview:
      'LIC New Jeevan Shanti is a single-premium deferred annuity plan. You invest a lump sum today, defer your pension for 1 to 12 years while you work, and lock in guaranteed pension rates for your lifetime or joint-life with spouse.',
    whoItIsFor: 'Salaried executives and professionals in their 40s and 50s planning guaranteed post-retirement income.',
    keyFeatures: [
      'Guaranteed annuity rates locked at the time of policy inception',
      'Deferment period from 1 to 12 years with annuity additions during deferment',
      'Two options: Single Life Deferred Annuity or Joint Life Deferred Annuity with spouse/child',
      'Return of Purchase Price to nominee upon death of annuitant',
      'Enhanced annuity rates for higher purchase prices'
    ],
    eligibility: {
      minAge: '30 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '79 Years [VERIFY ON LICINDIA.IN]',
      minTerm: 'Deferment Period: 1 to 12 Years [VERIFY ON LICINDIA.IN]',
      maxTerm: 'Lifetime Annuity [VERIFY ON LICINDIA.IN]',
      minSumAssured: 'Min Purchase Price: ₹1,50,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No upper limit [VERIFY ON LICINDIA.IN]',
      premiumPayingTerm: 'Single Premium (One-time payment)'
    },
    benefits: [
      'Guaranteed Lifetime Pension paid monthly, quarterly, half-yearly, or annually',
      'Return of Purchase Price along with accrued death benefit to nominee'
    ],
    riders: ['No separate riders needed; built-in death benefit protection [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Purchase price eligible for tax benefit under Section 80CCC. Annuity payouts are taxable as income as per annuitant tax slab.',
    faqs: [
      {
        question: 'Can I include my spouse in New Jeevan Shanti?',
        answer: 'Yes, under Option 2 (Joint Life Deferred Annuity), pension continues to your spouse if you predecease them, and the full purchase price is returned to children/nominee thereafter.'
      }
    ],
    featured: true,
    popularTag: 'Most Popular Pension Plan'
  },
  {
    id: 'saral-pension',
    tableNumber: 'Plan 862',
    name: 'LIC Saral Pension',
    category: 'pension',
    categoryLabel: 'Pension / Immediate Annuity',
    tagline: 'Standard immediate annuity plan starting pension right from the very next month',
    overview:
      'LIC Saral Pension is a standardized single premium immediate annuity plan. Invest once and start receiving a regular guaranteed lifetime pension from the immediate next month with 100% return of purchase price to nominee.',
    whoItIsFor: 'Retirees and senior citizens seeking instant, hassle-free monthly income from retirement gratuity or EPF corpus.',
    keyFeatures: [
      'Immediate pension starts from the next month of investment',
      'Standard IRDAI-mandated terms and full transparency',
      '100% Return of Purchase Price on death of annuitant'
    ],
    eligibility: {
      minAge: '40 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '80 Years [VERIFY ON LICINDIA.IN]',
      minTerm: 'Lifetime [VERIFY ON LICINDIA.IN]',
      maxTerm: 'Lifetime [VERIFY ON LICINDIA.IN]',
      minSumAssured: 'Min Purchase Price depends on min annuity ₹1,000/month [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No upper limit [VERIFY ON LICINDIA.IN]',
      premiumPayingTerm: 'Single Premium'
    },
    benefits: ['Guaranteed lifetime pension + 100% return of purchase price to nominee'],
    riders: ['Not applicable [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Purchase amount eligible for tax benefit under Section 80CCC.',
    faqs: [
      {
        question: 'How quickly does the pension start?',
        answer: 'If you choose monthly mode, your first pension deposit arrives exactly one month after policy issuance.'
      }
    ]
  },
  {
    id: 'jeevan-akshay-vii',
    tableNumber: 'Plan 857',
    name: 'LIC Jeevan Akshay VII',
    category: 'pension',
    categoryLabel: 'Pension / Multiple Annuity Options',
    tagline: 'Immediate annuity with 10 versatile payout options to suit every retirement scenario',
    overview: 'A single premium immediate annuity plan offering the widest variety of annuity options in the market.',
    whoItIsFor: 'Individuals retiring with substantial savings wanting customized annuity structures.',
    keyFeatures: ['10 different annuity payout options', 'Single life and joint life structures'],
    eligibility: {
      minAge: '30 Years (except Option F: 35 Years) [VERIFY ON LICINDIA.IN]',
      maxAge: '85 Years (100 years for Option F) [VERIFY ON LICINDIA.IN]',
      minTerm: 'Lifetime [VERIFY ON LICINDIA.IN]',
      maxTerm: 'Lifetime [VERIFY ON LICINDIA.IN]',
      minSumAssured: 'Min Purchase Price: ₹1,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'No limit [VERIFY ON LICINDIA.IN]'
    },
    benefits: ['Lifelong guaranteed annuity with or without return of purchase price'],
    riders: ['None [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Deduction under Section 80CCC. Annuity treated as taxable income.',
    faqs: [{ question: 'Which is the most popular option in Jeevan Akshay VII?', answer: 'Option F (Annuity for life with return of purchase price on death) is chosen by over 80% of annuitants.' }]
  },

  // ==================== ULIP / MARKET-LINKED ====================
  {
    id: 'siip',
    tableNumber: 'Plan 852',
    name: 'LIC SIIP',
    category: 'ulip',
    categoryLabel: 'ULIP / Market Linked',
    tagline: 'Unit Linked Insurance Plan offering market growth with life cover and mortality charge refunds',
    overview:
      'LIC SIIP is an individual, unit-linked, regular premium life insurance plan that provides both investment and insurance. A landmark feature is the guaranteed refund of all mortality charges on maturity.',
    whoItIsFor: 'Investors seeking long-term equity/debt market upside backed by LIC brand security and life insurance cover.',
    keyFeatures: [
      'Refund of full mortality charges on policy maturity (subject to conditions)',
      'Guaranteed Additions added to fund value at specific durations',
      '4 fund choices: Bond Fund, Secured Fund, Balanced Fund, and Growth Fund',
      '4 free fund switches every policy year to adjust asset allocation'
    ],
    eligibility: {
      minAge: '90 Days [VERIFY ON LICINDIA.IN]',
      maxAge: '65 Years [VERIFY ON LICINDIA.IN]',
      minTerm: '10 to 25 Years [VERIFY ON LICINDIA.IN]',
      maxTerm: '25 Years [VERIFY ON LICINDIA.IN]',
      minSumAssured: '10 times annualised premium [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'Subject to underwriting [VERIFY ON LICINDIA.IN]',
      premiumPayingTerm: 'Same as Policy Term'
    },
    benefits: [
      'Maturity Benefit: Unit Fund Value + Refund of Mortality Charges',
      'Death Benefit: Higher of Basic Sum Assured or Unit Fund Value'
    ],
    riders: ['Accidental Rider [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Tax benefits under Section 80C and Section 10(10D) as per annual premium limits. Note: Market-linked investments carry investment risk.',
    faqs: [
      {
        question: 'Are returns guaranteed in LIC SIIP?',
        answer: 'No, unit-linked plans are subject to market risks. Fund value fluctuates based on NAV performance of chosen investment funds.'
      }
    ]
  },
  {
    id: 'nivesh-plus',
    tableNumber: 'Plan 849',
    name: 'LIC Nivesh Plus',
    category: 'ulip',
    categoryLabel: 'ULIP / Single Premium',
    tagline: 'Single premium unit-linked insurance plan with market growth potential and life cover',
    overview: 'A unit-linked single premium plan allowing lump sum investment into market-linked funds with built-in life cover.',
    whoItIsFor: 'Investors with idle capital looking for equity market participation with life cover.',
    keyFeatures: ['One-time investment with multiple fund options', 'Guaranteed additions at defined milestones'],
    eligibility: {
      minAge: '90 Days to 70 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '70 Years [VERIFY ON LICINDIA.IN]',
      minTerm: '10 to 25 Years [VERIFY ON LICINDIA.IN]',
      maxTerm: '25 Years [VERIFY ON LICINDIA.IN]',
      minSumAssured: '1.25x or 10x single premium [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'Subject to underwriting [VERIFY ON LICINDIA.IN]'
    },
    benefits: ['Unit Fund Value on maturity; Sum Assured or Fund Value on death'],
    riders: ['Accident Benefit Rider [VERIFY ON LICINDIA.IN]'],
    taxNote: 'Subject to capital gains and 10(10D) guidelines for single premium ULIPs.',
    faqs: [{ question: 'Can I switch funds online?', answer: 'Yes, fund switching between equity and bond funds is available.' }]
  },

  // ==================== RIDERS ====================
  {
    id: 'accidental-death-disability-rider',
    tableNumber: 'Rider',
    name: 'Accidental Death & Disability Benefit Rider',
    category: 'riders',
    categoryLabel: 'Riders / Additional Protection',
    tagline: 'Crucial add-on providing double sum assured on accidental death and monthly disability support',
    overview:
      'An essential rider that can be attached to almost all basic LIC policies for an economical additional premium. In case of accidental death, an additional Sum Assured is paid. In case of permanent disability, future rider premiums are waived and disability benefit is paid in monthly instalments for 10 years.',
    whoItIsFor: 'Every policyholder, particularly those who commute or travel frequently on highways or by road.',
    keyFeatures: [
      'Double financial payout in the event of an untimely road or work accident',
      'Lifelong permanent disability protection with waiver of basic premiums',
      'Extremely economical cost (often ₹1 to ₹2 per thousand sum assured)'
    ],
    eligibility: {
      minAge: '18 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '65 Years [VERIFY ON LICINDIA.IN]',
      minTerm: 'Same as base policy [VERIFY ON LICINDIA.IN]',
      maxTerm: 'Till age 70 [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹1,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'Up to ₹2 Crores across all policies [VERIFY ON LICINDIA.IN]'
    },
    benefits: [
      'Accidental Death: Additional 100% Rider Sum Assured in cash to nominee',
      'Permanent Disability: 10% of Rider Sum Assured paid annually for 10 years + future base premiums waived'
    ],
    riders: ['Add-on attached to base policy'],
    taxNote: 'Eligible for Section 80C deduction along with base premium.',
    faqs: [
      {
        question: 'Should I add this rider to my policy?',
        answer: 'Highly recommended! At a negligible annual cost, it doubles the financial protection for your family during unexpected vehicular or travel accidents.'
      }
    ],
    featured: false
  },
  {
    id: 'critical-illness-rider',
    tableNumber: 'Rider',
    name: 'LIC Critical Illness Rider',
    category: 'riders',
    categoryLabel: 'Riders / Health Shield',
    tagline: 'Lump sum financial cushion upon diagnosis of 15 specified critical illnesses including cancer',
    overview:
      'Provides a lump sum cash benefit immediately upon diagnosis of any of the 15 covered critical illnesses (such as Cancer, Heart Attack, Stroke, Kidney Failure, etc.) to cover medical treatments and loss of earnings.',
    whoItIsFor: 'Working adults who want financial peace of mind against lifestyle diseases.',
    keyFeatures: [
      'Covers 15 defined major critical illnesses',
      'Direct lump sum payout irrespective of hospital bills or health insurance claims'
    ],
    eligibility: {
      minAge: '18 Years [VERIFY ON LICINDIA.IN]',
      maxAge: '65 Years [VERIFY ON LICINDIA.IN]',
      minTerm: 'Same as base policy [VERIFY ON LICINDIA.IN]',
      maxTerm: 'Up to age 75 [VERIFY ON LICINDIA.IN]',
      minSumAssured: '₹1,00,000 [VERIFY ON LICINDIA.IN]',
      maxSumAssured: 'Up to ₹25,00,000 [VERIFY ON LICINDIA.IN]'
    },
    benefits: ['Immediate lump sum cash payout on first confirmed diagnosis of covered condition'],
    riders: ['Add-on attached to base policy'],
    taxNote: 'Premiums eligible for tax deduction under Section 80D (Health Insurance).',
    faqs: [
      {
        question: 'Is this different from Mediclaim?',
        answer: 'Yes! Mediclaim reimburses hospital bills. This rider pays you the full lump sum cash in your bank account, which you can use for treatment, living expenses, or loan repayments.'
      }
    ]
  }
];
