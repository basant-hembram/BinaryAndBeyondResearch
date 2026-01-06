import { useState, useMemo, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
    const [currentPage, setCurrentPage] = useState(1);

    const periods = ['1 Year', '3 Year', '5 Year', '10 year'];

    // Generate more sample data for testing
    const allData = useMemo(() => {
        const multipliedData = [];
        for (let i = 0; i < 20; i++) {
            multipliedData.push(...sampleData);
        }
        return multipliedData;
    }, []);

    // Filter data based on search and period
    const filteredData = useMemo(() => {
        let filtered = allData;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(fund =>
                fund.schemeName.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by period - showing only funds with data for selected period
        if (selectedPeriod === '3 Year') {
            filtered = filtered.filter(fund => fund.year3Rtn && fund.year3Rtn !== '0');
        } else if (selectedPeriod === '5 Year') {
            filtered = filtered.filter(fund => fund.year5Rtn && fund.year5Rtn !== '0');
        } else if (selectedPeriod === '10 year') {
            filtered = filtered.filter(fund => fund.year10Rtn && fund.year10Rtn !== '0');
        }

        return filtered;
    }, [allData, searchTerm, selectedPeriod]);

    // Calculate pagination
    const entriesPerPage = parseInt(showEntries);
    const totalPages = Math.ceil(filteredData.length / entriesPerPage);
    
    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedPeriod, showEntries]);

    // Get current page data
    const currentPageData = useMemo(() => {
        const startIndex = (currentPage - 1) * entriesPerPage;
        const endIndex = startIndex + entriesPerPage;
        return filteredData.slice(startIndex, endIndex);
    }, [filteredData, currentPage, entriesPerPage]);

    const renderPaginationButtons = () => {
        const buttons = [];
        const showEllipsisStart = currentPage > 3;
        const showEllipsisEnd = currentPage < totalPages - 2;

        // Previous button
        buttons.push(
            <button
                key="prev"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm text-gray-600 hover:text-[#01A382] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
            </button>
        );

        // First page
        buttons.push(
            <button
                key={1}
                onClick={() => setCurrentPage(1)}
                className={`px-3 py-2 text-sm rounded ${currentPage === 1
                    ? 'bg-[#01A382] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
                1
            </button>
        );

        // Second page (if not current)
        if (totalPages > 1) {
            buttons.push(
                <button
                    key={2}
                    onClick={() => setCurrentPage(2)}
                    className={`px-3 py-2 text-sm rounded ${currentPage === 2
                        ? 'bg-[#01A382] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                    2
                </button>
            );
        }

        // Third page (if not current)
        if (totalPages > 2) {
            buttons.push(
                <button
                    key={3}
                    onClick={() => setCurrentPage(3)}
                    className={`px-3 py-2 text-sm rounded ${currentPage === 3
                        ? 'bg-[#01A382] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                    3
                </button>
            );
        }

        // Ellipsis start
        if (showEllipsisStart) {
            buttons.push(
                <span key="ellipsis-start" className="px-3 py-2 text-gray-600">
                    ...
                </span>
            );
        }

        // Ellipsis end
        if (showEllipsisEnd) {
            buttons.push(
                <span key="ellipsis-end" className="px-3 py-2 text-gray-600">
                    ...
                </span>
            );
        }

        // Second to last page
        if (totalPages > 3) {
            buttons.push(
                <button
                    key={totalPages - 1}
                    onClick={() => setCurrentPage(totalPages - 1)}
                    className={`px-3 py-2 text-sm rounded ${currentPage === totalPages - 1
                        ? 'bg-[#01A382] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                    {totalPages - 1}
                </button>
            );
        }

        // Last page
        if (totalPages > 1) {
            buttons.push(
                <button
                    key={totalPages}
                    onClick={() => setCurrentPage(totalPages)}
                    className={`px-3 py-2 text-sm rounded ${currentPage === totalPages
                        ? 'bg-[#01A382] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                    {totalPages}
                </button>
            );
        }

        // Next button
        buttons.push(
            <button
                key="next"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm text-gray-600 hover:text-[#01A382] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
            >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        );

        return buttons;
    };

    return (
        <div>
            {/* Header with Search */}
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
                <h1 className="text-[26px] lg:text-[32px] font-normal text-[#0A1A3A]">
                    Mutual Fund <span className="text-[#E6AF1C] font-semibold">Trailing Returns</span>
                </h1>
                <div className="relative w-full lg:w-80 mt-[24px] lg:mt-0">
                    <svg className="absolute right-3 left-auto xl:right:auto xl:left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 xl:pl-10 border-b border-gray-300 focus:outline-none"
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

                <div className="md:col-span-3 flex justify-center items-end gap-2">
                    <button className="bg-[#01A382] hover:bg-teal-600 text-white px-6 py-2.5 rounded-md font-medium flex items-center justify-center gap-2">
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
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                <div className="flex items-center gap-2 mb-[20px] lg:mb-0">
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
                        {currentPageData.length > 0 ? (
                            currentPageData.map((fund, index) => (
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
                            ))
                        ) : (
                            <tr>
                                <td colSpan={15} className="px-3 py-8 text-center text-gray-500">
                                    No funds found matching your criteria
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Info and Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
                <div className="text-sm text-gray-600">
                    Showing {currentPageData.length > 0 ? ((currentPage - 1) * entriesPerPage + 1) : 0} to {Math.min(currentPage * entriesPerPage, filteredData.length)} of {filteredData.length} entries
                </div>
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2">
                        {renderPaginationButtons()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrailingReturns;
