import Banner from '../components/common/Banner';
import CalculatorButtons from '../components/calculator/CalculatorButtons';
import BecomeACrorepatiCalculator from '../components/calculator/BecomeACrorepatiCalculator';
import CalculatorResults from '../components/calculator/CalculatorResults';
import { data } from '../data';

const Calculator = () => {
  const calculatorData = data.calculator;
  
  return (
    <div className="bg-white">
      <Banner 
        title={calculatorData.banner.title}
        breadcrumbs={calculatorData.banner.breadcrumbs}
        backgroundImage={calculatorData.banner.backgroundImage}
      />
      <CalculatorButtons />
      <BecomeACrorepatiCalculator />
      <CalculatorResults />
    </div>
  );
};

export default Calculator;
