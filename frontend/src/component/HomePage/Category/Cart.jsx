import React from 'react';

function Cart({ icon: Icon, title, count }) {
  return (
    <div className="bg-white p-15 rounded-xl shadow-sm text-center w-70 hover:shadow-md transition">
      <div className="flex justify-center mb-4 text-gray-700 text-4xl">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="inline-block bg-teal-50 text-teal-600 text-sm font-medium px-4 py-1 rounded-full">
        {count.toLocaleString()} jobs
      </div>
    </div>
  );
}

export default Cart;
