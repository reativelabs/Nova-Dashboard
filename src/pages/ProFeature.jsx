import React from 'react';
import { Link } from 'react-router-dom';

const ProFeature = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
            <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-blue-100">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Pro Feature</h1>
                <p className="text-lg text-gray-600 mb-8">
                    This page is available in the Pro version of NovaDashboard. Upgrade now to access all pages, features, and components.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://reative.org/product/nova-dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Upgrade to Pro
                    </a>
                    <Link
                        to="/"
                        className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProFeature;
