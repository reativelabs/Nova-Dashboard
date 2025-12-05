import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import AuthLayout from './components/AuthLayout';
import Dashboard from './pages/Dashboard';


import ProFeature from './pages/ProFeature';

import ForgotPassword from './pages/ForgotPassword';

import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tables" element={<ProFeature />} />
          <Route path="/billing" element={<ProFeature />} />
          <Route path="/profile" element={<ProFeature />} />
          <Route path="/notifications" element={<ProFeature />} />
          <Route path="/404" element={<NotFound />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/sign-in" element={<AuthLayout><ProFeature /></AuthLayout>} />
        <Route path="/sign-up" element={<AuthLayout><ProFeature /></AuthLayout>} />
        <Route path="/forgot-password" element={<AuthLayout><ForgotPassword /></AuthLayout>} />

        {/* Catch all - redirect to 404 then dashboard */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
