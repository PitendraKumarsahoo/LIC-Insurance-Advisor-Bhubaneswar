import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  ExternalLink,
  Award,
  Clock,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { AGENT_DATA, MANDATORY_COMPLIANCE_DISCLAIMER } from '../data/agent';

interface FooterProps {
  onOpenHandoverModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHandoverModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Advisor Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0B3C8C] flex items-center justify-center text-white border border-amber-400/50">
                <Shield className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base leading-tight">
                  {AGENT_DATA.name}
                </h3>
                <p className="text-xs text-amber-400 font-medium">
                  Authorised LIC Advisor • Bhubaneswar
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated, ethical life insurance consulting and doorstep policy servicing for families and business owners across Bhubaneswar, Cuttack, and Odisha.
            </p>

            <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/80 text-xs space-y-1">
              <div className="flex items-center justify-between text-slate-400">
                <span>IRDAI License No:</span>
                <strong className="text-amber-300 font-mono">{AGENT_DATA.licenseNo}</strong>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>LIC Agent Code:</span>
                <strong className="text-white font-mono">{AGENT_DATA.agentCode}</strong>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Servicing Branch:</span>
                <span className="text-slate-200">{AGENT_DATA.branch}</span>
              </div>
            </div>

            {/* Social & Verification */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={AGENT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${AGENT_DATA.whatsappNumber}?text=${encodeURIComponent(AGENT_DATA.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${AGENT_DATA.phone}`}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700"
                aria-label="Call Direct"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Popular LIC Plans by Category */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              Popular LIC Plans
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/plans/new-jeevan-anand" className="hover:text-amber-400 transition flex items-center justify-between">
                  <span>New Jeevan Anand (Plan 715)</span>
                  <span className="text-[10px] text-slate-500">Savings+Life</span>
                </Link>
              </li>
              <li>
                <Link to="/plans/jeevan-labh" className="hover:text-amber-400 transition flex items-center justify-between">
                  <span>LIC Jeevan Labh (Plan 836)</span>
                  <span className="text-[10px] text-slate-500">High Bonus</span>
                </Link>
              </li>
              <li>
                <Link to="/plans/new-jeevan-amar" className="hover:text-amber-400 transition flex items-center justify-between">
                  <span>New Jeevan Amar (Plan 755)</span>
                  <span className="text-[10px] text-slate-500">Pure Term</span>
                </Link>
              </li>
              <li>
                <Link to="/plans/amritbaal" className="hover:text-amber-400 transition flex items-center justify-between">
                  <span>LIC Amritbaal (Plan 874)</span>
                  <span className="text-[10px] text-slate-500">Child Fund</span>
                </Link>
              </li>
              <li>
                <Link to="/plans/jeevan-utsav" className="hover:text-amber-400 transition flex items-center justify-between">
                  <span>LIC Jeevan Utsav (Plan 871)</span>
                  <span className="text-[10px] text-slate-500">10% Life Income</span>
                </Link>
              </li>
              <li>
                <Link to="/plans/new-jeevan-shanti" className="hover:text-amber-400 transition flex items-center justify-between">
                  <span>New Jeevan Shanti (Plan 858)</span>
                  <span className="text-[10px] text-slate-500">Pension</span>
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-amber-400 font-semibold hover:underline inline-block pt-1">
                  View All 20+ Seed Plans →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Services */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-400" />
              Policyholder Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services" className="hover:text-amber-400 transition">
                  • Doorstep Claim Settlement Assistance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition">
                  • Lapsed Policy Revival & Late Fee Waiver
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition">
                  • Nominee & Address Change Endorsements
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition">
                  • Emergency Policy Loan Guidance (9% p.a.)
                </Link>
              </li>
              <li>
                <Link to="/calculators" className="hover:text-amber-400 transition">
                  • Financial Calculators (Life Cover, Pension)
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-amber-400 transition">
                  • Free Document & Claim Checklists
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-amber-400 transition">
                  • 16+ Insurance FAQs Answered
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Bhubaneswar Office */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-rose-400" />
              Bhubaneswar Office
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {AGENT_DATA.address}, {AGENT_DATA.city}, {AGENT_DATA.state} - {AGENT_DATA.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${AGENT_DATA.phone}`} className="hover:text-white transition">
                  {AGENT_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${AGENT_DATA.whatsappNumber}?text=${encodeURIComponent(AGENT_DATA.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp: +91 89086 77424
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{AGENT_DATA.email}</span>
              </div>
              <div className="pt-2">
                <p className="text-[11px] text-slate-400">
                  <strong>Consultation Hours:</strong> Mon - Sat: 9:00 AM – 8:00 PM (Home visits available across Bhubaneswar & Cuttack on prior appointment).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Official Grievance Redressal Links */}
        <div className="py-4 border-b border-slate-800 flex flex-wrap items-center justify-between text-xs gap-3">
          <div className="flex items-center gap-2 text-slate-400">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span>Policyholder Portals & Official Portals:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href="https://www.licindia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-amber-400 transition inline-flex items-center gap-1"
            >
              <span>Official LIC Website (licindia.in)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://bimabharosa.irdai.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-amber-400 transition inline-flex items-center gap-1"
            >
              <span>IRDAI Bima Bharosa Grievance</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://policyholder.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-amber-400 transition inline-flex items-center gap-1"
            >
              <span>IRDAI Policyholder Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* MANDATORY COMPLIANCE TEXT (Required on every page footer) */}
        <div className="pt-6 pb-6 text-xs text-slate-400 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800 mt-6">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <p className="text-slate-300 font-medium">
                Mandatory Regulatory Disclosure & Legal Compliance:
              </p>
              <p className="text-[11px] text-slate-400">
                {MANDATORY_COMPLIANCE_DISCLAIMER}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {AGENT_DATA.name} – Authorised LIC Insurance Advisor, Bhubaneswar. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-slate-300 transition">
              Terms of Use
            </Link>
            <span>•</span>
            <Link to="/disclaimer" className="hover:text-slate-300 transition">
              Regulatory Disclaimer
            </Link>
            <span>•</span>
            <Link to="/grievance" className="hover:text-slate-300 transition">
              Grievance Redressal
            </Link>
            <span>•</span>
            <button
              onClick={onOpenHandoverModal}
              className="text-amber-400 hover:text-amber-300 font-medium underline inline-flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Client Handover Checklist</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
