import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import ARTBA_G4 from './dashboard/Ga4/ARTBA_G4';
import Fb from './dashboard/FB/Fb';
import Events from './dashboard/Event/Events';
import Mailchimp from './dashboard/Mailchimp/Mailchimp';
// Import other dashboard pages as needed
export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/google-analytics" element={<ARTBA_G4 />} />
          <Route path="/fb" element={<Fb />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mailchimp" element={<Mailchimp />} />
          {/* Add routes for other dashboard pages */}
        </Routes>
      </MainLayout>
    </Router>
  );
}
