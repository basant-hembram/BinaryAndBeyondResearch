import { useState } from 'react';
import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const BecomeACrorepatiCalculator = () => {
  const [currentValue, setCurrentValue] = useState(50000);
  const [currentAge, setCurrentAge] = useState(22);
  const [targetAge, setTargetAge] = useState(60);
  const [returnRate, setReturnRate] = useState(12);
  const [savings, setSavings] = useState(140260);
  const [inflationRate, setInflationRate] = useState(0);

  // Calculate chart data
  const amountInvested = 19007940; // Example calculation
  const totalGrowth = 230392018; // Example calculation
  
  const chartData = [
    { name: 'Amount Invested', value: amountInvested },
    { name: 'Total Growth', value: totalGrowth }
  ];
  
  const COLORS = ['#01A382', '#E6AF1C'];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-[22px] lg:text-[24px] font-semibold text-[#E6AF1C] mb-2">
            Become A Crorepati Calculator
          </h2>
          <p className="text-gray-600">
            Become A Crorepati Calculator Helps You Calculate How Much Money<br />
            You Need To Save Monthly To Become A Crorepati.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Input Sliders */}
          <div className="lg:col-span-3 space-y-8 border-2 border-dashed border-yellow-400 rounded-lg p-8">
            <div className='grid xl:grid-cols-2 gap-[47px]'>
              {/* Current Value Slider */}
              <div>
                <label className="block text-gray-700 mb-3 text-sm">
                  How many Crores (at current value) you would need to consider yourself wealthy (Rs)
                </label>
                <div className="flex flex-col items-end w-full gap-[25px]">
                  <input
                    type="text"
                    value={currentValue.toLocaleString('en-IN')}
                    readOnly
                    className="w-40 px-4 py-2 rounded-md text-center bg-gray-200 text-gray-700"
                  />
                  <input
                    type="range"
                    min="1000"
                    max="100000000"
                    value={currentValue}
                    onChange={(e) => setCurrentValue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider-yellow"
                    style={{
                      background: `linear-gradient(to right, #E6AF1C 0%, #E6AF1C ${(currentValue / 100000000) * 100}%, #E6E6E6 ${(currentValue / 100000000) * 100}%, #E6E6E6 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Current Age Slider */}
              <div>
                <label className="block text-gray-700 mb-3 text-sm">
                  Your current age (in years)
                </label>
                <div className="flex flex-col items-end w-full gap-[25px]">
                  <input
                    type="text"
                    value={currentAge}
                    readOnly
                    className="w-40 px-4 py-2 rounded-md text-center bg-gray-200 text-gray-700"
                  />
                  <input
                    type="range"
                    min="18"
                    max="60"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #E6AF1C 0%, #E6AF1C ${((currentAge - 18) / (60 - 18)) * 100}%, #d1d5db ${((currentAge - 18) / (60 - 18)) * 100}%, #d1d5db 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Target Age Slider */}
              <div>
                <label className="block text-gray-700 mb-3 text-sm">
                  The age when you want to become a Crorepati (in years)
                </label>
                <div className="flex flex-col items-end w-full gap-[25px]">
                  <input
                    type="text"
                    value={targetAge}
                    readOnly
                    className="w-40 px-4 py-2 rounded-md text-center bg-gray-200 text-gray-700"
                  />
                  <input
                    type="range"
                    min="25"
                    max="80"
                    value={targetAge}
                    onChange={(e) => setTargetAge(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #E6AF1C 0%, #E6AF1C ${((targetAge - 25) / (80 - 25)) * 100}%, #d1d5db ${((targetAge - 25) / (80 - 25)) * 100}%, #d1d5db 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Inflation Rate Slider */}
              <div>
                <label className="block text-gray-700 mb-3 text-sm">
                  The expected rate of inflation over the years (% per annum)
                </label>
                <div className="flex flex-col items-end w-full gap-[25px]">
                  <input
                    type="text"
                    value={inflationRate}
                    readOnly
                    className="w-40 px-4 py-2 rounded-md text-center bg-gray-200 text-gray-700"
                  />
                  <input
                    type="range"
                    min="0"
                    max="15"
                    value={inflationRate}
                    onChange={(e) => setInflationRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #E6AF1C 0%, #E6AF1C ${(inflationRate / 15) * 100}%, #d1d5db ${(inflationRate / 15) * 100}%, #d1d5db 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Return Rate Slider */}
              <div>
                <label className="block text-gray-700 mb-3 text-sm">
                  What rate of return would you expect your SIP investment to generate (% per annum)
                </label>
                <div className="flex flex-col items-end w-full gap-[25px]">
                  <input
                    type="text"
                    value={returnRate}
                    readOnly
                    className="w-40 px-4 py-2 rounded-md text-center bg-gray-200 text-gray-700"
                  />
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #E6AF1C 0%, #E6AF1C ${((returnRate - 1) / (30 - 1)) * 100}%, #d1d5db ${((returnRate - 1) / (30 - 1)) * 100}%, #d1d5db 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Savings Slider */}
              <div>
                <label className="block text-gray-700 mb-3 text-sm">
                  How much savings you have now (Rs)
                </label>
                <div className="flex flex-col items-end w-full gap-[25px]">
                  <input
                    type="text"
                    value={savings.toLocaleString('en-IN')}
                    readOnly
                    className="w-40 px-4 py-2 rounded-md text-center bg-gray-200 text-gray-700"
                  />
                  <input
                    type="range"
                    min="0"
                    max="10000000"
                    value={savings}
                    onChange={(e) => setSavings(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #E6AF1C 0%, #E6AF1C ${(savings / 10000000) * 100}%, #d1d5db ${(savings / 10000000) * 100}%, #d1d5db 100%)`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Pie Chart and Download */}
          <div className="lg:col-span-1">
            <div className="bg-[#E9E9EB] p-6 rounded-lg">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-[26px] h-[8px] bg-[#01A382]"></div>
                  <span className="text-sm text-[#575455]">Amount Invested</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[26px] h-[8px] bg-[#E6AF1C]"></div>
                  <span className="text-sm text-[#575455]">Total Growth</span>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="w-56 h-56 mx-auto mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={0}
                      outerRadius={80}
                      paddingAngle={0}
                      dataKey="value"
                      stroke="none"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <Button size="lg" className="text-base flex items-center gap-2 w-full">
                Download PDF
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeACrorepatiCalculator;
