import React from "react";
import { ArrowRight, Users, Target, Eye, Heart, Briefcase, Building, Shield } from "lucide-react";

export default function AboutSection() {
    const values = [
        { icon: <Shield className="w-6 h-6" />, title: "Innovation", description: "Pushing boundaries with cutting-edge technology" },
        { icon: <Heart className="w-6 h-6" />, title: "Integrity", description: "Maintaining the highest ethical standards" },
        { icon: <Users className="w-6 h-6" />, title: "Collaboration", description: "Working together to achieve common goals" },
        { icon: <Target className="w-6 h-6" />, title: "Impact", description: "Creating meaningful change in the blockchain space" },
        { icon: <Building className="w-6 h-6" />, title: "Customer Focus", description: "Putting our clients' needs first" }
    ];

    const teamMembers = [
        { name: "Coming Soon", role: "Leadership Team", image: "/api/placeholder/120/120" },
        { name: "Coming Soon", role: "Leadership Team", image: "/api/placeholder/120/120" },
        { name: "Coming Soon", role: "Leadership Team", image: "/api/placeholder/120/120" }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-white"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-20">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-[#27346a] mb-6">
                            About Us
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#27346a] mb-8 max-w-4xl mx-auto">
                            Pioneering Blockchain Intelligence for a Secure Future
                        </h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We are a team of passionate experts at the forefront of blockchain intelligence,
                            dedicated to fostering trust and transparency in the digital economy. Founded on the
                            principle that data can empower better decisions, we combine cutting-edge
                            technology with deep industry expertise to provide unparalleled insights into the
                            world of cryptocurrency. Our mission is to make blockchain safe and accessible for
                            everyone, from governments and financial institutions to businesses and individuals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                                    <Target className="w-6 h-6 text-orange-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#27346a]">Our Mission</h3>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To build a foundation of trust and transparency in the blockchain ecosystem,
                                enabling safe and compliant participation for all.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                                    <Eye className="w-6 h-6 text-[#27346a]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#27346a]">Our Vision</h3>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To be the global leader in blockchain intelligence, empowering organizations
                                to navigate the complexities of cryptocurrency with confidence and clarity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-[#27346a] mb-4">Our Values</h3>
                        <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="group p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-all duration-300 hover:shadow-lg">
                                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-[#27346a] mb-2">{value.title}</h4>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-[#27346a] mb-4">Leadership Team</h3>
                        <p className="text-gray-600 text-lg">Meet our team of passionate experts at the forefront of blockchain intelligence</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Users className="w-12 h-12 text-gray-500" />
                                </div>
                                <h4 className="text-xl font-semibold text-[#27346a] mb-2">{member.name}</h4>
                                <p className="text-gray-600">{member.role}</p>
                                <p className="text-sm text-gray-500 mt-2">(Team bios and photos coming soon)</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Careers */}
            <section className="py-20 bg-orange-500">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                            <Briefcase className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Join Our Team</h3>
                    </div>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Interested in joining us? Be part of a team that's shaping the future of blockchain intelligence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-orange-500 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group">
                            View Open Positions
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-orange-500 transition-colors duration-300">
                            Learn More About Our Culture
                        </button>
                    </div>

                    <p className="text-sm text-white/80 mt-4">(Careers content coming soon)</p>
                </div>
            </section>
        </div>
    );
}