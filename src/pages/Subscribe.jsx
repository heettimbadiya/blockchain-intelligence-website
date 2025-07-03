import React from "react";

export default function Subscribe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#27346a] mb-6">Subscribe</h1>
        <div className="w-24 h-1.5 bg-orange-500 rounded-full mx-auto mb-6"></div>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Get notified about our latest resources, reports, and updates. Subscribe to our newsletter!
        </p>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Subscription</h2>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all duration-300" disabled>
            Subscription Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
} 