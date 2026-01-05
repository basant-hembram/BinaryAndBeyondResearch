import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Calculator from './pages/Calculator';
import MFResearch from './pages/MFResearch';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/mf-research" element={<MFResearch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
