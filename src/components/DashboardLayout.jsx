
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardNavbar from './DashboardNavbar';
import Footer from './Footer';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div className="h-screen bg-gray-50 flex overflow-hidden">
            {/* Sidebar Overlay for Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={closeSidebar}
                ></div>
            )}

            <Sidebar
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
                isCollapsed={isCollapsed}
                toggleCollapse={toggleCollapse}
            />

            <main className="flex-1 flex flex-col min-w-0 transition-all duration-300 h-full lg:ml-0">
                <DashboardNavbar onMenuClick={toggleSidebar} />
                <div className="flex-1 overflow-y-auto flex flex-col">
                    <div className="flex-1 p-4 md:p-8">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
