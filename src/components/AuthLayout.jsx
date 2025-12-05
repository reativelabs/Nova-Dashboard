import React from 'react';
import Navbar from './Navbar'; // Re-using the original Navbar for now, or we can create a simplified AuthNavbar
const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* We might want a simplified header here or just centered content */}
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
