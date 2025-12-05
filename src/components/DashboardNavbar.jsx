import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search, Bell, Settings, User, Menu } from 'lucide-react';

const DashboardNavbar = ({ onMenuClick }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

    return (
        <>
            <nav className="sticky top-0 z-40 px-4 md:px-8 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
                <div className="flex flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={onMenuClick}
                            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden"
                        >
                            <Menu className="w-6 h-6" />
                        </button>

                        {/* Breadcrumbs Removed */}
                        <div className="flex flex-col">
                            <h6 className="font-bold text-gray-800 capitalize mt-1">
                                {pathnames.length > 0 ? pathnames[pathnames.length - 1].replace('-', ' ') : 'Dashboard'}
                            </h6>
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Search className="w-4 h-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Type here..."
                            />
                        </div>



                        <button
                            onClick={() => setIsSettingsOpen(true)}
                            className="text-gray-500 hover:text-gray-700 p-2"
                        >
                            <Settings className="w-4 h-4" />
                        </button>

                        <Link to="/notifications" className="text-gray-500 hover:text-gray-700 relative p-2">
                            <Bell className="w-4 h-4" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Settings Modal */}
            {isSettingsOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 animate-fade-in-up">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-gray-800">Configurator</h3>
                            <button onClick={() => setIsSettingsOpen(false)} className="text-gray-400 hover:text-gray-600">
                                {/* Using a simple X character or importing X icon if available, assuming X is not imported in this file yet */}
                                <span className="text-xl">&times;</span>
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-bold text-gray-600 mb-2">Sidebar Colors</h4>
                                <div className="flex space-x-2">
                                    <button className="w-6 h-6 rounded-full bg-blue-600 ring-2 ring-offset-2 ring-blue-600"></button>
                                    <button className="w-6 h-6 rounded-full bg-gray-800"></button>
                                    <button className="w-6 h-6 rounded-full bg-purple-600"></button>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-600 mb-2">Sidenav Type</h4>
                                <div className="flex space-x-2">
                                    <button className="px-3 py-1 text-xs font-bold text-white bg-gray-800 rounded-lg">Dark</button>
                                    <button className="px-3 py-1 text-xs font-bold text-gray-600 border border-gray-300 rounded-lg">Transparent</button>
                                    <button className="px-3 py-1 text-xs font-bold text-gray-600 border border-gray-300 rounded-lg">White</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Navbar Fixed</span>
                                <input type="checkbox" className="toggle-checkbox" defaultChecked />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DashboardNavbar;
