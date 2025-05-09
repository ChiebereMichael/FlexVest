'use client';

import { useState } from 'react';

function SavingsPage() {
  const savingsPlans = [
    { id: 1, name: 'Emergency Fund', target: 10000, current: 7500, deadline: '2024-06-30' },
    { id: 2, name: 'Vacation', target: 5000, current: 2300, deadline: '2024-08-15' },
    { id: 3, name: 'New Laptop', target: 2000, current: 800, deadline: '2024-04-01' }
  ];

  return (
    <div className="space-y-6">
      {/* Savings Overview */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Total Savings</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">$10,600.00</p>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <span>+8.2% this month</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Interest Earned</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">$320.50</p>
          <div className="mt-4 flex items-center text-sm text-blue-600">
            <span>12% APY</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Next Payout</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">15 Days</p>
          <div className="mt-4 flex items-center text-sm text-gray-600">
            <span>Est. $45.20</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="p-4 bg-blue1 text-white rounded-xl hover:bg-blue2 transition-colors">
          New Savings Plan
        </button>
        <button className="p-4 bg-white text-blue1 border border-blue1 rounded-xl hover:bg-blue-50 transition-colors">
          Add Money
        </button>
        <button className="p-4 bg-white text-blue1 border border-blue1 rounded-xl hover:bg-blue-50 transition-colors">
          Withdraw
        </button>
        <button className="p-4 bg-white text-blue1 border border-blue1 rounded-xl hover:bg-blue-50 transition-colors">
          Set Auto-Save
        </button>
      </div>

      {/* Savings Plans */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6">Your Savings Plans</h2>
        <div className="space-y-4">
          {savingsPlans.map((plan) => {
            const progress = (plan.current / plan.target) * 100;
            return (
              <div key={plan.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{plan.name}</h3>
                    <p className="text-sm text-gray-500">
                      Target Date: {new Date(plan.deadline).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-right">
                    <span className="font-medium">${plan.current}</span>
                    <span className="text-gray-500">/${plan.target}</span>
                  </p>
                </div>
                <div className="relative pt-1">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-blue1 rounded-full" 
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{progress.toFixed(1)}% completed</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SavingsPage;