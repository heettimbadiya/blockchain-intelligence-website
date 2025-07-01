import React from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";

export default function TrustImpactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--navy-blue)' }}>
            Trusted by Over 1,500 Customers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-8 border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--orange-accent)' }}>
                9/10
              </div>
              <p className="text-gray-600">
                Leading crypto exchanges trust our platform for compliance and risk management
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-8 border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--orange-accent)' }}>
                $12.6B+
              </div>
              <p className="text-gray-600">
                In illicit funds identified and recovered with our intelligence
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-8 border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--orange-accent)' }}>
                50+
              </div>
              <p className="text-gray-600">
                Regulatory bodies worldwide rely on our data to shape policy and protect consumers
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 