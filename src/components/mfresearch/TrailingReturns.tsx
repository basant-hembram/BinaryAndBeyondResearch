import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faFileExport } from '@fortawesome/free-solid-svg-icons';

interface FundData {
    schemeName: string;
    launchDate: string;
    aum: string;
    ter: string;
    year1Rtn: string;
    year1Rank: string;
    year3Rtn: string;
    year3Rank: string;
    year5Rtn: string;
    year5Rank: string;
    year10Rtn: string;
    year10Rank: string;
    rtnPercent: string;
    rtnRank: string;
    sinceLaunch: string;
}

const sampleData: FundData[] = [
    {
        schemeName: 'ABSL Flexi Cap Gr Reg',
        launchDate: 'Aug 14, 1998 12:00:00',
        aum: '24,809.74',
        ter: '1.66',
        year1Rtn: '5.08',
        year1Rank: '3',
        year3Rtn: '16.61',
        year3Rank: '12',
        year5Rtn: '16.73',
        year5Rank: '9',
        year10Rtn: '14.95',
        year10Rank: '6',
        rtnPercent: '',
        rtnRank: '',
        sinceLaunch: '21.08'
    },
    {
        schemeName: 'Bandhan Flexi Cap Reg Gr',
        launchDate: 'Sep 14, 2005 12:00:00',
        aum: '7,748.49',
        ter: '1.85',
        year1Rtn: '4.31',
        year1Rank: '5',
        year3Rtn: '14.66',
        year3Rank: '17',
        year5Rtn: '15.69',
        year5Rank: '13',
        year10Rtn: '11.75',
        year10Rank: '17',
        rtnPercent: '',
        rtnRank: '',
        sinceLaunch: '16.34'
    },
    {
        schemeName: 'Canara Robeco Flexi Cap Reg  Gr',
        launchDate: 'Sep 5, 2003 12:00:00',
        aum: '13,927.60',
        ter: '1.68',
        year1Rtn: '1.84',
        year1Rank: '9',
        year3Rtn: '14.27',
        year3Rank: '20',
        year5Rtn: '15.57',
        year5Rank: '15',
        year10Rtn: '14.34',
        year10Rank: '10',
        rtnPercent: '',
        rtnRank: '',
        sinceLaunch: '17.25'
    },
    {
        schemeName: '360 One Flexi Cap Fund Reg GR',
        launchDate: 'Jun 4, 2023 12:00:00',
        aum: '2,113.42',
        ter: '1.99',
        year1Rtn: '-4.95',
        year1Rank: '31',
        year3Rtn: '0',
        year3Rank: '',
        year5Rtn: '0',
        year5Rank: '',
        year10Rtn: '0',
        year10Rank: '',
        rtnPercent: '',
        rtnRank: '',
        sinceLaunch: '17.63'
    }
];

const TrailingReturns = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('1 Year');
    const [searchTerm, setSearchTerm] = useState('');
    const [showEntries, setShowEntries] = useState('10');

    const periods = ['1 Year', '3 Year', '5 Year', '10 year'];

    return (
        <div>
            {/* Header with Search */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-[26px] lg:text-[32px] font-normal text-[#0A1A3A]">
                    Mutual Fund <span className="text-[#E6AF1C] font-semibold">Trailing Returns</span>
                </h1>
                <div className="relative w-80">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 pl-10 border-b border-gray-300 focus:outline-none"
                    />

                </div>
            </div>

            {/* Filters Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
                <div className="md:col-span-3">
                    <label className="block text-teal-500 text-sm font-medium mb-2">Select Category</label>
                    <select className="w-full px-4 py-2.5 border-2 border-[#E6AF1C] rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E6AF1C]">
                        <option>Equity: Flexi Cap</option>
                        <option>Equity: Large Cap</option>
                        <option>Equity: Mid Cap</option>
                    </select>
                </div>

                <div className="md:col-span-3">
                    <label className="block text-teal-500 text-sm font-medium mb-2">Plan Type</label>
                    <select className="w-full px-4 py-2.5 border-2 border-[#E6AF1C] rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E6AF1C]">
                        <option>Regular</option>
                        <option>Direct</option>
                    </select>
                </div>

                <div className="md:col-span-3">
                    <label className="block text-teal-500 text-sm font-medium mb-2">Select Period</label>
                    <select className="w-full px-4 py-2.5 border-2 border-[#E6AF1C] rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E6AF1C]">
                        <option>1 Year</option>
                        <option>3 Years</option>
                        <option>5 Years</option>
                        <option>10 Years</option>
                    </select>
                </div>

                <div className="md:col-span-3 flex items-end gap-2">
                    <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-md font-medium flex items-center justify-center gap-2">
                        Search
                        <FontAwesomeIcon icon={faArrowUp} className="rotate-90" />
                    </button>
                    <button className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-md border border-gray-300 flex items-center gap-2">
                        <FontAwesomeIcon icon={faArrowUp} />
                        Export
                    </button>
                </div>
            </div>

            {/* Show Entries and Period Tabs */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Show</span>
                    <select
                        value={showEntries}
                        onChange={(e) => setShowEntries(e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <span className="text-sm text-gray-600">Entries</span>
                </div>

                <div className="flex gap-8">
                    {periods.map((period) => (
                        <button
                            key={period}
                            onClick={() => setSelectedPeriod(period)}
                            className={`text-sm font-medium pb-2 transition-colors ${selectedPeriod === period
                                    ? 'text-[#E6AF1C] border-b-2 border-[#E6AF1C]'
                                    : 'text-gray-500 hover:text-[#E6AF1C]'
                                }`}
                        >
                            {period}
                        </button>
                    ))}
                </div>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-white border-b border-gray-200">
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">SCHEME NAME</th>
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">LAUNCH DATE</th>
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">AUM<br />(CRORE)</th>
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">TER (%)</th>
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">1YR (%)</th>
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">RANK</th>
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">3YR (%)</th>
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">RANK</th>
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">5YR (%)</th>
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">RANK</th>
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">10YR<br />(%)</th>
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">RANK</th>
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">RTN<br />(%)</th>
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">RANK</th>
                            <th className="px-3 py-3 text-left text-[11px] font-medium text-gray-600 uppercase">SINCE<br />LAUNCH</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...sampleData, ...sampleData, ...sampleData].map((fund, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.schemeName}</td>
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.launchDate}</td>
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.aum}</td>
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.ter}</td>
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.year1Rtn}</td>
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.year1Rank}</td>
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.year3Rtn}</td>
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.year3Rank}</td>
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.year5Rtn}</td>
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.year5Rank}</td>
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.year10Rtn}</td>
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.year10Rank}</td>
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.rtnPercent}</td>
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.rtnRank}</td>
                                <td className="px-3 py-3 text-sm text-gray-700">{fund.sinceLaunch}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TrailingReturns;
