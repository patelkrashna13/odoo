import React from 'react';
import { Download, Filter, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'Jan', industrial: 4000, transport: 2400, household: 2400 },
  { name: 'Feb', industrial: 3000, transport: 1398, household: 2210 },
  { name: 'Mar', industrial: 2000, transport: 9800, household: 2290 },
  { name: 'Apr', industrial: 2780, transport: 3908, household: 2000 },
  { name: 'May', industrial: 1890, transport: 4800, household: 2181 },
  { name: 'Jun', industrial: 2390, transport: 3800, household: 2500 },
];

const Reports = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Reports & Analytics</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Date Range
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Emissions by Source</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="industrial" fill="#059669" name="Industrial" />
                <Bar dataKey="transport" fill="#0284c7" name="Transport" />
                <Bar dataKey="household" fill="#7c3aed" name="Household" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Trend Analysis</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="industrial" stroke="#059669" />
                <Line type="monotone" dataKey="transport" stroke="#0284c7" />
                <Line type="monotone" dataKey="household" stroke="#7c3aed" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Detailed Reports</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emissions (CO2e)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-03-{item}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Industrial</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">245.8</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">+2.4%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Verified
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;