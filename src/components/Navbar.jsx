import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-transparent absolute top-0 left-0 z-50">
      <Link to="/" className="text-2xl font-bold text-gray-800">
        Nova<span className="text-blue-600">Dashboard</span>
      </Link>
      <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
        Back to Dashboard
      </Link>
    </nav>
  );
};

export default Navbar;
