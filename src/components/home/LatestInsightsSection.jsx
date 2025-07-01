import React from "react";

export default function LatestInsightsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--navy-blue)' }}>
            Latest Insights & News
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-light)' }}>
            Explore our latest blog posts, reports, and industry news.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-xl font-semibold mb-2">How Blockchain Analytics Uncovers Illicit Activity</h3>
            <p className="text-gray-600 mb-4">Discover how advanced analytics help law enforcement and businesses trace and prevent financial crime in the crypto space.</p>
            <a href="#" className="text-orange-600 font-medium">Read More</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-xl font-semibold mb-2">2024 Crypto Compliance Trends</h3>
            <p className="text-gray-600 mb-4">Stay ahead of regulatory changes and learn how to build a robust compliance program for your crypto business.</p>
            <a href="#" className="text-orange-600 font-medium">Read More</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-xl font-semibold mb-2">Web3 Security: Protecting the Decentralized Future</h3>
            <p className="text-gray-600 mb-4">Learn about the latest threats and best practices for securing DeFi protocols, NFTs, and smart contracts.</p>
            <a href="#" className="text-orange-600 font-medium">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
} 