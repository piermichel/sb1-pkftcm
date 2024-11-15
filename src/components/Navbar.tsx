import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              MarketHub
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <nav className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Explore
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Sell
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Pricing
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart className="h-5 w-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <User className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>

          <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
}