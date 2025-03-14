import React from 'react';

import { Brain, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const predictionData = [
  { name: 'Jan', actual: 4000, predicted: 4100 },
  { name: 'Feb', actual: 3000, predicted: 3200 },
  { name: 'Mar', actual: 2000, predicted: 2100 },
  { name: 'Apr', actual: 2780, predicted: 2800 },
  { name: 'May', actual: 1890, predicted: 1950 },
  { name: 'Jun', actual: 2390, predicted: 2400 },
  { name: 'Jul', predicted: 2600 },
  { name: 'Aug', predicted: 2800 },
  { name: 'Sep', predicted: 3000 },
];

const MLInsights = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">ML Insights & Predictions</h1>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
          <Brain className="h-4 w-4" />
          Generate New Predictions
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Emission Predictions</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={predictionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="actual" stroke="#059669" name="Actual" strokeWidth={2} />
                <Line type="monotone" dataKey="predicted" stroke="#0284c7" name="Predicted" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Anomaly Detection</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-red-900">Unusual Spike Detected</h3>
                <p className="text-sm text-red-700">
                  Industrial emissions showed an unexpected 25% increase on March 15th.
                  This might indicate equipment malfunction or data recording errors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-yellow-900">Pattern Change</h3>
                <p className="text-sm text-yellow-700">
                  Transportation emissions are showing an unusual pattern compared to
                  historical data. Consider reviewing recent changes in operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">AI Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Process Optimization",
              description: "AI suggests optimizing industrial processes during off-peak hours could reduce emissions by 15%",
              impact: "High Impact",
              impactColor: "text-green-600",
            },
            {
              title: "Transport Route Planning",
              description: "Implementing AI-suggested route optimization could save 12% in transportation emissions",
              impact: "Medium Impact",
              impactColor: "text-yellow-600",
            },
            {
              title: "Energy Usage Patterns",
              description: "Shifting energy-intensive operations to renewable energy hours could reduce footprint by 20%",
              impact: "High Impact",
              impactColor: "text-green-600",
            },
            {
              title: "Equipment Maintenance",
              description: "Predictive maintenance schedule could prevent efficiency losses and reduce emissions by 8%",
              impact: "Medium Impact",
              impactColor: "text-yellow-600",
            },
          ].map((recommendation, index) => (
            <div key={index} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
              <Lightbulb className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">{recommendation.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{recommendation.description}</p>
                <p className={`text-sm font-medium mt-2 ${recommendation.impactColor}`}>
                  {recommendation.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MLInsights;