import React from 'react';
import { Search, Book, MessageCircle, Phone, FileText, ExternalLink } from 'lucide-react';

const Help = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Help & Support</h1>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
          <MessageCircle className="h-4 w-4" />
          Contact Support
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search help articles..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Getting Started',
            icon: Book,
            articles: [
              'Introduction to Carbon Tracking',
              'Setting Up Your Account',
              'Understanding the Dashboard',
              'Basic Data Entry Guide',
            ],
          },
          {
            title: 'Features & Tutorials',
            icon: FileText,
            articles: [
              'Using the Data Import Tool',
              'Generating Reports',
              'Understanding ML Insights',
              'Customizing Your Dashboard',
            ],
          },
          {
            title: 'FAQs',
            icon: MessageCircle,
            articles: [
              'Common Issues',
              'Account Management',
              'Data Security',
              'Billing Questions',
            ],
          },
        ].map((section) => (
          <div key={section.title} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <section.icon className="h-6 w-6 text-green-600" />
              <h2 className="text-lg font-semibold text-gray-800">{section.title}</h2>
            </div>
            <ul className="space-y-3">
              {section.articles.map((article) => (
                <li key={article}>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-green-600"
                  >
                    <span className="flex-1">{article}</span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-green-50 p-6 rounded-xl">
        <div className="flex items-start gap-4">
          <Phone className="h-6 w-6 text-green-600 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Need More Help?</h2>
            <p className="text-gray-600 mt-1">
              Our support team is available 24/7 to help you with any questions or issues.
            </p>
            <div className="mt-4 space-x-4">
              <button className="text-green-600 hover:text-green-700 font-medium">
                Schedule a Call
              </button>
              <button className="text-green-600 hover:text-green-700 font-medium">
                Send an Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;