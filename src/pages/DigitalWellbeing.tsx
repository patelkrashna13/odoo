import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Smartphone, Clock, Calendar, Save, Plus, Trash2, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { DigitalWellbeing } from '../types/user';

// Sample data - would be replaced with actual API data
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const sampleAppUsage = [
  { name: 'Social Media', value: 120, carbon: 0.8 },
  { name: 'Streaming', value: 80, carbon: 1.2 },
  { name: 'Productivity', value: 40, carbon: 0.3 },
  { name: 'Gaming', value: 30, carbon: 0.9 },
  { name: 'Other', value: 20, carbon: 0.2 },
];

const weeklyData = [
  { day: 'Mon', screenTime: 180, carbon: 2.1 },
  { day: 'Tue', screenTime: 200, carbon: 2.3 },
  { day: 'Wed', screenTime: 150, carbon: 1.8 },
  { day: 'Thu', screenTime: 220, carbon: 2.5 },
  { day: 'Fri', screenTime: 250, carbon: 2.8 },
  { day: 'Sat', screenTime: 300, carbon: 3.4 },
  { day: 'Sun', screenTime: 280, carbon: 3.2 },
];

interface DailyRoutine {
  id: string;
  activity: string;
  duration: number;
  carbonImpact: number;
}

const DigitalWellbeingPage = () => {
  const [wellbeingData, setWellbeingData] = useState<DigitalWellbeing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [routines, setRoutines] = useState<DailyRoutine[]>([
    { id: '1', activity: 'Video streaming', duration: 120, carbonImpact: 1.2 },
    { id: '2', activity: 'Social media browsing', duration: 90, carbonImpact: 0.7 },
    { id: '3', activity: 'Online gaming', duration: 60, carbonImpact: 0.9 },
  ]);
  const [newRoutine, setNewRoutine] = useState<Omit<DailyRoutine, 'id'>>({ 
    activity: '', 
    duration: 0, 
    carbonImpact: 0 
  });

  useEffect(() => {
    // In a real app, this would fetch data from the API
    // For now, we'll simulate loading
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call
        // const token = localStorage.getItem('token');
        // const response = await axios.get(`${API_URL}/wellbeing/today`, {
        //   headers: { Authorization: `Bearer ${token}` }
        // });
        // setWellbeingData(response.data);
        
        // Using sample data for now
        setTimeout(() => {
          setWellbeingData({
            id: '123',
            user_id: '456',
            date: new Date().toISOString(),
            screen_time: 240, // minutes
            device_breakdown: {
              desktop: 90,
              mobile: 120,
              tablet: 30
            },
            app_usage: sampleAppUsage.map(app => ({
              app_name: app.name,
              usage_minutes: app.value,
              carbon_impact: app.carbon
            })),
            total_carbon_impact: 3.4,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          });
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.error('Error fetching wellbeing data:', err);
        setError('Failed to load digital wellbeing data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddRoutine = () => {
    if (!newRoutine.activity || newRoutine.duration <= 0) {
      setError('Please enter a valid activity and duration');
      return;
    }

    // In a real app, this would send data to the API
    const newId = Math.random().toString(36).substring(2, 9);
    setRoutines([...routines, { ...newRoutine, id: newId }]);
    setNewRoutine({ activity: '', duration: 0, carbonImpact: 0 });
    setError(null);
  };

  const handleRemoveRoutine = (id: string) => {
    setRoutines(routines.filter(routine => routine.id !== id));
  };

  const handleSaveRoutines = () => {
    // In a real app, this would send data to the API
    alert('Routines saved successfully!');
    // Example API call:
    // const token = localStorage.getItem('token');
    // await axios.post(`${API_URL}/wellbeing/routines`, { routines }, {
    //   headers: { Authorization: `Bearer ${token}` }
    // });
  };

  const calculateTotalCarbonImpact = () => {
    return routines.reduce((total, routine) => total + routine.carbonImpact, 0);
  };

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Digital Wellbeing Analytics</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Date Range
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
            <Save className="h-4 w-4" />
            Export Data
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 p-4 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Screen Time Overview */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold">Screen Time Overview</h2>
          </div>
          
          {wellbeingData && (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-gray-500">Today's Total Screen Time</p>
                <p className="text-3xl font-bold text-gray-900">
                  {Math.floor(wellbeingData.screen_time / 60)}h {wellbeingData.screen_time % 60}m
                </p>
              </div>
              
              <div className="pt-4">
                <p className="text-sm text-gray-500 mb-2">Device Breakdown</p>
                <div className="space-y-2">
                  {Object.entries(wellbeingData.device_breakdown).map(([device, minutes]) => (
                    <div key={device} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${device === 'mobile' ? 'bg-blue-500' : device === 'desktop' ? 'bg-green-500' : 'bg-purple-500'}`}></div>
                        <span className="text-sm capitalize">{device}</span>
                      </div>
                      <span className="text-sm font-medium">
                        {Math.floor(minutes / 60)}h {minutes % 60}m
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* App Usage */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 p-2 rounded-full">
              <Smartphone className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-lg font-semibold">App Usage</h2>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={wellbeingData?.app_usage || []}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="usage_minutes"
                  nameKey="app_name"
                >
                  {(wellbeingData?.app_usage || []).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} min`, 'Usage Time']} labelFormatter={(name) => `${name}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 space-y-2">
            {wellbeingData?.app_usage.map((app, index) => (
              <div key={app.app_name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <span className="text-sm">{app.app_name}</span>
                </div>
                <span className="text-sm font-medium">{app.usage_minutes} min</span>
              </div>
            ))}
          </div>
        </div>

        {/* Carbon Impact */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Carbon Impact</h2>
          
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500">Today's Digital Carbon Footprint</p>
            <p className="text-3xl font-bold text-gray-900">
              {wellbeingData?.total_carbon_impact.toFixed(2)} kg CO₂e
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">Impact by App Category</p>
              <div className="space-y-2">
                {wellbeingData?.app_usage.map((app, index) => (
                  <div key={app.app_name} className="flex items-center justify-between">
                    <span className="text-sm">{app.app_name}</span>
                    <span className="text-sm font-medium">{app.carbon_impact.toFixed(1)} kg CO₂e</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Trends */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Weekly Trends</h2>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="screenTime" name="Screen Time (min)" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line yAxisId="right" type="monotone" dataKey="carbon" name="Carbon Impact (kg CO₂e)" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Daily Routine Tracker */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Daily Routine Carbon Tracker</h2>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">Add your daily digital activities to track their carbon impact</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Activity</label>
              <input
                type="text"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                value={newRoutine.activity}
                onChange={(e) => setNewRoutine({ ...newRoutine, activity: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration (min)</label>
              <input
                type="number"
                className="w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                value={newRoutine.duration}
                onChange={(e) => setNewRoutine({ ...newRoutine, duration: Number(e.target.value) })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Carbon Impact (kg CO₂e)</label>
              <input
                type="number"
                className="w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                value={newRoutine.carbonImpact}
                onChange={(e) => setNewRoutine({ ...newRoutine, carbonImpact: Number(e.target.value) })}
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={handleAddRoutine}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Plus className="h-4 w-4" />
                Add Activity
              </button>
            </div>
          </div>
        </div>

        {/* Routine List */}
        <div className="space-y-4">
          {routines.map((routine) => (
            <div key={routine.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
              <div>
                <p className="text-sm font-medium">{routine.activity}</p>
                <p className="text-xs text-gray-500">{routine.duration} min | {routine.carbonImpact.toFixed(2)} kg CO₂e</p>
              </div>
              <button
                onClick={() => handleRemoveRoutine(routine.id)}
                className="p-2 text-red-500 hover:bg-red-100 rounded-full"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <button
            onClick={handleSaveRoutines}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Save className="h-4 w-4" />
            Save Routines
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalWellbeingPage;
