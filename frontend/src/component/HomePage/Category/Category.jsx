import React from 'react';
import Cart from './Cart';
import { FiFeather, FiTool, FiMonitor, FiBriefcase, FiBook, FiTruck, FiTrendingUp, FiUsers } from 'react-icons/fi';


function Category() {
  const categories = [
    { icon: FiFeather, title: 'Agriculture', count: 1254 },
    { icon: FiTool, title: 'Construction', count: 1520 },
    { icon: FiMonitor, title: 'IT & Software', count: 3245 },
    { icon: FiBriefcase, title: 'Commerce', count: 2082 },
    { icon: FiBook, title: 'Education', count: 1496 },
    { icon: FiTruck, title: 'Transport', count: 1244 },
    { icon: FiTrendingUp, title: 'Finance', count: 1529 },
    { icon: FiUsers, title: 'Human Resource', count: 1022 },
  ];

  return (
    <div className="py-16 sm:px-15 px-0 w-full bg-[#ebf5f4] text-center">
      <h1 className="text-4xl font-bold">Browse by Category</h1>
      <p className="opacity-75 text-md mt-3 max-w-3xl mx-auto">
        Discover your next opportunity by exploring jobs in your preferred category and take the first step toward a rewarding career.
      </p>

      {/* Grid of cards */}
      <div className="mt-10 flex px-19 w-full flex-wrap justify-center m-auto gap-6">
        {categories.map((cat, index) => (
          <Cart key={index} icon={cat.icon} title={cat.title} count={cat.count} />
        ))}
      </div>
    </div>
  );
}

export default Category;
