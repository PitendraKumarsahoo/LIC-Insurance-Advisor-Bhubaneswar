import { AgentProfile } from '../types';

export const AGENT_DATA: AgentProfile = {
  name: 'Pratap Kumar Sahoo',
  tagline: 'Authorised IRDAI Life Insurance Advisor, Bhubaneswar',
  phone: '+91 89086 77424',
  whatsappNumber: '918908677424',
  whatsappMessage: 'Hello, I want to know about LIC plans',
  email: '[EMAIL]',
  address: '[OFFICE ADDRESS], Near Master Canteen / Saheed Nagar',
  city: 'Bhubaneswar',
  state: 'Odisha',
  pincode: '751007',
  licenseNo: '[LICENSE NO.]',
  licenseValidity: '[VALIDITY DATE e.g. 31-03-2027]',
  agentCode: '[AGENT CODE e.g. 05830XXX]',
  branch: '[BRANCH e.g. Bhubaneswar Branch I / II / CBO]',
  division: 'Bhubaneswar Division (Code 830)',
  zone: 'East Central Zone',
  experienceYears: '[X]', // e.g. 12+ Years
  familiesServed: '[X]+', // e.g. 1,200+ Families
  claimRatioHelped: '100% Personal Claim Guidance',
  clubMembership: '[Club membership e.g. MDRT / CLIA / ZMDRT if genuinely held]',
  instagramUrl: 'https://www.instagram.com/lic.bhubaneswar',
};

export const MANDATORY_COMPLIANCE_DISCLAIMER =
  'Insurance is the subject matter of solicitation. Pratap Kumar Sahoo is an IRDAI-licensed Insurance Agent of Life Insurance Corporation of India. License No. [LICENSE NO.]. This is an independent website of an authorised agent and is not the official website of LIC. For official information visit www.licindia.in. Benefits, premiums and eligibility are subject to policy terms and conditions. Calculators give indicative values only. Past performance/bonuses are not guaranteed. Mutual-fund-style or ULIP returns depend on market risk.';

export const VERIFY_LIC_NOTE =
  'Verify latest benefits, bonus rates and terms on licindia.in. Features are strictly subject to policy terms issued by Life Insurance Corporation of India.';

export const CLIENT_HANDOVER_CHECKLIST = [
  {
    field: '[AGENT NAME]',
    currentValue: 'Pratap Kumar Sahoo',
    purpose: 'Display your official full name as registered with IRDAI & LIC',
    location: 'Header logo, hero, about page, and footer compliance text',
  },
  {
    field: '[LICENSE NO.]',
    currentValue: '[LICENSE NO.]',
    purpose: 'Your 10 or 12 digit IRDAI Agent License Number',
    location: 'Header subtext, footer compliance badge, about page credentials',
  },
  {
    field: '[DATE]',
    currentValue: '[VALIDITY DATE e.g. 31-03-2027]',
    purpose: 'Expiry or renewal date of your current IRDAI agency license',
    location: 'About page credentials table',
  },
  {
    field: '[CODE]',
    currentValue: '[AGENT CODE e.g. 05830XXX]',
    purpose: 'Your 8-digit LIC Agency Code assigned by your servicing branch',
    location: 'About page, contact card, credentials modal',
  },
  {
    field: '[BRANCH]',
    currentValue: '[BRANCH e.g. Bhubaneswar Branch I / II / CBO]',
    purpose: 'Your attached LIC Branch office name and code in Bhubaneswar',
    location: 'About page, footer, contact section',
  },
  {
    field: '[OFFICE ADDRESS]',
    currentValue: '[OFFICE ADDRESS], Near Master Canteen / Saheed Nagar',
    purpose: 'Your consultation chamber or physical meeting office in Bhubaneswar',
    location: 'Contact page, footer, Google Map card',
  },
  {
    field: '[EMAIL]',
    currentValue: '[EMAIL]',
    purpose: 'Your official advisor email for receiving client inquiries',
    location: 'Contact page, header quick link, footer',
  },
  {
    field: '[X] years & [X]+ families',
    currentValue: '[X] years / [X]+ families',
    purpose: 'Your verified track record of active insurance advisory',
    location: 'Home trust bar, about page milestone metrics',
  },
  {
    field: '[Club membership]',
    currentValue: '[Club membership e.g. MDRT / CLIA / ZMDRT if genuinely held]',
    purpose: 'Any official club membership status genuinely awarded by LIC',
    location: 'About page recognition badge',
  },
  {
    field: 'Agent Photo',
    currentValue: 'Royalty-free professional placeholder avatar',
    purpose: 'Your high-resolution professional portrait in formal attire',
    location: 'Home hero, about page story, contact advisor card',
  },
];
