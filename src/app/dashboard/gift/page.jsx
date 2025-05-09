'use client';

import React, { useState } from 'react';

function GiftPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const giftCards = [
    { id: 1, name: 'Amazon', value: 50, discount: '5%', image: '🛍️' },
    { id: 2, name: 'Apple Store', value: 100, discount: '3%', image: '🍎' },
    { id: 3, name: 'Netflix', value: 25, discount: '2%', image: '🎬' },
    { id: 4, name: 'Steam', value: 20, discount: '4%', image: '🎮' },
    { id: 5, name: 'Spotify', value: 15, discount: '3%', image: '🎵' },
    { id: 6, name: 'Xbox', value: 50, discount: '4%', image: '🎯' },
  ];

  return (
    <div className="space-y-6">
      {/* Gift Balance Overview */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Gift Balance</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">$250.00</p>
          <div className="mt-4 flex items-center text-sm text-blue-600">
            <span>Available for gifts</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Total Saved</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">$45.30</p>
          <div className="mt-4 flex items-center text-sm text-gray-600">
            <span>From gift card discounts</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Gift Cards Purchased</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
          <div className="mt-4 flex items-center text-sm text-blue-600">
            <span>This month</span>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto py-2">
        {['all', 'shopping', 'entertainment', 'gaming'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-blue1 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Gift Cards Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {giftCards.map((card) => (
          <div key={card.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{card.image}</span>
              <span className="text-green-600 font-medium">{card.discount} OFF</span>
            </div>
            <h3 className="font-medium text-lg">{card.name}</h3>
            <p className="text-gray-500 mt-1">${card.value} Value</p>
            <button className="w-full mt-4 py-2 bg-blue1 text-white rounded-lg hover:bg-blue2 transition-colors">
              Purchase Card
            </button>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="p-4 bg-blue1 text-white rounded-xl hover:bg-blue2 transition-colors">
          Send Gift Card
        </button>
        <button className="p-4 bg-white text-blue1 border border-blue1 rounded-xl hover:bg-blue-50 transition-colors">
          Redeem Code
        </button>
        <button className="p-4 bg-white text-blue1 border border-blue1 rounded-xl hover:bg-blue-50 transition-colors">
          Gift History
        </button>
        <button className="p-4 bg-white text-blue1 border border-blue1 rounded-xl hover:bg-blue-50 transition-colors">
          Bulk Purchase
        </button>
      </div>
    </div>
  );
}

export default GiftPage;