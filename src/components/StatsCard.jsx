import React from 'react';
import Card from './Card';

const StatsCard = ({ title, value, icon: Icon, trend, trendValue, color = 'blue' }) => {
    const colorClasses = {
        blue: 'bg-blue-50 text-blue-600',
        green: 'bg-green-50 text-green-600',
        purple: 'bg-purple-50 text-purple-600',
        orange: 'bg-orange-50 text-orange-600',
    };

    return (
        <Card>
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
                    {trend && (
                        <p className={`text-sm mt-2 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            <span className="font-medium">
                                {trend === 'up' ? '+' : ''}{trendValue}
                            </span>
                            <span className="text-gray-400 ml-1">since last month</span>
                        </p>
                    )}
                </div>
                <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
                    <Icon className="w-6 h-6" />
                </div>
            </div>
        </Card>
    );
};

export default StatsCard;
