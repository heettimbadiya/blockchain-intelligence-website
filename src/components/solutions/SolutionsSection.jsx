import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Search,
    Shield,
    BarChart3,
    AlertTriangle,
    ArrowRight,
    Play,
    Download,
    BookOpen,
    CheckCircle
} from "lucide-react";

export default function SolutionsSection() {
    const [activeTab, setActiveTab] = useState("investigations");
    const navigate = useNavigate();

    const solutions = [
        {
            id: "investigations",
            title: "Investigations & Forensics",
            subtitle: "Advanced Blockchain Investigations",
            headline: "Uncover Illicit Activity and Analyze Complex Networks",
            icon: <Search className="w-8 h-8" />,
            description:
                "Identify and trace illicit cryptocurrency activity with sophisticated investigations tools for law enforcement, intelligence agencies, and financial institutions.",
            features: [
                "Comprehensive Transaction Tracing",
                "Entity Identification",
                "Visualization Tools",
                "Case Management",
                "Threat Intelligence"
            ],
            primaryCTA: "Request a Demo",
            secondaryCTA: "Learn More"
        },
        {
            id: "compliance",
            title: "Compliance & Risk Management",
            subtitle: "Real-time Crypto Compliance & Risk Mitigation",
            headline: "Ensure Regulatory Adherence and Protect Your Platform",
            icon: <Shield className="w-8 h-8" />,
            description:
                "Automated real-time monitoring and risk assessment tools to help you meet AML/CFT obligations and prevent illicit transactions.",
            features: [
                "Real-time Transaction Monitoring",
                "VASP Risking",
                "Address Screening",
                "Risk Scoring & Reporting",
                "Policy Enforcement"
            ],
            primaryCTA: "Request a Demo",
            secondaryCTA: "View Case Studies"
        },
        {
            id: "web3-security",
            title: "Web3 Security",
            subtitle: "Securing the Decentralized Future",
            headline: "Protect Protocols, Chains, and Assets from Emerging Threats",
            icon: <AlertTriangle className="w-8 h-8" />,
            description:
                "Safeguard decentralized applications, smart contracts, and blockchain networks from exploits, scams, and vulnerabilities.",
            features: [
                "Exploit Detection & Prevention",
                "Smart Contract Auditing",
                "DeFi & NFT Risk Assessment",
                "Incident Response Support",
                "Supply Chain Security"
            ],
            primaryCTA: "Request a Demo",
            secondaryCTA: "Download Whitepaper"
        },
        {
            id: "analytics",
            title: "Strategic Insights & Data Analytics",
            subtitle: "Data-Driven Decisions for the Blockchain Economy",
            headline: "Transform Blockchain Data into Actionable Intelligence",
            icon: <BarChart3 className="w-8 h-8" />,
            description:
                "Bespoke analyses, market intelligence, and customizable dashboards to empower businesses and investors.",
            features: [
                "Customizable Dashboards",
                "Market Intelligence",
                "Entity Profiling",
                "API Access",
                "Research & Reporting"
            ],
            primaryCTA: "Request a Demo",
            secondaryCTA: "Explore Data Solutions"
        }
    ];

    const activeSolution = solutions.find(s => s.id === activeTab);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 min-h-[60vh] flex items-center">
                <div className="max-w-7xl mx-auto px-6 py-20 w-full">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-[#27346a] mb-6">
                            Our Solutions
                        </h1>
                        <div className="w-24 h-1.5 bg-orange-500 rounded-full mx-auto mb-6"></div>
                        <p className="text-lg md:text-xl text-gray-700">
                            Comprehensive blockchain intelligence solutions for investigations,
                            compliance, security, and analytics.
                        </p>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {solutions.map(solution => (
                            <div
                                key={solution.id}
                                onClick={() => setActiveTab(solution.id)}
                                className={`group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                                    activeTab === solution.id
                                        ? "border-orange-500"
                                        : "border-gray-100 hover:border-orange-300"
                                }`}
                            >
                                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    {solution.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#27346a] mb-3">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {solution.description}
                                </p>
                                <div className="text-orange-600 flex items-center font-medium" onClick={() => navigate('/contact')}>
                                    Learn More
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Active Solution Details */}
            <section className="py-10 sm:py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {activeSolution && (
                        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                            {/* Top Gradient Header */}
                            <div className="bg-gradient-to-br from-[#27346a] to-indigo-800 text-white px-6 py-8 sm:px-10 sm:py-10">
                                <div className="flex flex-col sm:flex-row sm:items-start">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
                                        {activeSolution.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                                            {activeSolution.subtitle}
                                        </h2>
                                        <div className="w-12 sm:w-16 h-1 bg-orange-500 rounded-full"></div>
                                        <h3 className="text-base sm:text-lg md:text-xl text-blue-100 mt-3">
                                            {activeSolution.headline}
                                        </h3>
                                    </div>
                                </div>
                                <p className="mt-4 sm:mt-6 text-blue-50 max-w-3xl text-sm sm:text-base">
                                    {activeSolution.description}
                                </p>
                            </div>
                            {/* Features */}
                            <div className="px-6 py-8 sm:px-10 sm:py-10">
                                <h4 className="text-xl sm:text-2xl font-bold text-[#27346a] mb-6">
                                    Key Features
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    {activeSolution.features.map((feature, i) => (
                                        <div key={i} className="flex items-start group">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:bg-orange-200 transition duration-300">
                                                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                                            </div>
                                            <h5 className="text-base sm:text-lg font-semibold text-[#27346a]">
                                                {feature}
                                            </h5>
                                        </div>
                                    ))}
                                </div>
                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <button
                                        className="cursor-pointer bg-orange-500 text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
                                        onClick={() => navigate('/contact')}
                                    >
                                        <Play className="w-5 h-5 mr-2 sm:mr-3" />
                                        {activeSolution.primaryCTA}
                                        <ArrowRight className="w-5 h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                    {/* <button
                                        className="cursor-pointer border-2 border-[#27346a] text-[#27346a] w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#27346a] hover:text-white transition-all duration-300 flex items-center justify-center"
                                        onClick={() => {
                                            if (activeSolution.secondaryCTA === "Learn More") {
                                                navigate(`/solutions/${activeSolution.id}`);
                                            } else if (activeSolution.secondaryCTA === "Download Whitepaper") {
                                                // Placeholder: replace with actual download logic if needed
                                                window.open('#', '_blank');
                                            } else if (activeSolution.secondaryCTA === "View Case Studies") {
                                                navigate('/resources');
                                            } else if (activeSolution.secondaryCTA === "Explore Data Solutions") {
                                                navigate('/resources');
                                            }
                                        }}
                                    >
                                        {activeSolution.secondaryCTA === "Download Whitepaper" ? (
                                            <Download className="w-5 h-5 mr-2 sm:mr-3" />
                                        ) : (
                                            <BookOpen className="w-5 h-5 mr-2 sm:mr-3" />
                                        )}
                                        {activeSolution.secondaryCTA}
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
