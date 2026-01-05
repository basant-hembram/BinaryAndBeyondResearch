import Hero from '../components/home/Hero';
import WhyInvestors from '../components/home/WhyInvestors';
import MeetYourPartner from '../components/home/MeetYourPartner';
import FinancialProducts from '../components/home/FinancialProducts';
import SIPCalculator from '../components/home/SIPCalculator';
import MutualFundResources from '../components/home/MutualFundResources';
import Founders from '../components/home/Founders';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyInvestors />
      <MeetYourPartner />
      <FinancialProducts />
      <SIPCalculator />
      <MutualFundResources />
      <Founders />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
