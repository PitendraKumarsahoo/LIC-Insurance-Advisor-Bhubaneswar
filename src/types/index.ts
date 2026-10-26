export type PlanCategory =
  | 'term'
  | 'endowment'
  | 'child'
  | 'pension'
  | 'ulip'
  | 'riders';

export interface PlanItem {
  id: string; // URL slug e.g. 'new-jeevan-anand'
  tableNumber: string; // e.g. 'Plan 715'
  name: string;
  category: PlanCategory;
  categoryLabel: string;
  tagline: string;
  overview: string;
  whoItIsFor: string;
  keyFeatures: string[];
  eligibility: {
    minAge: string;
    maxAge: string;
    minTerm: string;
    maxTerm: string;
    minSumAssured: string;
    maxSumAssured: string;
    premiumPayingTerm?: string;
  };
  benefits: string[];
  riders: string[];
  taxNote: string;
  faqs: { question: string; answer: string }[];
  featured?: boolean;
  popularTag?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'claims' | 'servicing' | 'tax' | 'buying' | 'general';
}

export interface ResourceArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface DownloadableDoc {
  id: string;
  title: string;
  category: string;
  fileSize: string;
  description: string;
  itemsList: string[];
  tips: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  roleOrLocation: string;
  rating: number;
  date: string;
  planPurchased: string;
  story: string;
  verifiedTag: string;
}

export interface AgentProfile {
  name: string;
  tagline: string;
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  licenseNo: string;
  licenseValidity: string;
  agentCode: string;
  branch: string;
  division: string;
  zone: string;
  experienceYears: string;
  familiesServed: string;
  claimRatioHelped: string;
  clubMembership: string;
  instagramUrl: string;
}
