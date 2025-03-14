import React, { useState } from 'react';
import { Upload, FileSpreadsheet, AlertCircle } from 'lucide-react';

const DataEntry = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle the files
    const files = e.dataTransfer.files;
    // Process files here
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Data Entry</h1>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Upload Data
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Manual Entry</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Source Type</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                <option>Industrial</option>
                <option>Transportation</option>
                <option>Household</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Emission Value (CO2e)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="Add any additional information..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white rounded-lg py-2 hover:bg-green-700"
            >
              Save Entry
            </button>
          </form>
        </div>

        <div
          className={`bg-white p-6 rounded-xl shadow-sm border-2 border-dashed ${
            dragActive ? 'border-green-500 bg-green-50' : 'border-gray-300'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <FileSpreadsheet className="h-16 w-16 text-gray-400" />
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Bulk Upload</h3>
              <p className="text-sm text-gray-500">
                Drag and drop your CSV or Excel file here, or click to browse
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-yellow-800">Important Note</h4>
                <p className="text-sm text-yellow-700">
                  Please ensure your file follows our template format. Download the template
                  <a href="#" className="text-yellow-800 underline ml-1">
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEntry;