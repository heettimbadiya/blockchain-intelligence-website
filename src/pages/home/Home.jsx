import React from "react";
import {HeroSection} from "@/components/home/index.js";
import TrustImpactSection from "@/components/home/TrustImpactSection.jsx";
import SolutionsOverviewSection from "@/components/home/SolutionsOverviewSection.jsx";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection.jsx";
import LatestInsightsSection from "@/components/home/LatestInsightsSection.jsx";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustImpactSection />
      <SolutionsOverviewSection />
      <WhyChooseUsSection />
      <LatestInsightsSection />
    </div>
  );
} 