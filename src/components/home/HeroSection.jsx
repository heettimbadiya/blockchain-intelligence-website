import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '@/components/Button/Button';

export default function HeroSection({
    title="Blockchain intelligence for investigations, risk, and security",
    description=<p className="text-base sm:text-lg text-[#293972] max-w-3xl mx-auto mb-6">
        From reactive to proactive, monitor fraud, pursue illicit activity, and detect and deter threat actors.
    </p>,
    buttonText="Request a demo",
    buttonNavigation="/contact",
    image="https://www.chainalysis.com/wp-content/uploads/2025/03/home-page-header-2.svg"
                                    }) {
    const navigate = useNavigate();

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <div className={'flex justify-center'}>

                <h1 className="text-4xl sm:text-5xl max-w-4xl font-extrabold text-[#27346a] mb-4">
                    {title}
                </h1>
                </div>

                {/* Subtext */}

                    {description}
                {/* CTA Button */}
                <div className="mt-6 mb-12 flex justify-center">
                    <CustomButton variant="primary" onClick={() => navigate(buttonNavigation)}>
                        {buttonText}
                    </CustomButton>
                </div>

                {/* Image Grid */}
                <div>
                        <img
                            src={image}
                            alt="Meeting Room"
                            className="rounded-xl object-cover w-full h-[636px]"
                        />
                </div>

            </div>
        </section>
    );
}
