import { useState } from 'react';
import { data } from '../../data';

interface CalculatorOption {
  id: string;
  name: string;
  active?: boolean;
}

const CalculatorButtons = () => {
  const { calculatorButtons } = data.calculator;
  const calculatorOptions: CalculatorOption[] = calculatorButtons.options;
  const [activeCalculator, setActiveCalculator] = useState('crorepati');

  return (
    <div className="py-16 bg-[#E9E9EB]">
      <div className="container max-md:px-4">
        <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-center mb-12">
          {calculatorButtons.title} <span className="text-[#E6AF1C] font-semibold">{calculatorButtons.titleHighlight}</span>
        </h2>
        
        <div className="grid lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {calculatorOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveCalculator(option.id)}
              className={`py-4 px-6 rounded-lg font-medium shadow-lg text-[14px] lg:text-[16px] transition-all ${
                activeCalculator === option.id
                  ? 'bg-[#01A382] text-white shadow-md'
                  : 'bg-[#BADBD6] text-[#0A1A3A] border-2 border-[#01A382] hover:bg-[#01A382] hover:text-white'
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorButtons;
