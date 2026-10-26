import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Instagram,
  ShieldCheck,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { AGENT_DATA } from '../data/agent';
import { ConsultationForm } from '../components/ConsultationForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C8C] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Contact Your Bhubaneswar LIC Advisor
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Schedule a free doorstep meeting, request policy quotations, or get assistance with claims and lapsed policy revivals.
        </p>
      </div>

      {/* Main Grid: Form Left, Info & Map Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column (7 cols): Consultation Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-1 border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900">
              Request Free Doorstep Consultation
            </h2>
            <p className="text-xs text-slate-500">
              Fill in your details below. {AGENT_DATA.name} will personally review your request and get in touch during your preferred call time.
            </p>
          </div>

          <ConsultationForm />
        </div>

        {/* Right Column (5 cols): Contact Cards, Hours, Map */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Communication Channels */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-bold text-base text-slate-900">Direct Contact Channels</h3>

            <div className="space-y-3 text-xs">
              <a
                href={`tel:${AGENT_DATA.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/70 hover:bg-blue-100 border border-blue-100 text-[#0B3C8C] transition"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0B3C8C] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Direct Call</span>
                  <p className="font-bold text-sm text-slate-900">{AGENT_DATA.phone}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${AGENT_DATA.whatsappNumber}?text=${encodeURIComponent(
                  AGENT_DATA.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/70 hover:bg-emerald-100 border border-emerald-100 text-emerald-800 transition"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Instant WhatsApp</span>
                  <p className="font-bold text-sm text-slate-900">+91 89086 77424</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Email Inquiry</span>
                  <p className="font-bold text-sm text-slate-900">{AGENT_DATA.email}</p>
                </div>
              </div>

              <a
                href={AGENT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-pink-50/70 hover:bg-pink-100 border border-pink-100 text-pink-900 transition"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Instagram</span>
                  <p className="font-bold text-sm text-slate-900">@lic.bhubaneswar</p>
                </div>
              </a>
            </div>

            {/* Office Working Hours */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <Clock className="w-4 h-4 text-blue-700" />
                <span>Consultation & Office Hours</span>
              </div>
              <p className="text-slate-600">
                <strong>Monday – Saturday:</strong> 9:00 AM – 8:00 PM
              </p>
              <p className="text-slate-600">
                <strong>Sunday:</strong> On prior appointment for doorstep family meetings across Bhubaneswar & Cuttack.
              </p>
            </div>
          </div>

          {/* Embedded Google Map of Bhubaneswar */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>Office Location</span>
              </span>
              <span className="text-slate-500 text-[11px]">Bhubaneswar, Odisha</span>
            </div>

            <p className="text-xs text-slate-600">
              {AGENT_DATA.address}, {AGENT_DATA.city}, {AGENT_DATA.state} - {AGENT_DATA.pincode}
            </p>

            {/* Map Frame */}
            <div className="w-full h-52 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
              <iframe
                title="Bhubaneswar Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.53374948756!2d85.76014457497232!3d20.30103131751283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-slate-500 justify-center pt-1">
              <span>Home visits covering: Saheed Nagar, Nayapalli, Patia, Khandagiri & Cuttack</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
