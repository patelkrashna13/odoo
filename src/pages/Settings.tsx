import React from 'react';
import { Bell, Shield, Database, Globe, User, Mail } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Save Changes
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Account Settings</h2>
          <p className="text-sm text-gray-600">Manage your account preferences and settings</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <User className="h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Bell className="h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <label className="block text-sm font-medium text-gray-700">Notifications</label>
                  </div>
                  <div className="mt-4 space-y-4">
                    {[
                      'Email notifications for high emissions',
                      'Weekly report summaries',
                      'AI insights and recommendations',
                      'System updates and maintenance',
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label className="text-gray-700">{item}</label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Time Zone</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                    <option>Pacific Time (PT)</option>
                    <option>Mountain Time (MT)</option>
                    <option>Central Time (CT)</option>
                    <option>Eastern Time (ET)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Database className="h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Data Retention</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>5 Years</option>
                    <option>Forever</option>
                  </select>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Shield className="h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Security</label>
                  <div className="mt-4 space-y-4">
                    <button className="text-sm text-green-600 hover:text-green-700">
                      Change Password
                    </button>
                    <button className="block text-sm text-green-600 hover:text-green-700">
                      Enable Two-Factor Authentication
                    </button>
                    <button className="block text-sm text-green-600 hover:text-green-700">
                      View Security Log
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;