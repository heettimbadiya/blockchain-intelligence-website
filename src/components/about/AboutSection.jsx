import React from "react";
import { ArrowRight, Users, Target, Eye, Heart, Briefcase, Building, Shield, Lightbulb, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
        {
            name: "Jonathan Levin",
            role: "Co-Founder and CEO",
            image: "https://www.chainalysis.com/wp-content/uploads/2019/12/jonathan-02.jpg"
        },
        {
            name: "Sari Granat",
            role: "Chief Operating Officer",
            image: "https://www.chainalysis.com/wp-content/uploads/2022/04/image-from-ios.jpg"
        },
        {
            name: "Sarah Ward",
            role: "Chief Legal Officer",
            image: "https://www.chainalysis.com/wp-content/uploads/2021/10/20210729-chaina-01-sarahward-0062-copy.jpg"
        },
        {
            name: "Omesh Agam",
            role: "Chief Information Security Officer",
            image: "https://www.chainalysis.com/wp-content/uploads/2020/08/omesh-agam-2.jpg"
        },
        {
            name: "Bas Lemmens",
            role: "Chief Revenue Officer",
            image: "https://www.chainalysis.com/wp-content/uploads/2024/10/bas-lemmens-1-747x1024.jpg"
        },
        {
            name: "Valentina Longo",
            role: "Chief Financial Officer",
            image: "https://www.chainalysis.com/wp-content/uploads/2025/05/valentina-longo-website.jpg"
        },
        {
            name: "Gerd Behrmann",
            role: "Chief Engineer",
            image: "https://www.chainalysis.com/wp-content/uploads/2020/01/chainalysis-dk35328-1-2667x4000.jpg"
        },
        {
            name: "Jacob Illum",
            role: "Chief Scientist",
            image: "https://www.chainalysis.com/wp-content/uploads/2019/12/jacob-illum.jpg"
        }
    ];

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 flex items-center py-20 sm:py-24 md:py-32">
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl font-bold text-[#27346a] mb-8">
                            About Us
                        </h1>

                        {/* Orange Accent */}
                        <div className="w-24 sm:w-28 md:w-32 h-1.5 bg-orange-500 rounded-full mx-auto mb-8 sm:mb-10"></div>

                        {/* Subheading */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#27346a] leading-snug mb-10 sm:mb-12 max-w-3xl mx-auto">
                            Pioneering Blockchain Intelligence for a Secure Future
                        </h2>

                        {/* Paragraphs */}
                        <div className="space-y-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                            <p>
                                We are a team of passionate experts at the forefront of blockchain intelligence, dedicated to fostering trust and transparency in the digital economy. Founded on the principle that data can empower better decisions, we combine cutting-edge technology with deep industry expertise to provide unparalleled insights into the world of cryptocurrency.
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
                        <h3 className="text-3xl md:text-4xl font-bold text-[#27346a] mb-6">
                            Leadership Team
                        </h3>
                        <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet our team of passionate experts at the forefront of blockchain intelligence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className={'cursor-pointer group'}
                            >
                                <div className="w-full mb-4 rounded-lg overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="object-cover w-full h-[290px] transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                <h4 className="text-[18px] font-semibold text-[#27346a]">
                                    {member.name}
                                </h4>
                                <p className="text-[#27346a] text-[15px]">{member.role}</p>
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
                        <button
                            className="cursor-pointer bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
                            onClick={() => navigate('/careers')}
                        >
                            View Open Positions
                            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <button
                            className="cursor-pointer border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 backdrop-blur-sm"
                            onClick={() => navigate('/contact')}
                        >
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