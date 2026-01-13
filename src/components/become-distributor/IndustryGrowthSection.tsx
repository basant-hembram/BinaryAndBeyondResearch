import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faUserGroup, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const growthData = [
  { month: 'Apr', aum: 8, folios: 20, investors: 10 },
  { month: 'May', aum: 13, folios: 22, investors: 9 },
  { month: 'Jun', aum: 15, folios: 24, investors: 10 },
  { month: 'Jul', aum: 18, folios: 27, investors: 10 },
  { month: 'Aug', aum: 23, folios: 27, investors: 10 },
  { month: 'Sep', aum: 28, folios: 26, investors: 11 },
  { month: 'Oct', aum: 34, folios: 24, investors: 12 },
];

const IndustryGrowthSection = () => {
  const [isXlScreen, setIsXlScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXlScreen(window.innerWidth >= 1440);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="bg-[#E9E9EB] py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] font-normal text-[#0A1A3A] mb-4">
              Mutual fund
              <br />
              <span className="text-[#E6AF1C] font-semibold">Industry Growth story</span>
            </h2>

            <p className="text-[#575455] text-[16px] xl:text-[18px] mb-8">
              The Indian Mutual Fund Industry AUM has grown from Rs 1 Lakh crore
              in May 2004 to Rs 75.36 lakh Cr in July 2025 translating into a growth
              of more than 75 times in last 2 decades.
            </p>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className='text-center lg:text-start'>
                <FontAwesomeIcon icon={faHandHoldingUsd} className="text-[#0A1A3A] text-2xl mb-2" />
                <div className="text-[24px] font-normal text-[#E6AF1C] mb-1">₹ Rs 75.36 lakh Cr</div>
                <p className="text-[#575455] text-[14px]">Mutual Fund AUM</p>
              </div>
              <div className='text-center lg:text-start pt-[30px] lg:px-[30px] lg:pt-[0] border-t lg:border-t-0 lg:border-l border-[#D9D9D9]'>
                <FontAwesomeIcon icon={faUserGroup} className="text-[#0A1A3A] text-2xl mb-2" />
                <div className="text-[24px] font-normal text-[#E6AF1C] mb-1">₹ 24.57 Cr.</div>
                <p className="text-[#575455] text-[14px]">MF Folios</p>
              </div>
              <div className='text-center lg:text-start pt-[30px] lg:px-[30px] lg:pt-[0] border-t lg:border-t-0 lg:border-l border-[#D9D9D9]'>
                <FontAwesomeIcon icon={faSackDollar} className="text-[#0A1A3A] text-2xl mb-2" />
                <div className="text-[24px] font-normal text-[#E6AF1C] mb-1">₹ 5.59 Cr.</div>
                <p className="text-[#575455] text-[14px]">Unique Investors</p>
              </div>
            </div>
          </div>

          <div className="">
            <ResponsiveContainer width="100%" height={450}>
              <BarChart data={growthData} barCategoryGap="20%" barGap={1} margin={{ bottom: 20, left: -20 }}>
                <CartesianGrid stroke="#E6AF1C" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tick={{ fontSize: 14, fill: '#64748B' }} tickMargin={25} />
                <YAxis axisLine={false} ticks={[0, 10, 20, 30, 40, 50, 60, 70]} domain={[0, 70]} tick={{ fontSize: 14, fill: '#64748B' }} width={45} />
                <Legend 
                  verticalAlign={isXlScreen ? "top" : "bottom"}
                  align="center"
                  wrapperStyle={{ paddingBottom: isXlScreen ? '32px' : '0', paddingTop: isXlScreen ? '0' : '32px', fontSize: '12px', color: '#191D23' }}
                  iconType="circle"
                  iconSize={8}
                  layout="horizontal"
                  content={(props) => {
                    const { payload } = props;
                    return (
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', fontSize: '12px', color: '#191D23' }}>
                        {payload?.map((entry, index) => (
                          <div key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div
                              style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: entry.color,
                              }}
                            />
                            <span style={{ fontSize: '12px', color: '#191D23' }}>
                              {entry.value === 'aum' ? 'Mutual Fund AUM' : 
                               entry.value === 'folios' ? 'MF Folios' : 
                               'Unique Investors'}
                            </span>
                          </div>
                        ))}
                      </div>
                    );
                  }}
                />
                <Bar dataKey="aum" stackId="a" fill="#E6AF1C" radius={[2, 2, 0, 0]} stroke="#f5f5f5" strokeWidth={1} />
                <Bar dataKey="folios" stackId="a" fill="#01A382" radius={[2, 2, 2, 2]} stroke="#f5f5f5" strokeWidth={1} />
                <Bar dataKey="investors" stackId="a" fill="#0A1A3A" radius={[2, 2, 2, 2]} stroke="#f5f5f5" strokeWidth={1} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryGrowthSection;
