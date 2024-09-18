import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const platforms = [
  { name: 'Home', icon: '🏠', color: 'bg-gray-700', path: '/' },
  { name: 'Google Analytics', icon: 'G', color: 'bg-red-500', path: '/google-analytics' },
  { name: 'Facebook Analytics', icon: 'f', color: 'bg-blue-500', path: '/fb' },
  { name: 'Instagram Analytics', icon: 'Ig', color: 'bg-pink-500', path: '/instagram-analytics' },
  { name: 'LinkedIn Analytics', icon: 'in', color: 'bg-blue-700', path: '/linkedin-analytics' },
  { name: 'Mailchimp Analytics', icon: 'M', color: 'bg-yellow-400', path: '/mailchimp' },
  { name: 'In-Person Meetings', icon: 'IP', color: 'bg-green-600', path: '/events' },
  { name: 'YouTube Analytics', icon: 'Yt', color: 'bg-red-600', path: '/youtube-analytics' },
];

export default function MainLayout({ children }) {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-16 bg-white shadow-lg">
        <nav className="flex flex-col items-center py-4">
          {platforms.map((platform, index) => (
            <Link 
              key={index} 
              to={platform.path} 
              className={`mb-4 p-2 rounded-lg ${platform.color} text-white text-center w-12 h-12 flex items-center justify-center ${location.pathname === platform.path ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
            >
              {platform.icon}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Dashboard</h2>
              <div className="flex items-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-200 ease-in-out transform hover:scale-105">
                  NEED HELP?
                </button>
                <div className="ml-4 relative">
                  <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                    <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/40" alt="User avatar" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
