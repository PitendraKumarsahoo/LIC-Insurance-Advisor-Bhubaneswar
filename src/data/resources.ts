import { ResourceArticle, DownloadableDoc } from '../types';

export const ARTICLES_DATA: ResourceArticle[] = [
  {
    slug: 'term-vs-endowment',
    title: 'Term Insurance vs. Endowment Plans: Which is Right for Your Family?',
    category: 'Financial Planning',
    readTime: '6 min read',
    publishedDate: 'Updated Oct 2026',
    summary:
      'Understand the fundamental differences between pure protection term assurance (like New Jeevan Amar) and wealth-accumulating endowment policies (like Jeevan Labh and New Jeevan Anand).',
    content: [
      'One of the most frequent dilemmas families in Bhubaneswar face when evaluating life insurance is whether to buy a Term Plan or an Endowment Plan.',
      'A Term Plan provides pure financial risk cover. If the policyholder passes away during the term, the family receives the full Sum Assured (e.g., ₹1 Crore or ₹2 Crores). However, if you survive the policy term, there is no maturity payout. Because there is no savings component, term insurance offers the highest protection cover at the lowest annual premium.',
      'An Endowment Plan (or Savings Plan) combines life insurance coverage with long-term guaranteed savings and bonus accrual. A portion of your premium covers mortality risk, while the remainder is invested conservatively by LIC. At the end of the term, you receive the full Sum Assured plus accumulated simple reversionary and final additional bonuses.',
      'The Smart Approach: Financial planning experts recommend a barbell strategy. Secure 10x to 15x of your annual income with an affordable Term Plan to protect your liabilities and dependents, and simultaneously invest in high-bonus Endowment or Guaranteed Income plans (like Jeevan Utsav or Jeevan Labh) for non-negotiable milestones like your child’s college or your retirement.'
    ],
    keyTakeaways: [
      'Term insurance provides high financial cover for debt and income replacement at low premium.',
      'Endowment plans provide capital preservation backed by Sovereign Guarantee and disciplined bonus accumulation.',
      'A balanced portfolio integrates both to protect today and fund tomorrow.'
    ]
  },
  {
    slug: 'how-to-choose-sum-assured',
    title: 'How to Calculate the Right Life Cover (Sum Assured) You Need',
    category: 'Insurance Basics',
    readTime: '5 min read',
    publishedDate: 'Updated Oct 2026',
    summary:
      'Learn the Human Life Value (HLV) formula and the DIME method to calculate your family’s exact financial cover requirement.',
    content: [
      'Many individuals make the mistake of buying insurance with an arbitrary sum assured like ₹5 Lakhs or ₹10 Lakhs. In today’s inflationary environment, ₹10 Lakhs is hardly enough to sustain a family for more than two or three years in urban Bhubaneswar.',
      'The Human Life Value (HLV) rule of thumb suggests your life insurance cover should be at least 10 to 15 times your current annual income.',
      'A more scientific method is the DIME framework: Debt (all home loans, personal loans, car loans), Income (annual expenses multiplied by years until children are financially independent), Mortgage (home balance), and Education (future estimated costs of children’s higher education).',
      'Subtract your existing liquid investments (mutual funds, fixed deposits, provident fund) from this total, and the resulting figure is your required net life cover.'
    ],
    keyTakeaways: [
      'Aim for a minimum cover of 10x to 15x your annual take-home income.',
      'Always factor in active home loans, credit liabilities, and education inflation.',
      'Use our interactive Life Cover Needs Calculator to compute your personal estimate.'
    ]
  },
  {
    slug: 'documents-for-claim',
    title: 'Essential Documents Checklist for LIC Death & Maturity Claims',
    category: 'Claim Settlement',
    readTime: '7 min read',
    publishedDate: 'Updated Oct 2026',
    summary:
      'A clear, step-by-step documentation manual for hassle-free claim settlement with LIC Bhubaneswar branch offices.',
    content: [
      'Filing a claim should never be stressful. Knowing exactly which documents are required ensures instant processing and prevents back-and-forth branch queries.',
      'For Maturity Claims: (1) Maturity discharge form (Form 3825); (2) Original policy bond; (3) Cancelled bank cheque with name pre-printed; (4) Copy of PAN and Aadhaar.',
      'For Death Claims (Early Death within 3 years): In addition to the municipal death certificate and original bond, Form B (Medical Attendant Certificate) and Form C (Certificate of Identity) are required as per Section 45 of Insurance Act.',
      'For Non-Early Death Claims: Original death certificate, original policy bond, claim Form A (Claimant statement), and bank details for NEFT.',
      'Our Promise: I personally review every paper at your doorstep in Bhubaneswar and represent your file directly at the branch office.'
    ],
    keyTakeaways: [
      'Keep your original policy bond safely with your family documents.',
      'Always ensure the bank account has the nominee’s exact name spelling as per PAN.',
      'Contact your servicing advisor immediately to expedite official intimation.'
    ]
  },
  {
    slug: 'how-to-pay-premium-online',
    title: 'How to Pay LIC Premiums Online Safely (UPI, Net Banking, LIC Portal)',
    category: 'Policy Servicing',
    readTime: '4 min read',
    publishedDate: 'Updated Oct 2026',
    summary:
      'Quick guide to paying your renewal premiums without visiting branch counters, plus setting up auto-debit NACH mandates.',
    content: [
      'You can pay your LIC premium in less than 2 minutes without visiting any branch counter or paying extra transaction convenience fees.',
      'Method 1: Direct Pay via licindia.in. Click on "Pay Premium Online" -> "Direct Pay" (no login needed). Enter policy number, installment premium amount, date of birth, and email. Pay using UPI, Debit Card, or Net Banking.',
      'Method 2: Google Pay / PhonePe / Paytm. Search for "LIC" under Bill Payments, enter policy number and email address, view outstanding dues, and authorize payment.',
      'Method 3: Auto-debit NACH / e-Mandate. Avoid late fees completely by submitting an e-mandate linked to your bank account for automatic deduction on due dates.',
      'Always download and save the official digitally signed LIC receipt for your income tax filings.'
    ],
    keyTakeaways: [
      'No registration is required to use LIC Direct Pay.',
      'Official receipts are generated instantly and emailed to your inbox.',
      'Your advisor remains fully connected to your policy for servicing.'
    ]
  },
  {
    slug: 'tax-benefits-of-life-insurance',
    title: 'Decoding Section 80C & Section 10(10D) Tax Benefits in Life Insurance',
    category: 'Tax Planning',
    readTime: '6 min read',
    publishedDate: 'Updated Oct 2026',
    summary:
      'Understanding income tax deductions on premiums and the tax-exempt status of maturity and death proceeds.',
    content: [
      'Life insurance remains one of the most reliable tax-saving instruments in India under the Old Tax Regime.',
      'Section 80C: Premiums paid for self, spouse, and children are deductible up to ₹1,50,000 annually. To qualify, annual premium should not exceed 10% of the sum assured (for policies issued after 1st April 2012).',
      'Section 10(10D): All death claim amounts are 100% tax-free in the hands of the nominee, with no upper limit!',
      'Maturity proceeds for traditional policies with annual aggregate premium up to ₹5,00,000 remain completely exempt from income tax.',
      'Always consult your chartered accountant or tax advisor for year-specific tax filing guidelines.'
    ],
    keyTakeaways: [
      'Death benefits are always 100% tax-exempt under Section 10(10D).',
      'Premium deductions under Section 80C can save significant tax annually.',
      'Keep annual renewal premium receipts organized for employer verification.'
    ]
  },
  {
    slug: 'why-buy-early',
    title: 'Why Buying Life Insurance in Your 20s Saves You Lakhs of Rupees',
    category: 'Financial Wisdom',
    readTime: '5 min read',
    publishedDate: 'Updated Oct 2026',
    summary:
      'The mathematical advantage of starting your term and endowment policies early in life.',
    content: [
      'When you are young and healthy in your 20s, insurance is the last thing on your mind. However, this is precisely when insurance is the most advantageous.',
      'Reason 1: Premium Lock-in. Premium is calculated based on entry age. A 24-year-old locking in a ₹1 Crore term cover pays less than half the annual premium of a 40-year-old for the exact same coverage.',
      'Reason 2: Medical Underwriting. Young individuals typically undergo frictionless underwriting without medical history exclusions or loading charges.',
      'Reason 3: Compounding & Bonus Accumulation. In participating plans like Jeevan Labh or New Jeevan Anand, longer horizons allow reversionary bonuses and final additional bonuses to multiply your maturity corpus.',
      'Start early, lock in rock-bottom rates, and enjoy lifetime peace of mind.'
    ],
    keyTakeaways: [
      'Premiums stay fixed at the entry age for the entire policy tenure.',
      'Avoiding lifestyle diseases ensures standard premium acceptance without loading.',
      'Decades of compounding maximize terminal wealth.'
    ]
  }
];

export const DOWNLOADABLE_DOCS: DownloadableDoc[] = [
  {
    id: 'kyc-checklist',
    title: 'LIC New Proposal & KYC Verification Checklist',
    category: 'New Policy Guidance',
    fileSize: 'Interactive Checklist',
    description: 'Essential identification, age, and income documents required to issue a new LIC policy smoothly.',
    itemsList: [
      'Proof of Identity: Aadhaar Card, Passport, Voter ID, or Driving License',
      'Proof of Address: Aadhaar, Electricity Bill (< 2 months old), or Passport',
      'Proof of Age: Municipal Birth Certificate, School Leaving Certificate, or PAN Card',
      'Proof of Income (mandatory for SA > ₹10 Lakhs): Last 3 years ITR with computation, Form 16, or last 6 months bank statement with salary credits',
      'Photographs: 2 recent passport-size colour photographs',
      'Bank Account Proof: Cancelled cheque with account holder name pre-printed (for NEFT registration)'
    ],
    tips: 'Ensure your name and date of birth match identically across your Aadhaar, PAN card, and Bank account to avoid proposal verification delays.'
  },
  {
    id: 'death-claim-checklist',
    title: 'LIC Death Claim Settlement Dossier Checklist',
    category: 'Claims Assistance',
    fileSize: 'Step-by-Step Dossier',
    description: 'Complete list of original certificates and claim forms needed for swift settlement of death claims.',
    itemsList: [
      'Original Policy Bond (issued by LIC)',
      'Original Death Certificate issued by Municipal Corporation (BMC/CMC) or Registrar of Births & Deaths',
      'Claim Form A: Statement of Claims by the Nominee / Claimant',
      'Claimant KYC: Copy of Aadhaar, PAN Card, and Address proof of nominee',
      'NEFT Mandate: Cancelled cheque or bank passbook copy of nominee',
      'Medical Attendant Certificate (Form B): Required if death occurred under hospital care',
      'Police FIR & Post-Mortem Report: Mandatory in case of accidental death for Accidental Rider settlement'
    ],
    tips: 'Do not worry about completing forms alone. Call me immediately at +91 89086 77424 and I will personally collect and prepare your claim dossier in Bhubaneswar.'
  },
  {
    id: 'maturity-checklist',
    title: 'Maturity & Survival Benefit Discharge Checklist',
    category: 'Maturity Settlement',
    fileSize: 'Discharge Guide',
    description: 'Documents required to claim your maturity payout or survival money-back installments directly into your bank.',
    itemsList: [
      'Original LIC Policy Bond',
      'Form 3825 (Discharge Voucher) duly signed across a ₹1 revenue stamp',
      'Cancelled Cheque of Policyholder (NEFT mandate)',
      'Copy of PAN Card and Aadhaar Card'
    ],
    tips: 'Submit your maturity voucher 30 to 45 days prior to maturity date so funds arrive in your account on the exact anniversary morning.'
  },
  {
    id: 'revival-checklist',
    title: 'Lapsed Policy Revival & Health Declaration Guide',
    category: 'Policy Servicing',
    fileSize: 'Revival Guide',
    description: 'Guidelines to restart your lapsed policy, waive late fee penalties, and restore full risk cover.',
    itemsList: [
      'Policy Number and First Unpaid Premium (FUP) date',
      'Form 680 (Personal Statement of Health / Declaration of Good Health)',
      'Arrears calculation statement (can be requested from me)',
      'Special medical report (only if policy has been lapsed for over 1 year with high sum assured)'
    ],
    tips: 'Watch out for LIC Special Revival Campaigns where late fee interest concessions of up to 30% are officially granted.'
  }
];
