import React from "react";
import {
    BookOpen,
    FileText,
    Users,
    Calendar,
    HelpCircle,
    ArrowRight,
    Bookmark,
    Download,
    ExternalLink,
} from "lucide-react";
import {CustomButton} from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function ResourcesSection() {
    const resourceCategories = [
        {
            icon: BookOpen,
            title: "Blog",
            description:
                "Regular articles and analyses on industry trends, regulatory updates, and practical applications of blockchain intelligence.",
            comingSoon: "Blog content coming soon.",
            features: [
                "Industry Trends",
                "Regulatory Updates",
                "Best Practices",
                "Expert Insights",
            ],
        },
        {
            icon: FileText,
            title: "Research Reports",
            description:
                "In-depth studies and whitepapers on illicit finance, market trends, and emerging threats in the crypto space.",
            comingSoon: "Reports coming soon.",
            features: [
                "Market Analysis",
                "Threat Intelligence",
                "Whitepapers",
                "Data Insights",
            ],
        },
        {
            icon: Users,
            title: "Case Studies",
            description:
                "Real-world examples of how our solutions have helped organizations achieve their objectives and overcome challenges.",
            comingSoon: "Case studies coming soon.",
            features: [
                "Success Stories",
                "Implementation Guides",
                "ROI Analysis",
                "Best Practices",
            ],
        },
        {
            icon: Calendar,
            title: "Webinars & Events",
            description:
                "Recordings of past webinars and information on upcoming events, offering opportunities to learn from experts and engage with the community.",
            comingSoon: "Webinars & events coming soon.",
            features: [
                "Live Sessions",
                "Expert Panels",
                "Q&A Sessions",
                "Industry Events",
            ],
        },
        {
            icon: HelpCircle,
            title: "FAQs",
            description:
                "Answers to frequently asked questions about our products, services, and the blockchain industry.",
            comingSoon: "FAQs coming soon.",
            features: [
                "Product Questions",
                "Technical Support",
                "Industry Basics",
                "Getting Started",
            ],
        },
    ];

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-24 text-center">
                <div className="max-w-5xl mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#27346a] mb-6">
                        Resources
                    </h1>
                    <div className="w-24 h-1.5 bg-orange-500 rounded-full mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 mb-8">
                        Insights, Research, and Expertise from the Forefront of Blockchain
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CustomButton variant="primary" onClick={() => navigate('/blog')}>
                            <BookOpen className="w-5 h-5 mr-2" />
                            Explore Our Blog
                        </CustomButton>
                        <a href="/dummy-report.pdf" download className="no-underline">
                          <CustomButton variant="secondary">
                              <Download className="w-5 h-5 mr-2" />
                              Download Our Latest Report
                          </CustomButton>
                        </a>
                    </div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2">
                    {resourceCategories.map((category, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-orange-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-start mb-6">
                                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                    <category.icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#27346a] mb-2">
                                        {category.title}
                                    </h3>
                                    <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">{category.description}</p>
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-[#27346a] uppercase mb-2">
                                    What You'll Find
                                </h4>
                                <ul className="grid grid-cols-2 gap-2">
                                    {category.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="text-sm text-gray-600 flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <Bookmark className="w-4 h-4 text-orange-500" />
                                    <span className="text-sm font-semibold text-[#27346a]">
                    Coming Soon
                  </span>
                                </div>
                                <p className="text-sm text-gray-600">{category.comingSoon}</p>
                            </div>
                            <CustomButton
                                variant="ghost"
                                className="w-full justify-center mt-2"
                                onClick={() => navigate('/contact')}
                            >
                                Get Notified
                                <ArrowRight className="w-4 h-4" />
                            </CustomButton>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Stay Updated with Our Latest Resources
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Be the first to access new research, insights, and industry analysis.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            className="cursor-pointer flex items-center bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
                            onClick={() => navigate('/contact')}
                        >
                            <BookOpen className="w-5 h-5 mr-2" />
                            Subscribe to Updates
                        </button>
                        <button
                            className="cursor-pointer flex items-center border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 backdrop-blur-sm"
                            onClick={() => navigate('/contact')}
                        >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Contact Our Experts
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
