import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password?</h1>
                <p className="text-gray-500">Enter your email to reset your password</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            placeholder="name@company.com"
                        />
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all transform hover:-translate-y-0.5">
                        Reset Password
                    </button>
                </form>

                <p className="mt-8 text-center text-sm text-gray-600">
                    Remember your password? <Link to="/sign-in" className="font-bold text-blue-600 hover:text-blue-500">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
