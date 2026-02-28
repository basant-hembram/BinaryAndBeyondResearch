'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { data } from '../../data';

const BecomeACrorepatiCalculator = () => {
  const { becomeACrorepati } = data.calculator;
  
  const [currentValue, setCurrentValue] = useState(becomeACrorepati.fields[0].defaultValue);
  const [currentAge, setCurrentAge] = useState(becomeACrorepati.fields[1].defaultValue);
  const [targetAge, setTargetAge] = useState(becomeACrorepati.fields[2].defaultValue);
  const [inflationRate, setInflationRate] = useState(becomeACrorepati.fields[3].defaultValue);
  const [returnRate, setReturnRate] = useState(becomeACrorepati.fields[4].defaultValue);
  const [savings, setSavings] = useState(becomeACrorepati.fields[5].defaultValue);

  // Calculate chart data
  const amountInvested = 19007940; // Example calculation
  const totalGrowth = 230392018; // Example calculation
  
  const chartData = [
    { name: becomeACrorepati.chart.legend[0].label, value: amountInvested },
    { name: becomeACrorepati.chart.legend[1].label, value: totalGrowth }
  ];
  
  const COLORS = becomeACrorepati.chart.colors;

  return (
    <div className="py-16 bg-white">
      <div className="container max-md:px-4 mx-auto">
        <div className="mb-8">
          <h2 className="text-[22px] lg:text-[24px] font-semibold text-[#E6AF1C] mb-2">
            {becomeACrorepati.title}
          </h2>
          <p className="text-[#575455]">
            {becomeACrorepati.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Input Sliders */}
          <div className="lg:col-span-3 space-y-8 border-2 border-dashed border-yellow-400 rounded-lg p-8">
            <div className='grid xl:grid-cols-2 gap-[47px]'>
              {/* Current Value Slider */}
              <div>
                <label className="block text-[#4A4444] mb-3 text-sm">
                  {becomeACrorepati.fields[0].label}
                </label>
                <div className="flex flex-col items-end w-full gap-[25px]">
                  <input
                    type="text"
                    value={currentValue.toLocaleString('en-IN')}
                    readOnly
                    className="w-40 px-4 py-2 rounded-md text-center bg-gray-200 text-[#4A4444]"
                  />
                  <input
                    type="range"
                    min={becomeACrorepati.fields[0].min}
                    max={becomeACrorepati.fields[0].max}
                    value={currentValue}
                    onChange={(e) => setCurrentValue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider-yellow"
                    style={{
                      background: `linear-gradient(to right, #E6AF1C 0%, #E6AF1C ${(currentValue / becomeACrorepati.fields[0].max) * 100}%, #E6E6E6 ${(currentValue / becomeACrorepati.fields[0].max) * 100}%, #E6E6E6 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Current Age Slider */}
              <div>
                <label className="block text-[#4A4444] mb-3 text-sm">
                  {becomeACrorepati.fields[1].label}
                </label>
                <div className="flex flex-col items-end w-full gap-[25px]">
                  <input
                    type="text"
                    value={currentAge}
                    readOnly
                    className="w-40 px-4 py-2 rounded-md text-center bg-gray-200 text-[#4A4444]"
                  />
                  <input
                    type="range"
                    min={becomeACrorepati.fields[1].min}
                    max={becomeACrorepati.fields[1].max}
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #E6AF1C 0%, #E6AF1C ${((currentAge - becomeACrorepati.fields[1].min) / (becomeACrorepati.fields[1].max - becomeACrorepati.fields[1].min)) * 100}%, #d1d5db ${((currentAge - becomeACrorepati.fields[1].min) / (becomeACrorepati.fields[1].max - becomeACrorepati.fields[1].min)) * 100}%, #d1d5db 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Target Age Slider */}
              <div>
                <label className="block text-[#4A4444] mb-3 text-sm">
                  {becomeACrorepati.fields[2].label}
                </label>
                <div className="flex flex-col items-end w-full gap-[25px]">
                  <input
                    type="text"
                    value={targetAge}
                    readOnly
                    className="w-40 px-4 py-2 rounded-md text-center bg-gray-200 text-[#4A4444]"
                  />
                  <input
                    type="range"
                    min={becomeACrorepati.fields[2].min}
                    max={becomeACrorepati.fields[2].max}
                    value={targetAge}
                    onChange={(e) => setTargetAge(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #E6AF1C 0%, #E6AF1C ${((targetAge - becomeACrorepati.fields[2].min) / (becomeACrorepati.fields[2].max - becomeACrorepati.fields[2].min)) * 100}%, #d1d5db ${((targetAge - becomeACrorepati.fields[2].min) / (becomeACrorepati.fields[2].max - becomeACrorepati.fields[2].min)) * 100}%, #d1d5db 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Inflation Rate Slider */}
              <div>
                <label className="block text-[#4A4444] mb-3 text-sm">
                  {becomeACrorepati.fields[3].label}
                </label>
                <div className="flex flex-col items-end w-full gap-[25px]">
                  <input
                    type="text"
                    value={inflationRate}
                    readOnly
                    className="w-40 px-4 py-2 rounded-md text-center bg-gray-200 text-[#4A4444]"
                  />
                  <input
                    type="range"
                    min={becomeACrorepati.fields[3].min}
                    max={becomeACrorepati.fields[3].max}
                    value={inflationRate}
                    onChange={(e) => setInflationRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #E6AF1C 0%, #E6AF1C ${(inflationRate / becomeACrorepati.fields[3].max) * 100}%, #d1d5db ${(inflationRate / becomeACrorepati.fields[3].max) * 100}%, #d1d5db 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Return Rate Slider */}
              <div>
                <label className="block text-[#4A4444] mb-3 text-sm">
                  {becomeACrorepati.fields[4].label}
                </label>
                <div className="flex flex-col items-end w-full gap-[25px]">
                  <input
                    type="text"
                    value={returnRate}
                    readOnly
                    className="w-40 px-4 py-2 rounded-md text-center bg-gray-200 text-[#4A4444]"
                  />
                  <input
                    type="range"
                    min={becomeACrorepati.fields[4].min}
                    max={becomeACrorepati.fields[4].max}
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #E6AF1C 0%, #E6AF1C ${((returnRate - becomeACrorepati.fields[4].min) / (becomeACrorepati.fields[4].max - becomeACrorepati.fields[4].min)) * 100}%, #d1d5db ${((returnRate - becomeACrorepati.fields[4].min) / (becomeACrorepati.fields[4].max - becomeACrorepati.fields[4].min)) * 100}%, #d1d5db 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Savings Slider */}
              <div>
                <label className="block text-[#4A4444] mb-3 text-sm">
                  {becomeACrorepati.fields[5].label}
                </label>
                <div className="flex flex-col items-end w-full gap-[25px]">
                  <input
                    type="text"
                    value={savings.toLocaleString('en-IN')}
                    readOnly
                    className="w-40 px-4 py-2 rounded-md text-center bg-gray-200 text-[#4A4444]"
                  />
                  <input
                    type="range"
                    min={becomeACrorepati.fields[5].min}
                    max={becomeACrorepati.fields[5].max}
                    value={savings}
                    onChange={(e) => setSavings(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #E6AF1C 0%, #E6AF1C ${(savings / becomeACrorepati.fields[5].max) * 100}%, #d1d5db ${(savings / becomeACrorepati.fields[5].max) * 100}%, #d1d5db 100%)`
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
                {becomeACrorepati.chart.legend.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <div className="w-[26px] h-[8px]" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-[#575455]">{item.label}</span>
                  </div>
                ))}
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
                      {chartData.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <Button size="lg" className="text-base flex items-center gap-2 w-full">
                {becomeACrorepati.downloadButton}
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
