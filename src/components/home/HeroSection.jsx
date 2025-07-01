import React from 'react';
import Button from "@/components/Button/Button.jsx";

export default function HeroSection({
                                        title = 'Blockchain intelligence for investigations, risk, and security',
                                        subtitle = 'From reactive to proactive, monitor fraud, pursue illicit activity, and detect and deter threat actors.',
                                        buttonText = 'Request a demo',
                                        image,
                                        imageAlt = 'Hero Illustration',
                                    }) {
    return (
        <section className="w-full bg-[#fcfcfc] py-12 md:py-24">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-4 md:px-8">
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#27346a] mb-6 leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg sm:text-2xl text-[#27346a] mb-10">
                        {subtitle}
                    </p>
                    <Button variant="primary" className="text-xl px-10 py-4 rounded-full">
                        {buttonText}
                    </Button>
                </div>
                {image && (
                    <div className="flex-1 flex justify-center mb-8 md:mb-0">
                        <img src={image} alt={imageAlt} className="max-w-xs sm:max-w-md md:max-w-lg w-full h-auto object-contain" />
                    </div>
                )}
            </div>
        </section>
    );
}