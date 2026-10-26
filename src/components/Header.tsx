import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  User,
  LogOut,
  Sliders,
  Bookmark,
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { AGENT_DATA } from '../data/agent';
import { auth, loginWithGoogle, logoutUser, isUserAdvisor } from '../firebase/config';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

interface HeaderProps {
  onOpenConsultation: (planName?: string) => void;
  onOpenHandoverModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onOpenHandoverModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [langOdia, setLangOdia] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  }, [location.pathname]);

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (err) {
      console.error('Sign-in error:', err);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUserDropdownOpen(false);
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Advisor', path: '/about' },
    { label: 'LIC Plans', path: '/plans' },
    { label: 'Calculators', path: '/calculators' },
    { label: 'Services', path: '/services' },
    { label: 'Resources', path: '/resources' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const isAdvisor = user && isUserAdvisor(user.email);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Compliance & Quick Contact Bar */}
      <div className="bg-gradient-to-r from-[#0B3C8C] via-[#0D47A1] to-[#0A3273] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5">
          <div className="flex items-center gap-2 text-center md:text-left flex-wrap justify-center">
            <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-200 px-2 py-0.5 rounded text-[11px] font-medium border border-amber-400/30">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
              IRDAI Authorised Life Insurance Advisor
            </span>
            <span className="text-blue-100 hidden sm:inline">•</span>
            <span className="text-blue-100 text-[11px]">
              License: <strong className="text-white font-mono">{AGENT_DATA.licenseNo}</strong>
            </span>
            <span className="text-blue-100 hidden sm:inline">•</span>
            <span className="text-blue-100 text-[11px]">
              Branch: <strong>{AGENT_DATA.branch}</strong>, Bhubaneswar
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Bilingual Greeting Indicator */}
            <button
              onClick={() => setLangOdia(!langOdia)}
              className="text-[11px] bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded transition text-blue-100 flex items-center gap-1"
              title="Toggle Odisha greeting"
            >
              <span>{langOdia ? 'ନମସ୍କାର ଭୁବନେଶ୍ୱର' : 'Namaskara Bhubaneswar'}</span>
            </button>

            <a
              href={`tel:${AGENT_DATA.phone}`}
              className="inline-flex items-center gap-1 font-semibold text-white hover:text-amber-300 transition text-[11px]"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{AGENT_DATA.phone}</span>
            </a>

            <a
              href={`https://wa.me/${AGENT_DATA.whatsappNumber}?text=${encodeURIComponent(AGENT_DATA.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-[#25D366] hover:bg-[#20ba5a] text-white px-2 py-0.5 rounded text-[11px] font-semibold transition"
            >
              <MessageCircle className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Client Handover Checklist trigger for quick inspection */}
            <button
              onClick={onOpenHandoverModal}
              className="text-[10px] text-amber-300 hover:text-white underline hidden lg:inline-flex items-center gap-1 ml-1"
              title="View Client Handover Checklist"
            >
              <FileCheck className="w-3 h-3" />
              <span>Checklist</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Wordmark (Replaceable Logo Slot) */}
          <Link to="/" className="flex items-center gap-3 group py-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B3C8C] to-[#1565C0] flex items-center justify-center text-white shadow-md shadow-blue-900/15 group-hover:scale-105 transition-transform duration-200 border-2 border-amber-400/40 relative">
              <ShieldCheck className="w-7 h-7 text-amber-400" />
              <span className="absolute -bottom-1 -right-1 bg-amber-400 text-blue-950 text-[9px] font-black px-1 rounded-sm leading-tight">
                LIC
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#0B3C8C] transition">
                  {AGENT_DATA.name}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium tracking-normal flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                Authorised LIC Advisor • Bhubaneswar, Odisha
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'text-[#0B3C8C] bg-blue-50 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-[#0B3C8C] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons & Firebase Auth */}
          <div className="hidden sm:flex items-center gap-3">
            {/* User Auth Profile / Google Sign-In */}
            {!authLoading && (
              <div className="relative">
                {user ? (
                  <div>
                    <button
                      onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                      className="flex items-center gap-2 p-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 transition text-left"
                    >
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt={user.displayName || 'User'}
                          className="w-7 h-7 rounded-full border border-blue-600"
                        />
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-blue-700 text-white flex items-center justify-center text-xs font-bold">
                          {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                        </div>
                      )}
                      <div className="text-left hidden md:block">
                        <p className="text-xs font-semibold text-slate-800 leading-tight truncate max-w-[100px]">
                          {user.displayName?.split(' ')[0] || 'My Account'}
                        </p>
                        <p className="text-[10px] text-emerald-600 font-medium leading-none">
                          {isAdvisor ? 'Advisor Portal' : 'Signed In'}
                        </p>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </button>

                    {/* User Dropdown */}
                    {userDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="px-4 py-2 border-b border-slate-100">
                          <p className="text-xs font-semibold text-slate-900 truncate">
                            {user.displayName || 'Client'}
                          </p>
                          <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                        </div>

                        {isAdvisor && (
                          <Link
                            to="/advisor-portal"
                            onClick={() => setUserDropdownOpen(false)}
                            className="flex items-center gap-2 px-4 py-2 text-xs text-blue-700 font-medium hover:bg-blue-50"
                          >
                            <Sliders className="w-3.5 h-3.5 text-blue-600" />
                            <span>Advisor Leads Dashboard</span>
                          </Link>
                        )}

                        <Link
                          to="/calculators"
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                        >
                          <Bookmark className="w-3.5 h-3.5 text-amber-500" />
                          <span>Saved Calculation Quotes</span>
                        </Link>

                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-4 py-2 text-xs text-red-600 hover:bg-red-50 text-left border-t border-slate-100 mt-1"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={handleGoogleLogin}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 hover:border-blue-400 rounded-lg hover:bg-blue-50/50 transition shadow-2xs"
                    title="Sign in with Google to save calculations & access dashboard"
                  >
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    <span>Client Login</span>
                  </button>
                )}
              </div>
            )}

            {/* Primary Consultation Action Button */}
            <button
              onClick={() => onOpenConsultation()}
              className="bg-gradient-to-r from-[#0B3C8C] to-[#0D47A1] hover:from-[#0a357b] hover:to-[#0b3c8c] text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md shadow-blue-900/20 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 border border-blue-400/30"
            >
              <span>Free Consultation</span>
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-ping"></span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenConsultation()}
              className="bg-[#0B3C8C] text-white text-xs font-semibold px-2.5 py-1.5 rounded-md sm:hidden"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-slate-100">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg ${
                    isActive ? 'text-[#0B3C8C] bg-blue-50 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            {user ? (
              <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
                    {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">{user.displayName || user.email}</p>
                    <p className="text-[10px] text-emerald-600">Logged in with Google</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {isAdvisor && (
                    <Link
                      to="/advisor-portal"
                      className="text-xs bg-blue-100 text-blue-800 font-semibold px-2 py-1 rounded"
                    >
                      Portal
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="text-xs text-red-600 font-medium px-2 py-1 hover:bg-red-50 rounded"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-sm font-medium"
              >
                <User className="w-4 h-4 text-blue-700" />
                <span>Sign in with Google</span>
              </button>
            )}

            <button
              onClick={() => onOpenConsultation()}
              className="w-full py-3 bg-[#0B3C8C] hover:bg-[#0a357b] text-white rounded-lg font-semibold text-sm shadow-md text-center"
            >
              Get Free Doorstep Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
