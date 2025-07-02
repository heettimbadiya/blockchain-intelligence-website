import React from "react";
import { ArrowRight, Users, Target, Eye, Heart, Briefcase, Building, Shield, Lightbulb, Handshake } from "lucide-react";

export default function AboutSection() {
    const values = [
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Innovation",
            description: "Pushing boundaries with cutting-edge technology and forward-thinking solutions"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Integrity",
            description: "Maintaining the highest ethical standards in everything we do"
        },
        {
            icon: <Handshake className="w-6 h-6" />,
            title: "Collaboration",
            description: "Working together to achieve common goals and shared success"
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Impact",
            description: "Creating meaningful change in the blockchain space"
        },
        {
            icon: <Building className="w-6 h-6" />,
            title: "Customer Focus",
            description: "Putting our clients' needs first and delivering exceptional value"
        }
    ];

    const teamMembers = [
        { name: "Coming Soon", role: "Chief Executive Officer", image: "/api/placeholder/120/120" },
        { name: "Coming Soon", role: "Chief Technology Officer", image: "/api/placeholder/120/120" },
        { name: "Coming Soon", role: "Head of Operations", image: "/api/placeholder/120/120" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 min-h-[80vh] flex items-center">
                <div className="max-w-7xl mx-auto px-6 py-24 w-full">
                    <div className="max-w-5xl mx-auto">
                        {/* Centered Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#27346a] mb-8 leading-[1.1] tracking-tight text-center">
                            About Us
                        </h1>
                        <div className="w-32 h-1.5 bg-orange-500 rounded-full mx-auto mb-12"></div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#27346a] mb-12 leading-[1.3] max-w-4xl mx-auto text-center">
                            Pioneering Blockchain Intelligence for a Secure Future
                        </h2>

                        {/* Left-aligned Paragraphs */}
                        <div className="max-w-4xl mx-auto text-left">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                We are a team of passionate experts at the forefront of blockchain intelligence,
                                dedicated to fostering trust and transparency in the digital economy. Founded on the
                                principle that data can empower better decisions, we combine cutting-edge
                                technology with deep industry expertise to provide unparalleled insights into the
                                world of cryptocurrency.
                            </p>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
                                Our mission is to make blockchain safe and accessible for
                                everyone, from governments and financial institutions to businesses and individuals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-10 border border-orange-200 hover:shadow-xl transition-all duration-500 group">
                            <div className="flex items-start mb-8">
                                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#27346a] mb-2">Our Mission</h3>
                                    <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                To build a foundation of trust and transparency in the blockchain ecosystem,
                                enabling safe and compliant participation for all.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border border-blue-200 hover:shadow-xl transition-all duration-500 group">
                            <div className="flex items-start mb-8">
                                <div className="w-16 h-16 bg-[#27346a] rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                                    <Eye className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#27346a] mb-2">Our Vision</h3>
                                    <div className="w-16 h-1 bg-[#27346a] rounded-full"></div>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                To be the global leader in blockchain intelligence, empowering organizations
                                to navigate the complexities of cryptocurrency with confidence and clarity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#27346a] mb-6">Our Values</h3>
                        <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold text-[#27346a] mb-4">{value.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#27346a] mb-6">Leadership Team</h3>
                        <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Meet our team of passionate experts at the forefront of blockchain intelligence</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                                <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                    <Users className="w-16 h-16 text-gray-500" />
                                </div>
                                <h4 className="text-xl font-bold text-[#27346a] mb-2">{member.name}</h4>
                                <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                                <p className="text-sm text-orange-500 bg-orange-50 px-4 py-2 rounded-full inline-block">
                                    Team bios and photos coming soon
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Careers */}
            <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-6xl mx-auto px-6 text-center">
                    <div className="flex items-center justify-center mb-8">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mr-6">
                            <Briefcase className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-3xl md:text-4xl font-bold text-white">Join Our Team</h3>
                            <div className="w-16 h-1 bg-white/60 rounded-full mt-2"></div>
                        </div>
                    </div>

                    <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Interested in joining us? Be part of a team that's shaping the future of blockchain intelligence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                        <button className="cursor-pointer bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl">
                            View Open Positions
                            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <button className="cursor-pointer border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 backdrop-blur-sm">
                            Learn More About Our Culture
                        </button>
                    </div>

                    <p className="text-white/80 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full inline-block">
                        Careers content coming soon
                    </p>
                </div>
            </section>
        </div>
    );
}