import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function WhyChooseUsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);

  const industries = [
    {
      image: "https://www.chainalysis.com/wp-content/uploads/2023/10/meta-law-enforcement.jpg",
      title: "Law Enforcement",
      description: "Detect, disrupt, and deter crypto crime with blockchain insights",
    },
    {
      image: "https://www.chainalysis.com/wp-content/uploads/2023/10/meta-regulators.jpg",
      title: "Regulators",
      description: "Protect consumers, establish safe markets, and maintain financial stability",
    },
    {
      image: "https://www.chainalysis.com/wp-content/uploads/2023/10/home-financial-institutions.jpg",
      title: "Financial Institutions",
      description: "Generate new revenue opportunities with digital assets",
    },
    {
      image: "https://www.chainalysis.com/wp-content/uploads/2023/10/meta-centralized-exchanges.jpg",
      title: "Centralized Exchanges",
      description: "Optimize crypto exchange operations through data insights",
    },
    {
      image: "https://www.chainalysis.com/wp-content/uploads/2023/10/meta-tax-agencies-1.jpg",
      title: "Tax Agencies",
      description: "Advance crypto casework with greater speed and efficiency",
    },
    {
      image: "https://www.chainalysis.com/wp-content/uploads/2023/10/meta-decentralized-finance.jpg",
      title: "Decentralized Finance",
      description: "Scale projects securely with low-lift integrations",
    },
    {
      image: "https://www.chainalysis.com/wp-content/uploads/2023/10/meta-consumer-brands.jpg",
      title: "Consumer Brands",
      description: "Start your brand's seamless transition into web3",
    },
    {
      image: "https://www.chainalysis.com/wp-content/uploads/2024/09/meta-cybersecurity.jpg",
      title: "Cybersecurity",
      description: "Proactive threat hunting and prevention",
    },
  ];

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setSlidesPerView(1);
      } else if (width < 640) {
        setSlidesPerView(1.2);
      } else if (width < 768) {
        setSlidesPerView(1.5);
      } else if (width < 1024) {
        setSlidesPerView(2);
      } else if (width < 1280) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, industries.length - Math.floor(slidesPerView));

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const slideWidth = (400 / (slidesPerView * 400)) * 100;
  const translateX = -(currentIndex * 400);

  return (
      <section className="py-12 bg-white overflow-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Heading and Navigation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2653]">
              Industries count on us for blockchain analysis
            </h2>
            <div className="flex gap-2">
              <button
                  onClick={goToPrev}
                  className="w-10 cursor-pointer h-10 border border-[#1b2653] rounded-full flex items-center justify-center hover:bg-[#1b2653] hover:text-white transition-colors"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                  onClick={goToNext}
                  className="w-10 cursor-pointer h-10 border border-[#1b2653] rounded-full flex items-center justify-center hover:bg-[#1b2653] hover:text-white transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="">
            <div
                className="flex gap-x-8"
                style={{
                  transform: `translateX(${translateX}px)`,
                  transition: "transform 0.5s ease-in-out",
                  width: `${industries.length * 500}px`,
                }}
            >
              {industries.map((industry, index) => (
                  <div
                      key={index}
                      className="flex-shrink-0 cursor-pointer"
                      style={{ width: "400px", height: "400px" }}
                  >
                    <div className="group bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#00000020] transition duration-300 w-full h-full flex flex-col">
                      <div className="w-full h-1/2 overflow-hidden">
                        <img
                            src={industry.image}
                            alt={industry.title}
                            className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-[#1b2653] text-xl font-bold mb-2">
                            {industry.title}
                          </h3>
                          <p className="text-[#1b2653] text-base">
                            {industry.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Mobile dots */}
          <div className="flex justify-center mt-6 gap-2 sm:hidden">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? "bg-[#1b2653]" : "bg-gray-300"
                    }`}
                />
            ))}
          </div>
        </div>
      </section>
  );
}
