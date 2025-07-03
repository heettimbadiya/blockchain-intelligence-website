import React from "react";

export default function Report() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#27346a] mb-6">Latest Report</h1>
        <div className="w-24 h-1.5 bg-orange-500 rounded-full mx-auto mb-6"></div>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Download our latest research report and stay informed about the newest trends and insights in blockchain intelligence.
        </p>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Download</h2>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all duration-300" disabled>
            Download Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
} 