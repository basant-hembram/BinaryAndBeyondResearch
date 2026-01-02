import Header from './components/Header';
import Hero from './components/Hero';
import WhyInvestors from './components/WhyInvestors';
import MeetYourPartner from './components/MeetYourPartner';
import FinancialProducts from './components/FinancialProducts';
import SIPCalculator from './components/SIPCalculator';
import MutualFundResources from './components/MutualFundResources';
import Founders from './components/Founders';

import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyInvestors />
      <MeetYourPartner />
      <FinancialProducts />
      <SIPCalculator />
      <MutualFundResources />
      <Founders />
     
      <Footer />
    </div>
  );
}

export default App;
