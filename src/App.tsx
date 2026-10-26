/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { LeadModal } from './components/LeadModal';
import { HandoverChecklistModal } from './components/HandoverChecklistModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PlansPage } from './pages/PlansPage';
import { PlanDetailPage } from './pages/PlanDetailPage';
import { CalculatorsPage } from './pages/CalculatorsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { AdvisorDashboard } from './pages/AdvisorDashboard';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedPlanForQuote, setSelectedPlanForQuote] = useState<string | undefined>(undefined);
  const [handoverModalOpen, setHandoverModalOpen] = useState(false);

  const handleOpenConsultation = (planName?: string) => {
    setSelectedPlanForQuote(planName);
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
    setSelectedPlanForQuote(undefined);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-amber-100 selection:text-blue-900 pb-16 md:pb-0">
        {/* Global Header */}
        <Header
          onOpenConsultation={handleOpenConsultation}
          onOpenHandoverModal={() => setHandoverModalOpen(true)}
        />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/about"
              element={
                <AboutPage
                  onOpenConsultation={() => handleOpenConsultation()}
                  onOpenHandoverModal={() => setHandoverModalOpen(true)}
                />
              }
            />
            <Route
              path="/plans"
              element={<PlansPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/plans/:slug"
              element={<PlanDetailPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route
              path="/services"
              element={<ServicesPage onOpenConsultation={() => handleOpenConsultation()} />}
            />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route
              path="/testimonials"
              element={
                <TestimonialsPage onOpenConsultation={() => handleOpenConsultation()} />
              }
            />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Legal routes */}
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/terms" element={<LegalPage />} />
            <Route path="/disclaimer" element={<LegalPage />} />
            <Route path="/grievance" element={<LegalPage />} />

            {/* Advisor & User Dashboard */}
            <Route path="/advisor-portal" element={<AdvisorDashboard />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenHandoverModal={() => setHandoverModalOpen(true)} />

        {/* Global Floating Actions: WhatsApp & Mobile Bottom Bar */}
        <FloatingActions />

        {/* Global Lead / Consultation Intake Modal */}
        <LeadModal
          isOpen={consultationOpen}
          onClose={handleCloseConsultation}
          selectedPlanName={selectedPlanForQuote}
        />

        {/* Client Handover Checklist Modal */}
        <HandoverChecklistModal
          isOpen={handoverModalOpen}
          onClose={() => setHandoverModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
