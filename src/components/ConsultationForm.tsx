import React, { useState } from 'react';
import {
  Send,
  CheckCircle,
  Phone,
  MessageCircle,
  Shield,
  Clock,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { submitLead, LeadData } from '../firebase/config';
import { AGENT_DATA } from '../data/agent';

interface ConsultationFormProps {
  initialPlanName?: string;
  onSuccessClose?: () => void;
  compact?: boolean;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialPlanName = '',
  onSuccessClose,
  compact = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    city: 'Bhubaneswar',
    planCategory: initialPlanName ? 'Specific Plan' : 'Endowment & Savings',
    planName: initialPlanName,
    preferredTime: 'Evening (4 PM - 8 PM)',
    message: '',
    consentWhatsapp: true,
    // Bot honeypot field
    honeypot: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot check
    if (formData.honeypot) {
      console.warn('Bot submission prevented.');
      return;
    }

    // Input validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!formData.consentWhatsapp) {
      setErrorMessage('Please confirm your consent to receive plan illustrations.');
      return;
    }

    setLoading(true);
    try {
      await submitLead({
        name: formData.name.trim().slice(0, 100),
        phone: cleanPhone.slice(0, 15),
        email: formData.email.trim().slice(0, 100) || undefined,
        age: formData.age ? parseInt(formData.age, 10) : undefined,
        city: formData.city.trim().slice(0, 100),
        planCategory: formData.planCategory.slice(0, 50),
        planName: (formData.planName || formData.planCategory).slice(0, 100),
        preferredTime: formData.preferredTime.slice(0, 50),
        message: formData.message.trim().slice(0, 1000) || undefined,
        consentWhatsapp: formData.consentWhatsapp
      });

      setSubmitted(true);
    } catch (err: any) {
      console.error('Lead submission failed:', err);
      setErrorMessage('Could not send consultation request. Please call or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/${AGENT_DATA.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${AGENT_DATA.name}, I just requested a consultation for ${
      formData.planName || formData.planCategory
    }. My name is ${formData.name}.`
  )}`;

  if (submitted) {
    return (
      <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-6 text-center space-y-4 animate-in fade-in duration-200">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle className="w-8 h-8" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-slate-900">Consultation Request Received!</h4>
          <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
            Thank you, <strong className="text-slate-800">{formData.name}</strong>. {AGENT_DATA.name} will personally review your requirements and reach out during your preferred window (<strong>{formData.preferredTime}</strong>).
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-xs space-y-2 text-left text-xs text-slate-700">
          <p className="font-semibold text-slate-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Want an instant quote or benefit illustration right now?
          </p>
          <p className="text-slate-500">
            Skip the waiting queue by connecting directly on WhatsApp with our pre-filled message:
          </p>
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-4 rounded-lg font-semibold transition text-xs shadow-sm mt-1"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open in WhatsApp Now</span>
          </a>
        </div>

        {onSuccessClose && (
          <button
            onClick={onSuccessClose}
            className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer pt-2"
          >
            Close this dialog
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Hidden honeypot field */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
      />

      {errorMessage && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Name and Phone */}
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-3.5`}>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Ramesh Chandra Das"
            className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3C8C] focus:border-transparent bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            WhatsApp / Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-xs text-slate-500 font-medium">+91</span>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="89086 77424"
              className="w-full pl-11 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3C8C] focus:border-transparent bg-white font-mono"
            />
          </div>
        </div>
      </div>

      {/* Age and City */}
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-3.5`}>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Your Age (Optional)
          </label>
          <input
            type="number"
            name="age"
            min={18}
            max={75}
            value={formData.age}
            onChange={handleChange}
            placeholder="e.g. 32"
            className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3C8C] focus:border-transparent bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            City / Location in Odisha
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3C8C] focus:border-transparent bg-white"
          >
            <option value="Bhubaneswar">Bhubaneswar (All Areas)</option>
            <option value="Cuttack">Cuttack (Twin City)</option>
            <option value="Puri">Puri</option>
            <option value="Khordha">Khordha</option>
            <option value="Rourkela">Rourkela</option>
            <option value="Sambalpur">Sambalpur</option>
            <option value="Berhampur">Berhampur</option>
            <option value="Other Odisha">Other Districts of Odisha</option>
            <option value="NRI / Other States">NRI / Outside Odisha</option>
          </select>
        </div>
      </div>

      {/* Plan Interest & Preferred Callback Time */}
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-3.5`}>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Insurance Requirement / Goal
          </label>
          <select
            name="planCategory"
            value={formData.planCategory}
            onChange={handleChange}
            className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3C8C] focus:border-transparent bg-white"
          >
            <option value="Endowment & Savings">Savings & Lifelong Cover (Jeevan Anand / Labh)</option>
            <option value="Term Insurance">Pure Protection Term Cover (New Jeevan Amar)</option>
            <option value="Child Higher Education">Child Education Fund (Amritbaal)</option>
            <option value="Guaranteed Regular Income">10% Guaranteed Income (Jeevan Utsav)</option>
            <option value="Pension & Retirement">Pension / Annuity (New Jeevan Shanti)</option>
            <option value="Lapsed Policy Revival">Lapsed Policy Revival / Servicing</option>
            <option value="Doorstep Claim Assistance">Doorstep Claim Assistance</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Callback Time
          </label>
          <select
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3C8C] focus:border-transparent bg-white"
          >
            <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM) - Most Preferred</option>
            <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
            <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
            <option value="Anytime Convenient">Anytime Convenient</option>
          </select>
        </div>
      </div>

      {/* Optional Note */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Specific Plan or Query Note (Optional)
        </label>
        <textarea
          name="message"
          rows={compact ? 2 : 3}
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. Need ₹1 Crore term plan quote or planning ₹10,000/month savings for 15 years..."
          className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3C8C] focus:border-transparent bg-white resize-none"
        ></textarea>
      </div>

      {/* WhatsApp Consent Checkbox (Compliance) */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="consentWhatsapp"
          name="consentWhatsapp"
          checked={formData.consentWhatsapp}
          onChange={handleChange}
          className="mt-0.5 rounded text-[#0B3C8C] focus:ring-[#0B3C8C] w-4 h-4"
        />
        <label htmlFor="consentWhatsapp" className="text-[11px] text-slate-600 leading-tight">
          I consent to receive customized LIC policy illustrations, premium benefit charts, and consultation updates via WhatsApp and phone from <strong className="text-slate-800">{AGENT_DATA.name}</strong>. Zero spam guarantee.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#0B3C8C] hover:bg-[#0a357b] disabled:opacity-60 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Booking Consultation...
          </span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Request Free Doorstep Consultation</span>
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 pt-1">
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-emerald-600" />
          100% Privacy Protected
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-blue-600" />
          Fast Response Guaranteed
        </span>
      </div>
    </form>
  );
};
