'use client';

import { useState } from 'react';

function LearnPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Investment Basics',
      level: 'Beginner',
      duration: '2 hours',
      progress: 75,
      image: '📈'
    },
    {
      id: 2,
      title: 'Smart Saving Strategies',
      level: 'Intermediate',
      duration: '1.5 hours',
      progress: 30,
      image: '💰'
    },
    {
      id: 3,
      title: 'Understanding Stock Markets',
      level: 'Advanced',
      duration: '3 hours',
      progress: 0,
      image: '📊'
    },
    {
      id: 4,
      title: 'Personal Budgeting',
      level: 'Beginner',
      duration: '1 hour',
      progress: 100,
      image: '📝'
    }
  ];

  const articles = [
    { id: 1, title: 'How to Beat Inflation', readTime: '5 min', tag: 'Featured' },
    { id: 2, title: 'Understanding Interest Rates', readTime: '3 min', tag: 'New' },
    { id: 3, title: 'Investment Risk Management', readTime: '7 min', tag: 'Popular' }
  ];

  return (
    <div className="space-y-6">
      {/* Learning Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Courses Completed</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">4/12</p>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <span>33% Complete</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Learning Hours</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">7.5</p>
          <div className="mt-4 flex items-center text-sm text-blue-600">
            <span>This month</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Certificates</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">2</p>
          <div className="mt-4 flex items-center text-sm text-blue-600">
            <span>View all →</span>
          </div>
        </div>
      </div>

      {/* Course Categories */}
      <div className="flex gap-2 overflow-x-auto py-2">
        {['all', 'investing', 'saving', 'budgeting', 'stocks'].map((category) => (
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

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-3xl mb-4 block">{course.image}</span>
                <h3 className="font-medium text-lg">{course.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm text-gray-500">{course.level}</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="relative pt-1">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue1 rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 mt-1">{course.progress}% Complete</span>
              </div>
            </div>
            <button className="w-full mt-4 py-2 bg-blue1 text-white rounded-lg hover:bg-blue2 transition-colors">
              {course.progress === 0 ? 'Start Course' : 'Continue Learning'}
            </button>
          </div>
        ))}
      </div>

      {/* Recent Articles */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Articles</h2>
        <div className="space-y-4">
          {articles.map((article) => (
            <div key={article.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div>
                <h3 className="font-medium">{article.title}</h3>
                <p className="text-sm text-gray-500">{article.readTime} read</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue1 rounded-full text-sm">
                {article.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearnPage;