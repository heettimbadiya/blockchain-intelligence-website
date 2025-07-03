import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import {CustomButton} from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function LatestInsightsSection() {
  const navigate = useNavigate();
  const insights = [
  { title: 'How Blockchain Analytics Uncovers Illicit Activity', category: 'Investigation' },
  { title: '2024 Crypto Compliance Trends', category: 'Compliance' },
  { title: 'Web3 Security: Protecting the Decentralized Future', category: 'Security' },
];
  return (
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#27346a] mb-4">Latest Insights & News</h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay informed with our analysis and thought leadership.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, i) => (
                <Card
                    key={i}
                    className="bg-white border border-gray-100 rounded-2xl hover:border-orange-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="text-sm font-semibold text-orange-500 uppercase mb-3">{insight.category}</div>
                    <h3 className="text-xl font-bold text-[#27346a] mb-4 group-hover:text-orange-500 transition-colors duration-200">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 mb-6">Read our latest expert perspectives and reports.</p>
                    <CustomButton variant="ghost" onClick={() => navigate('/resources')}>
                      Read More <ChevronRight className="ml-1 w-4 h-4" />
                    </CustomButton>
                  </CardContent>
                </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <CustomButton variant="secondary" onClick={() => navigate('/resources')}>
              View All Insights
            </CustomButton>
          </div>
        </div>
      </section>
  );
} 