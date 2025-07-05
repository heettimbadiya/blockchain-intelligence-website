import React from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";

export default function TrustImpactSection() {
    const logos = [
        { src: "https://www.chainalysis.com/wp-content/uploads/2025/01/logo-coinbase-1.svg", alt: "Coinbase logo" },
        { src: "https://www.chainalysis.com/wp-content/uploads/2025/02/logo-kraken.svg", alt: "Kraken logo" },
        { src: "https://www.chainalysis.com/wp-content/uploads/2023/10/logo-bbva.svg", alt: "BBVA logo" },
        { src: "https://www.chainalysis.com/wp-content/uploads/2024/09/logo-irs-grey.png", alt: "IRS logo" },
        { src: "https://www.chainalysis.com/wp-content/uploads/2024/10/bny-logo-2024.svg", alt: "BNY logo" },
        { src: "https://www.chainalysis.com/wp-content/uploads/2022/09/cryptodotcom-logo-soft.svg", alt: "Crypto.com logo" },
        { src: "https://www.chainalysis.com/wp-content/uploads/2025/01/logo-moonpay-1.svg", alt: "MoonPay logo" },
        { src: "https://www.chainalysis.com/wp-content/uploads/2025/03/logo-fireblocks-grey.svg", alt: "Fireblocks logo" },
        { src: "https://www.chainalysis.com/wp-content/uploads/2025/03/logo-tether.svg", alt: "Tether logo" },
        { src: "https://www.chainalysis.com/wp-content/uploads/2025/01/logo-adgm-1.svg", alt: "ADGM logo" },
        { src: "https://www.chainalysis.com/wp-content/uploads/2025/02/logo-etoro.svg", alt: "eToro logo" },
    ];
    const serviceTags = [
        { label: "Protocol Privacy", color: "text-pink-600", icon: "🛡️" },
        { label: "Ransomware", color: "text-red-700", icon: "🧱" },
        { label: "Bridge", color: "text-purple-600", icon: "🌉" },
        { label: "Stolen Funds", color: "text-brown-600", icon: "🪓" },
        { label: "NFT Platform", color: "text-purple-800", icon: "🖼️" },
        { label: "Darknet Market", color: "text-red-600", icon: "🛒" },
        { label: "Online Pharmacy", color: "text-pink-500", icon: "💊" },
        { label: "Fraud", color: "text-yellow-600", icon: "🏪" },
        { label: "Gambling", color: "text-red-500", icon: "🎲" },
        { label: "Smart Contract", color: "text-purple-600", icon: "📄" },
        { label: "ATM", color: "text-yellow-700", icon: "🏧" },
        { label: "Seized Funds", color: "text-green-600", icon: "💰" },
        { label: "Exploit", color: "text-indigo-400", icon: "🧨" },
        { label: "As A Service", color: "text-gray-500", icon: "📦" },
        { label: "Mining Pool", color: "text-green-700", icon: "⛏️" },
        { label: "Scam", color: "text-brown-500", icon: "🎣" },
        { label: "Hosted Wallet", color: "text-blue-600", icon: "💼" },
        { label: "Decentralized Exchange", color: "text-purple-700", icon: "🧬" },
        { label: "P2P Exchange", color: "text-fuchsia-600", icon: "🔁" },
    ];
    return (
        <>
        <section className="pb-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h4 className="font-bold text-[#27346a] uppercase text-lg sm:text-xl tracking-wide">
                        Trusted by over 1,500 customers
                    </h4>
                </div>

                {/* Logos: Two Rows */}
                <div className="space-y-10 my-20">
                    {/* Row 1 (6 logos) */}
                    <div className="flex flex-wrap justify-center gap-x-14 gap-y-10">
                        {logos.slice(0, 6).map((logo, idx) => (
                            <img
                                key={idx}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-9 w-auto transition duration-300"
                            />
                        ))}
                    </div>

                    {/* Row 2 (5 logos) */}
                    <div className="flex flex-wrap justify-center gap-x-14 gap-y-10">
                        {logos.slice(6).map((logo, idx) => (
                            <img
                                key={idx}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-10 w-auto transition duration-300"
                            />
                        ))}
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-8 md:py-8">
                    {[
                        {
                            stat: '9/10',
                            desc: 'Nine of the top ten crypto exchanges use Chainalysis',
                        },
                        {
                            stat: '$12.6 billion+',
                            desc: 'Illicit funds frozen or recovered by law enforcement agencies worldwide trusting Chainalysis data, software, and services',
                        },
                        {
                            stat: '45+',
                            desc: 'Regulators worldwide use Chainalysis to inform regulation, protect consumers, and detect national security threats',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="text-center rounded-xl px-8 py-10 bg-gradient-to-b from-[#0f1d45] to-[#4158a4] text-white"
                        >
                            <div className="text-4xl sm:text-5xl font-bold text-orange-500 mb-4">
                                {item.stat}
                            </div>
                            <p className="text-sm sm:text-base leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
            <section className="bg-gradient-to-b from-[#f0f4ff] to-white py-20 px-4 text-center">
                <div className="max-w-6xl mx-auto">
                    {/* Headings */}
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1b2653] mb-[40px]">
                        Achieve your mission with <br /> blockchain intelligence
                    </h2>
                    <p className="text-lg md:text-xl text-[#1b2653] font-medium mb-10">
                        Uncover the real-world services behind blockchain transactions.
                    </p>

                    {/* Service Tags */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {serviceTags.map((tag, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2 px-4 py-2 rounded-md bg-white shadow-sm border border-gray-100 text-sm font-medium whitespace-nowrap"
                            >
                                <span className={tag.color}>{tag.icon}</span>
                                <span className="text-gray-700">{tag.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action Button */}
                    <button className="px-6 py-3 border border-[#1b2653] text-[#1b2653] font-semibold rounded-full hover:bg-[#1b2653] hover:text-white transition">
                        About blockchain intelligence
                    </button>
                </div>
            </section>
        </>
    );
}
