import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import investigationsIcon from "@/assets/investigations_icon.png";
import complianceIcon from "@/assets/compliance_icon.png";
import securityIcon from "@/assets/security_icon.png";
import analyticsIcon from "@/assets/analytics_icon.png";
import { Button } from "@/components/ui/button.jsx";
import { ChevronRight } from "lucide-react";

export default function SolutionsOverviewSection() {
  return (
    <section id="solutions" className="py-20" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--navy-blue)' }}>
            Comprehensive Blockchain Intelligence Solutions
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-light)' }}>
            From investigations to compliance, we provide the tools and insights you need to operate safely in the digital asset ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6 hover:shadow-xl transition-shadow border-2 hover:border-blue-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <img src={investigationsIcon} alt="Investigations" className="w-full h-full" />
              </div>
              <CardTitle className="text-xl mb-2" style={{ color: 'var(--navy-blue)' }}>
                Investigations & Forensics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Uncover the truth behind complex crypto transactions. Advanced analytics trace funds and identify illicit actors.
              </p>
              <Button variant="ghost" className="p-0 h-auto font-medium" style={{ color: 'var(--orange-accent)' }}>
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          <Card className="p-6 hover:shadow-xl transition-shadow border-2 hover:border-blue-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <img src={complianceIcon} alt="Compliance" className="w-full h-full" />
              </div>
              <CardTitle className="text-xl mb-2" style={{ color: 'var(--navy-blue)' }}>
                Compliance & Risk Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Ensure regulatory adherence and mitigate financial crime risks with real-time monitoring and screening.
              </p>
              <Button variant="ghost" className="p-0 h-auto font-medium" style={{ color: 'var(--orange-accent)' }}>
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          <Card className="p-6 hover:shadow-xl transition-shadow border-2 hover:border-blue-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <img src={securityIcon} alt="Security" className="w-full h-full" />
              </div>
              <CardTitle className="text-xl mb-2" style={{ color: 'var(--navy-blue)' }}>
                Web3 Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Protect your protocols, chains, and assets from exploits and scams with cutting-edge intelligence.
              </p>
              <Button variant="ghost" className="p-0 h-auto font-medium" style={{ color: 'var(--orange-accent)' }}>
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          <Card className="p-6 hover:shadow-xl transition-shadow border-2 hover:border-blue-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <img src={analyticsIcon} alt="Analytics" className="w-full h-full" />
              </div>
              <CardTitle className="text-xl mb-2" style={{ color: 'var(--navy-blue)' }}>
                Strategic Insights & Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Transform raw blockchain data into strategic advantages with comprehensive analytics and insights.
              </p>
              <Button variant="ghost" className="p-0 h-auto font-medium" style={{ color: 'var(--orange-accent)' }}>
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 