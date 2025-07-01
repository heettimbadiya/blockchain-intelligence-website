import React from "react";
import { BarChart3, Globe, Users } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--navy-blue)' }}>
            The BlockIntel Difference
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-light)' }}>
            Why leading organizations choose our blockchain intelligence platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 p-4 rounded-full" style={{ backgroundColor: 'var(--light-gray)' }}>
              <BarChart3 className="w-8 h-8" style={{ color: 'var(--navy-blue)' }} />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--navy-blue)' }}>
              Unparalleled Data Accuracy
            </h3>
            <p className="text-gray-600">
              Our proprietary machine learning and robust architecture ensure the most precise and reliable blockchain data in the industry.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 p-4 rounded-full" style={{ backgroundColor: 'var(--light-gray)' }}>
              <Globe className="w-8 h-8" style={{ color: 'var(--navy-blue)' }} />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--navy-blue)' }}>
              Comprehensive Coverage
            </h3>
            <p className="text-gray-600">
              Seamlessly integrate new blockchains and support all major tokens, providing an unmatched view of the crypto landscape.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 p-4 rounded-full" style={{ backgroundColor: 'var(--light-gray)' }}>
              <Users className="w-8 h-8" style={{ color: 'var(--navy-blue)' }} />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--navy-blue)' }}>
              Expert Support & Innovation
            </h3>
            <p className="text-gray-600">
              Benefit from our global team's 24/7 expertise and our dedicated R&D initiatives that continuously deliver groundbreaking features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 