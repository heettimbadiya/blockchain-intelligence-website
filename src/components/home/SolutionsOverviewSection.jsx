import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import {
  ChevronRight,
  Shield,
  Search,
  AlertTriangle,
  TrendingUp,
} from 'lucide-react';
import {CustomButton} from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";


export default function SolutionsOverviewSection() {

  const navigate = useNavigate();
  const solutions = [
    { icon: Search, title: 'Investigations & Forensics', desc: 'Uncover the truth behind crypto transactions.' },
    { icon: Shield, title: 'Compliance & Risk Management', desc: 'Ensure regulatory adherence and mitigate risks.' },
    { icon: AlertTriangle, title: 'Web3 Security', desc: 'Protect your protocols and assets from threats.' },
    { icon: TrendingUp, title: 'Strategic Insights & Analytics', desc: 'Transform data into strategic advantages.' },
  ];
  return (
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#27346a] mb-4">Comprehensive Blockchain Solutions</h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From investigations to compliance, we deliver the insights you need to operate safely.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((s, i) => (
                <Card
                    key={i}
                    className="py-8 px-4 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-orange-200 transition-all duration-300 group"
                >
                  <CardHeader className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <s.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#27346a]">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{s.desc}</p>
                    <CustomButton variant="ghost" className="font-medium" onClick={() => navigate('/solutions')}>
                      Learn More <ChevronRight className="ml-1 w-4 h-4" />
                    </CustomButton>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
} 