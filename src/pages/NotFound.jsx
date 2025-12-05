import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-bold text-blue-600 opacity-20">404</h1>
            <div className="-mt-12 relative z-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all transform hover:-translate-y-0.5"
                >
                    <Home className="w-5 h-5 mr-2" />
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
