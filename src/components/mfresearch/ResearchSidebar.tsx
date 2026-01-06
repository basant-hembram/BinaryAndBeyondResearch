import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  id: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { id: 'trailing-returns', label: 'Mutual Fund Trailing Returns' },
  { id: 'annual-returns', label: 'Mutual Fund Annual Returns' },
  { id: 'best-performing', label: 'Best Performing Funds - AMC Wise' },
  { id: 'quartile-ranking', label: 'Mutual Fund Quartile Ranking' },
  { id: 'volatility-ranking', label: 'Mutual Fund Volatility Ranking' },
  { id: 'category-monitor', label: 'Mutual Fund Category Monitor' },
  { id: 'sip-returns', label: 'Mutual Fund SIP Returns' },
  { id: 'ppf-elss', label: 'PPF vs ELSS' },
  { id: 'funds-calculator', label: 'Mutual Funds Sip Calculator' },
  { id: 'stp-calculator', label: 'Mutual Fund STP Calculator' },
  { id: 'top-swp', label: 'Top SWP Funds' },
  { id: 'lumpsum-returns', label: 'Mutual Fund Lumpsum Returns' },
  { id: 'category-returns', label: 'Mutual Fund Category Returns' },
  { id: 'market-capture', label: 'Market Capture Ratio' },
  { id: 'dividend-fund', label: 'Highest Dividend Paying Fund' },
  { id: 'category-dividends', label: 'Category Dividends' },
  { id: 'swp-calculator', label: 'SWP Return Calculator' },
  { id: 'fund-information', label: 'Mutual Fund Information' },
  { id: 'lumpsum-calculator', label: 'LumpSum Return Calculator' },
  { id: 'rolling-category', label: 'Rolling Return Category' },
  { id: 'rolling-benchmark', label: 'Rolling Return Benchmark' }
];

const ResearchSidebar = () => {
  const [activeItem, setActiveItem] = useState('trailing-returns');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#F6F8F9] py-[16px] px-[14px] rounded-[5px] xl:rounded-[0px] border border-[#E6AF1C] xl:border-r xl:border-[#E5E9EB] overflow-hidden">
      {/* Header */}
      <div className="lg:py-[8px] xl:mb-[14px] xl:border-b xl:border-[#E6AF1C] lg:py-3 lg:px-[8px] xl:px-0 flex items-center justify-between">
        <h2 className="text-[16px] text-[#0A1A3A]">
          Mutual Funds <span className="text-[#E6AF1C] font-semibold">Research Menu</span>
        </h2>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#E6AF1C] hover:text-[#d49a15] transition-colors xl:hidden"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Menu Items */}
      <div className={`${isMenuOpen ? 'mt-[10px] xl:mt-0 block' : 'xl:block hidden'}`}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`w-full py-3 text-left text-[14px] transition-colors border-t rounded-[5px] border-[#E5E9EB] first:border-t-0 ${
              activeItem === item.id
                ? 'bg-[#01A382] px-6 text-white font-medium'
                : 'text-[#0A1A3A] hover:bg-gray-50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResearchSidebar;
