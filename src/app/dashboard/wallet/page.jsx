'use client';

import { useState } from 'react';

function WalletPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const transactions = [
    { id: 1, type: 'credit', amount: 500.00, description: 'Salary Deposit', date: '2024-01-15', status: 'completed' },
    { id: 2, type: 'debit', amount: 50.00, description: 'Grocery Shopping', date: '2024-01-14', status: 'completed' },
    { id: 3, type: 'credit', amount: 200.00, description: 'Freelance Payment', date: '2024-01-13', status: 'pending' },
    { id: 4, type: 'debit', amount: 30.00, description: 'Netflix Subscription', date: '2024-01-12', status: 'completed' },
  ];

  return (
    <div className="space-y-6">
      {/* Balance Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Available Balance</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">$2,450.50</p>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <span>+15.3% from last month</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Add Money', 'Withdraw', 'Send Money', 'Receive'].map((action) => (
          <button
            key={action}
            className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-2"
          >
            <span className="text-blue1">{action}</span>
          </button>
        ))}
      </div>

      {/* Transactions Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <div className="flex gap-2">
            {['all', 'credit', 'debit'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  selectedFilter === filter
                    ? 'bg-blue1 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {transaction.type === 'credit' ? '↓' : '↑'}
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${
                  transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500 capitalize">{transaction.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WalletPage;