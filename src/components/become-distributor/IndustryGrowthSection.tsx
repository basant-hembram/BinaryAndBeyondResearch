import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const growthData = [
  { year: '2019', domestic: 40, foreign: 20, total: 15 },
  { year: '2020', domestic: 45, foreign: 22, total: 18 },
  { year: '2021', domestic: 50, foreign: 25, total: 20 },
  { year: '2022', domestic: 60, foreign: 28, total: 25 },
  { year: '2023', domestic: 70, foreign: 30, total: 30 },
  { year: '2024', domestic: 80, foreign: 35, total: 35 },
];

const IndustryGrowthSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-0">
            Mutual fund <span className="text-[#E6AF1C]">Industry Growth story</span>
          </h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100">
              Digital of business
            </button>
            <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100">
              Net flow
            </button>
            <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100">
              In Distributors
            </button>
          </div>
        </div>

        <p className="text-gray-600 mb-8">
          The Indian Mutual Fund Industry globally grew from 9bn to 12 Lakh crore
          in just 10 years. By 2030, it is expected to triple these numbers and
          increase to 100 Lakh crores.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#01A382] mb-2">₹36 Lakh Cr</div>
            <p className="text-gray-600">Industry AUM</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#01A382] mb-2">48 AMCs</div>
            <p className="text-gray-600">No. AMCs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#01A382] mb-2">16.6 Crores +</div>
            <p className="text-gray-600">Unique Investors</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Bar dataKey="domestic" stackId="a" fill="#01A382" />
              <Bar dataKey="foreign" stackId="a" fill="#E6AF1C" />
              <Bar dataKey="total" stackId="a" fill="#FF6B6B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default IndustryGrowthSection;
