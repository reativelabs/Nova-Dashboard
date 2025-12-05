import React from 'react';
import { Link } from 'react-router-dom';
import { Users, DollarSign, ShoppingBag, Activity, ArrowUpRight, ArrowDownRight, X } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import StatsCard from '../components/StatsCard';
import Card from '../components/Card';

const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 },
    { name: 'Aug', sales: 4000 },
    { name: 'Sep', sales: 3000 },
    { name: 'Oct', sales: 5000 },
    { name: 'Nov', sales: 4000 },
    { name: 'Dec', sales: 6000 },
];

const trafficData = [
    { name: 'Direct', visits: 4000 },
    { name: 'Social', visits: 3000 },
    { name: 'Organic', visits: 2000 },
    { name: 'Referral', visits: 2780 },
];

const projectsData = [
    { name: 'Nova Dashboard', budget: '$14,000', status: 'Working', completion: 60 },
    { name: 'Add Progress Track', budget: '$3,000', status: 'Canceled', completion: 10 },
    { name: 'Fix Platform Errors', budget: 'Not set', status: 'Done', completion: 100 },
    { name: 'Launch our Mobile App', budget: '$32,000', status: 'Done', completion: 100 },
    { name: 'Add the New Pricing Page', budget: '$400', status: 'Working', completion: 25 },
];

const Dashboard = () => {
    const [activeModal, setActiveModal] = React.useState(null);

    const openModal = (modalName) => setActiveModal(modalName);
    const closeModal = () => setActiveModal(null);

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Total Revenue"
                    value="$53,000"
                    icon={DollarSign}
                    trend="up"
                    trendValue="55%"
                    color="blue"
                />
                <StatsCard
                    title="New Users"
                    value="2,300"
                    icon={Users}
                    trend="up"
                    trendValue="3%"
                    color="green"
                />
                <StatsCard
                    title="New Clients"
                    value="+3,462"
                    icon={ShoppingBag}
                    trend="down"
                    trendValue="-2%"
                    color="orange"
                />
                <StatsCard
                    title="Sales"
                    value="$103,430"
                    icon={Activity}
                    trend="up"
                    trendValue="+5%"
                    color="purple"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-800">Sales Overview</h3>
                        <button
                            onClick={() => openModal('sales')}
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                            View Report
                        </button>
                    </div>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0056b3" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#0056b3" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ color: '#1f2937' }}
                                />
                                <Area type="monotone" dataKey="sales" stroke="#0056b3" fillOpacity={1} fill="url(#colorSales)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-800">Traffic Source</h3>
                    </div>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={trafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <Tooltip
                                    cursor={{ fill: '#f3f4f6' }}
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="visits" fill="#0288d1" radius={[4, 4, 0, 0]} barSize={30} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>

            {/* Recent Projects Table */}
            <Card>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-800">Recent Projects</h3>
                    <button
                        onClick={() => openModal('projects')}
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                        View All
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left border-b border-gray-100">
                                <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Project</th>
                                <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Budget</th>
                                <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Completion</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {projectsData.map((project, index) => (
                                <tr key={index}>
                                    <td className="py-4 text-sm font-medium text-gray-800">{project.name}</td>
                                    <td className="py-4 text-sm text-gray-600">{project.budget}</td>
                                    <td className="py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${project.status === 'Done' ? 'bg-green-100 text-green-800' :
                                            project.status === 'Canceled' ? 'bg-red-100 text-red-800' :
                                                'bg-blue-100 text-blue-800'
                                            }`}>
                                            {project.status}
                                        </span>
                                    </td>
                                    <td className="py-4">
                                        <div className="flex items-center">
                                            <span className="text-sm text-gray-600 mr-2">{project.completion}%</span>
                                            <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${project.completion === 100 ? 'bg-green-500' : 'bg-blue-500'
                                                        }`}
                                                    style={{ width: `${project.completion}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>


            {/* Sales Report Modal */}
            {
                activeModal === 'sales' && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl p-6 animate-fade-in-up max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-gray-800">Sales Overview - Expanded View</h3>
                                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="h-96 w-full mb-6">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorSalesExpanded" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#0056b3" stopOpacity={0.8} />
                                                <stop offset="95%" stopColor="#0056b3" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                            itemStyle={{ color: '#1f2937' }}
                                        />
                                        <Area type="monotone" dataKey="sales" stroke="#0056b3" fillOpacity={1} fill="url(#colorSalesExpanded)" strokeWidth={3} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left border-b border-gray-100">
                                            <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Month</th>
                                            <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Sales</th>
                                            <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Growth</th>
                                            <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Target</th>
                                            <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Variance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {salesData.map((item, index) => (
                                            <tr key={index}>
                                                <td className="py-3 text-sm font-medium text-gray-800">{item.name}</td>
                                                <td className="py-3 text-sm text-gray-600">${item.sales.toLocaleString()}</td>
                                                <td className="py-3 text-sm text-green-600 font-medium">+{(Math.random() * 10).toFixed(1)}%</td>
                                                <td className="py-3 text-sm text-gray-600">$5,000</td>
                                                <td className={`py-3 text-sm font-medium ${item.sales >= 5000 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {item.sales >= 5000 ? '+' : ''}${(item.sales - 5000).toLocaleString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Recent Projects Modal */}
            {
                activeModal === 'projects' && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl p-6 animate-fade-in-up max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-gray-800">All Projects - Expanded View</h3>
                                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left border-b border-gray-100">
                                            <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Project</th>
                                            <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Budget</th>
                                            <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                                            <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Completion</th>
                                            <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Client</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {[
                                            ...projectsData,
                                            { name: 'Redesign Website', budget: '$5,000', status: 'Working', completion: 40, client: 'TechCorp' },
                                            { name: 'SEO Optimization', budget: '$2,000', status: 'Done', completion: 100, client: 'Marketing Inc' },
                                            { name: 'Mobile App V2', budget: '$25,000', status: 'Working', completion: 15, client: 'AppStudio' },
                                            { name: 'Database Migration', budget: '$8,000', status: 'Canceled', completion: 5, client: 'DataSystems' },
                                            { name: 'AI Integration', budget: '$50,000', status: 'Working', completion: 60, client: 'FutureTech' },
                                            { name: 'Cloud Migration', budget: '$12,000', status: 'Working', completion: 30, client: 'CloudNet' },
                                            { name: 'Security Audit', budget: '$4,500', status: 'Done', completion: 100, client: 'SecureIT' },
                                            { name: 'User Testing', budget: '$1,500', status: 'Done', completion: 100, client: 'UXLabs' },
                                            { name: 'API Development', budget: '$9,000', status: 'Working', completion: 75, client: 'DevConnect' },
                                            { name: 'Legacy Code Refactor', budget: '$6,000', status: 'Canceled', completion: 20, client: 'OldSys' },
                                        ].map((project, index) => (
                                            <tr key={index}>
                                                <td className="py-4 text-sm font-medium text-gray-800">{project.name}</td>
                                                <td className="py-4 text-sm text-gray-600">{project.budget}</td>
                                                <td className="py-4">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${project.status === 'Done' ? 'bg-green-100 text-green-800' :
                                                        project.status === 'Canceled' ? 'bg-red-100 text-red-800' :
                                                            'bg-blue-100 text-blue-800'
                                                        }`}>
                                                        {project.status}
                                                    </span>
                                                </td>
                                                <td className="py-4">
                                                    <div className="flex items-center">
                                                        <span className="text-sm text-gray-600 mr-2">{project.completion}%</span>
                                                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                            <div
                                                                className={`h-full rounded-full ${project.completion === 100 ? 'bg-green-500' : 'bg-blue-500'
                                                                    }`}
                                                                style={{ width: `${project.completion}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-4 text-sm text-gray-600">{project.client || 'Internal'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Dashboard;
