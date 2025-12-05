import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Table, CreditCard, User, LogOut, X, Bell } from 'lucide-react';

import { ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, isCollapsed, toggleCollapse }) => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        { icon: Table, label: 'Tables', path: '/tables' },
        { icon: CreditCard, label: 'Billing', path: '/billing' },
        { icon: Bell, label: 'Notifications', path: '/notifications' },
        { icon: User, label: 'Profile', path: '/profile' },
    ];

    return (
        <aside className={`fixed inset-y-0 left-0 z-50 bg-white shadow-xl transition-all duration-300 ease-in-out flex flex-col
            ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
            lg:translate-x-0 lg:static lg:inset-0 
            ${isCollapsed ? 'w-20' : 'w-64'}`
        }>
            <div className={`flex items-center h-20 border-b border-gray-100 flex-shrink-0 ${isCollapsed ? 'justify-center px-0' : 'justify-between px-6'}`}>
                <div className="flex items-center gap-2 overflow-hidden">
                    <img src="/favicon.svg" alt="Logo" className="w-8 h-8 flex-shrink-0" />
                    {!isCollapsed && (
                        <h1 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                            Nova<span className="text-blue-600">Dashboard</span>
                        </h1>
                    )}
                </div>
            </div>

            <nav className="flex-1 px-4 py-6 overflow-y-auto">
                <div className="space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={onClose}
                            title={isCollapsed ? item.label : ''}
                            className={`flex items-center py-3 text-sm font-medium rounded-lg transition-colors duration-200 
                                ${isCollapsed ? 'justify-center px-2' : 'px-4'}
                                ${isActive(item.path)
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <item.icon className={`w-5 h-5 flex-shrink-0 ${!isCollapsed && 'mr-3'} ${isActive(item.path) ? 'text-blue-600' : 'text-gray-400'}`} />
                            {!isCollapsed && <span>{item.label}</span>}
                        </Link>
                    ))}
                </div>

                <div className="mt-8">
                    {!isCollapsed && (
                        <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Account Pages
                        </h3>
                    )}
                    <div className={`space-y-2 ${isCollapsed ? 'mt-4' : ''}`}>
                        <Link
                            to="/sign-in"
                            onClick={onClose}
                            title={isCollapsed ? 'Sign In' : ''}
                            className={`flex items-center py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200
                                ${isCollapsed ? 'justify-center px-2' : 'px-4'}`}
                        >
                            <LogOut className={`w-5 h-5 flex-shrink-0 text-gray-400 ${!isCollapsed && 'mr-3'}`} />
                            {!isCollapsed && <span>Sign In</span>}
                        </Link>
                        <Link
                            to="/sign-up"
                            onClick={onClose}
                            title={isCollapsed ? 'Sign Up' : ''}
                            className={`flex items-center py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200
                                ${isCollapsed ? 'justify-center px-2' : 'px-4'}`}
                        >
                            <User className={`w-5 h-5 flex-shrink-0 text-gray-400 ${!isCollapsed && 'mr-3'}`} />
                            {!isCollapsed && <span>Sign Up</span>}
                        </Link>
                        <Link
                            to="/sign-in"
                            onClick={onClose}
                            title={isCollapsed ? 'Logout' : ''}
                            className={`flex items-center py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200
                                ${isCollapsed ? 'justify-center px-2' : 'px-4'}`}
                        >
                            <LogOut className={`w-5 h-5 flex-shrink-0 text-gray-400 ${!isCollapsed && 'mr-3'}`} />
                            {!isCollapsed && <span>Logout</span>}
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="p-4 border-t border-gray-100 hidden lg:block">
                <button
                    onClick={toggleCollapse}
                    className={`flex items-center w-full py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200
                        ${isCollapsed ? 'justify-center' : 'px-4'}`}
                >
                    {isCollapsed ? (
                        <ChevronRight className="w-5 h-5" />
                    ) : (
                        <>
                            <ChevronLeft className="w-5 h-5 mr-3" />
                            <span>Collapse Sidebar</span>
                        </>
                    )}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
