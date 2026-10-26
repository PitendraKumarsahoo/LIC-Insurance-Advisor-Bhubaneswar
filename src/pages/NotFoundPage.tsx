import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Phone } from 'lucide-react';
import { AGENT_DATA } from '../data/agent';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 max-w-lg mx-auto px-4 text-center space-y-6">
      <div className="w-20 h-20 bg-blue-100 text-[#0B3C8C] rounded-3xl flex items-center justify-center mx-auto text-2xl font-black font-mono">
        404
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold text-slate-900">Page Not Found</h1>
        <p className="text-xs sm:text-sm text-slate-600">
          The page you are looking for may have moved or doesn't exist. You can browse all current LIC plans or return to the homepage.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 bg-[#0B3C8C] hover:bg-[#093275] text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-xs transition"
        >
          <Home className="w-4 h-4" />
          <span>Go to Home</span>
        </Link>
        <Link
          to="/plans"
          className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-xl text-xs font-semibold transition"
        >
          <Compass className="w-4 h-4" />
          <span>Explore LIC Plans</span>
        </Link>
      </div>

      <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
        <span>Need urgent assistance? Call advisor at </span>
        <a href={`tel:${AGENT_DATA.phone}`} className="font-semibold text-blue-700 hover:underline">
          {AGENT_DATA.phone}
        </a>
      </div>
    </div>
  );
};
