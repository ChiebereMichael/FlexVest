'use client';

import { useState } from 'react';

function InvestmentPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M');

  const investmentOptions = [
    { id: 1, name: 'High-Yield Savings', riskLevel: 'Low', returns: '12% APY', minAmount: 100 },
    { id: 2, name: 'Fixed Income', riskLevel: 'Medium', returns: '15% APY', minAmount: 500 },
    { id: 3, name: 'Stock Index', riskLevel: 'High', returns: '20% APY', minAmount: 1000 },
  ];

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Total Investment</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">$15,750.00</p>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <span>+22.4% all time</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Total Returns</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">+$3,245.50</p>
          <div className="mt-4 flex items-center text-sm text-gray-600">
            <span>Last updated: Today</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Active Investments</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">4</p>
          <div className="mt-4 flex items-center text-sm text-blue-600">
            <span>2 Pending</span>
          </div>
        </div>
      </div>

      {/* Timeframe Selector */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex gap-2">
          {['1W', '1M', '3M', '6M', '1Y', 'ALL'].map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setSelectedTimeframe(timeframe)}
              className={`px-4 py-2 rounded-lg text-sm ${
                selectedTimeframe === timeframe
                  ? 'bg-blue1 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>

      {/* Investment Options */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6">Available Investment Options</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {investmentOptions.map((option) => (
            <div key={option.id} className="p-4 border rounded-lg hover:border-blue1 transition-colors">
              <h3 className="font-medium text-lg">{option.name}</h3>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Risk Level</span>
                  <span className={`font-medium ${
                    option.riskLevel === 'Low' ? 'text-green-600' :
                    option.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                  }`}>{option.riskLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Returns</span>
                  <span className="font-medium text-green-600">{option.returns}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Min. Amount</span>
                  <span className="font-medium">${option.minAmount}</span>
                </div>
              </div>
              <button className="w-full mt-4 py-2 bg-blue1 text-white rounded-lg hover:bg-blue2 transition-colors">
                Invest Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="p-4 bg-blue1 text-white rounded-xl hover:bg-blue2 transition-colors">
          Add Funds
        </button>
        <button className="p-4 bg-white text-blue1 border border-blue1 rounded-xl hover:bg-blue-50 transition-colors">
          Withdraw
        </button>
        <button className="p-4 bg-white text-blue1 border border-blue1 rounded-xl hover:bg-blue-50 transition-colors">
          Auto-Invest
        </button>
        <button className="p-4 bg-white text-blue1 border border-blue1 rounded-xl hover:bg-blue-50 transition-colors">
          View History
        </button>
      </div>
    </div>
  );
}

export default InvestmentPage;