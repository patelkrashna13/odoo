import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Factory, Car, Home, Cloud } from 'lucide-react';

const data = [
  { name: 'Jan', emissions: 4000 },
  { name: 'Feb', emissions: 3000 },
  { name: 'Mar', emissions: 2000 },
  { name: 'Apr', emissions: 2780 },
  { name: 'May', emissions: 1890 },
  { name: 'Jun', emissions: 2390 },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Carbon Emissions Dashboard</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Export Report
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Filter Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: 'Industrial',
            value: '245.8',
            change: '+12.5%',
            icon: Factory,
            positive: false,
          },
          {
            title: 'Transportation',
            value: '156.2',
            change: '-8.3%',
            icon: Car,
            positive: true,
          },
          {
            title: 'Household',
            value: '98.4',
            change: '+5.2%',
            icon: Home,
            positive: false,
          },
          {
            title: 'Total Emissions',
            value: '500.4',
            change: '+2.4%',
            icon: Cloud,
            positive: false,
          },
        ].map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <stat.icon className="h-8 w-8 text-gray-400" />
            </div>
            <div className="flex items-center mt-4">
              {stat.positive ? (
                <ArrowDownRight className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowUpRight className="h-4 w-4 text-red-500" />
              )}
              <span className={stat.positive ? 'text-green-500' : 'text-red-500'}>
                {stat.change}
              </span>
              <span className="text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Emissions Trend</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="emissions" fill="#059669" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;