import React from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";

export default function TrustImpactSection() {
  return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#27346a]">Trusted by 1,500+ Customers</h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leading organizations rely on us to secure their operations and drive informed decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '9/10', label: 'Leading Crypto Exchanges' },
              { stat: '$12.6B+', label: 'Illicit Funds Identified' },
              { stat: '50+', label: 'Regulatory Bodies' },
            ].map((item, i) => (
                <Card
                    key={i}
                    className="text-center p-10 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-orange-200 transition-all duration-300"
                >
                  <CardContent>
                    <div className="text-5xl font-bold mb-3 text-orange-500">{item.stat}</div>
                    <h3 className="text-lg font-semibold mb-2 text-[#27346a]">{item.label}</h3>
                    <p className="text-gray-600">Securing and empowering the blockchain economy</p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
} 