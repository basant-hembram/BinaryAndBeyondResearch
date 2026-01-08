import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Calculator from './pages/Calculator';
import MFResearch from './pages/MFResearch';
import BecomeDistributor from './pages/BecomeDistributor';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import TermsOfUse from './pages/TermsOfUse';
import ImportantLinks from './pages/ImportantLinks';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/mf-research" element={<MFResearch />} />
          <Route path="/become-distributor" element={<BecomeDistributor />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/important-links" element={<ImportantLinks />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
