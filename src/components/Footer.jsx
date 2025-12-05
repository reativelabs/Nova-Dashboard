import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 px-4 md:px-8 border-t border-gray-200 bg-white/50 backdrop-blur-sm mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>&copy; 2025 NovaDashboard. All rights reserved.</p>
        <p>
          Created by{' '}
          <a
            href="https://reative.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 font-bold transition-colors"
          >
            Reative
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
