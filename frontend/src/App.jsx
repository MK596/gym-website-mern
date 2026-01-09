import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavbar from './components/MobileNavbar';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const Trainers = lazy(() => import('./pages/Trainers'));
const TrainerDetails = lazy(() => import('./pages/TrainerDetails'));
const Contact = lazy(() => import('./pages/Contact'));
const Membership = lazy(() => import('./pages/Membership'));
const ProgramDetails = lazy(() => import('./pages/ProgramDetails'));

const LoadingSpinner = () => (
  <div className="bg-black min-vh-100 d-flex align-items-center justify-content-center">
    <Spinner animation="border" variant="primary" />
  </div>
);

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 mb-5 mb-lg-0">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/:id" element={<ProgramDetails />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/trainers/:id" element={<TrainerDetails />} />
              <Route path="/memberships" element={<Membership />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <MobileNavbar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
