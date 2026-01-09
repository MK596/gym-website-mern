import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Trainers from './pages/Trainers';
import TrainerDetails from './pages/TrainerDetails';
import Contact from './pages/Contact';
import Membership from './pages/Membership';
import ProgramDetails from './pages/ProgramDetails';
import MobileNavbar from './components/MobileNavbar';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 mb-5 mb-lg-0">
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
        </main>
        <MobileNavbar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
