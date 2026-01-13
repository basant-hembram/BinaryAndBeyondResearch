import { useState } from 'react';

interface CalculatorOption {
  id: string;
  name: string;
  active?: boolean;
}

const calculatorOptions: CalculatorOption[] = [
  { id: 'crorepati', name: 'Become A Crorepati Calculator', active: true },
  { id: 'sip-step-up', name: 'Mutual Fund Sip Calculator Step Up' },
  { id: 'target-amount', name: 'Target Amount SIP Calculator' },
  { id: 'retirement', name: 'Retirement Planning Calculator' },
  { id: 'asset-allocation', name: 'Asset Allocation Calculator' },
  { id: 'composite', name: 'Composite Financial Goal Planner Calculator' },
  { id: 'future-value', name: 'Future Value Calculator' },
  { id: 'human-life', name: 'Human Life Value Calculator' },
  { id: 'lumpsum', name: 'Lumpsum Target Calculator' },
  { id: 'education', name: 'Education Planner Calculator' }
];

const CalculatorButtons = () => {
  const [activeCalculator, setActiveCalculator] = useState('crorepati');

  return (
    <div className="py-16 bg-[#E9E9EB]">
      <div className="container">
        <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-center mb-12">
          Choose and explore our <span className="text-[#E6AF1C] font-semibold">Mutual fund Calculators</span>
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
