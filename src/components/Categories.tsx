import React from 'react';
import { Code, Palette, BarChart, Zap, BookOpen, ShoppingBag } from 'lucide-react';

export default function Categories() {
  const categories = [
    { icon: Code, name: 'Development', count: '2,345' },
    { icon: Palette, name: 'Design', count: '1,876' },
    { icon: BarChart, name: 'Marketing', count: '1,543' },
    { icon: Zap, name: 'Automation', count: '987' },
    { icon: BookOpen, name: 'Education', count: '2,198' },
    { icon: ShoppingBag, name: 'E-commerce', count: '1,234' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of digital products across various categories
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map(({ icon: Icon, name, count }) => (
            <div
              key={name}
              className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{name}</h3>
              <span className="text-sm text-gray-500">{count} products</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}