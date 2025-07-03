import React from "react";
import { BarChart3, Globe, Users } from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    { icon: BarChart3, title: 'Unparalleled Data Accuracy' },
    { icon: Globe, title: 'Comprehensive Coverage' },
    { icon: Users, title: 'Expert Support & Innovation' },
  ];
  return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#27346a] mb-4">The Chainalysis Difference</h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why leading organizations choose us over the competition
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
                <div
                    key={i}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <f.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#27346a] mb-2">{f.title}</h3>
                  <p className="text-gray-600">Delivering excellence in every engagement.</p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
} 