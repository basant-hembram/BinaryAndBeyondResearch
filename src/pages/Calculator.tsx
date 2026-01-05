import Banner from '../components/common/Banner';
import CalculatorButtons from '../components/calculator/CalculatorButtons';
import BecomeACrorepatiCalculator from '../components/calculator/BecomeACrorepatiCalculator';
import CalculatorResults from '../components/calculator/CalculatorResults';

const Calculator = () => {
  return (
    <div className="bg-white">
      <Banner 
        title="Financial Tools & Calculators"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Calculator', path: '/calculator' }
        ]}
        backgroundImage="/images/banner-bg.jpg"
      />
      <CalculatorButtons />
      <BecomeACrorepatiCalculator />
      <CalculatorResults />
    </div>
  );
};

export default Calculator;
