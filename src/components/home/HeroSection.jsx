import React from 'react';
import {CustomButton} from "@/components/Button/Button";

export default function HeroSection({
                                        title = 'Blockchain intelligence for investigations, risk, and security',
                                        subtitle = 'From reactive to proactive, monitor fraud, pursue illicit activity, and detect and deter threat actors.',
                                        buttonText = 'Request a demo',
                                        image,
                                        imageAlt = 'Hero Illustration',
                                    }) {
    return (
        <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 min-h-[80vh] flex items-center">
            <div className="max-w-7xl mx-auto px-6 py-24 w-full text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-[#27346a] mb-8 leading-tight tracking-tight">
                    Blockchain Intelligence for a Safer Digital Economy
                </h1>
                <div className="w-24 h-1.5 bg-orange-500 rounded-full mx-auto mb-8" />
                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
                    Empowering governments, businesses, and institutions with the tools to navigate cryptocurrency with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <CustomButton variant="primary">Request a Demo</CustomButton>
                    <CustomButton variant="secondary">Explore Our Solutions</CustomButton>
                </div>
            </div>
        </section>
    );
}