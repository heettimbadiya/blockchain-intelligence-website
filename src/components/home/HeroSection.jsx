import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '@/components/Button/Button';

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl font-bold text-[#27346a] mb-4">
                    Know what happens on blockchains
                </h1>

                {/* Subtext */}
                <p className="text-base sm:text-lg text-[#293972] max-w-3xl mx-auto mb-6">
                    Chainalysis is the blockchain data platform. We provide data, software, services, and research to government agencies,
                    exchanges, financial institutions, and insurance and cybersecurity companies in over 70 countries. Our data powers
                    <a href="#" className="text-blue-600 underline mx-1">investigation</a>,
                    <a href="#" className="text-blue-600 underline mx-1">compliance</a>, and
                    <a href="#" className="text-blue-600 underline mx-1">market intelligence</a> software that has been used to
                    <a href="#" className="text-blue-600 underline mx-1">solve some of the world’s most high-profile criminal cases</a>
                    and grow consumer access to cryptocurrency safely.
                </p>

                {/* CTA Button */}
                <div className="mt-6 mb-12 flex justify-center">
                    <CustomButton variant="primary" onClick={() => navigate('/careers')}>
                        Careers at Chainalysis
                    </CustomButton>
                </div>

                {/* Image Grid */}
                <div>
                        <img
                            src="https://www.chainalysis.com/wp-content/uploads/2025/06/company-photos.jpg"
                            alt="Meeting Room"
                            className="rounded-xl object-cover w-full h-[636px]"
                        />
                </div>

            </div>
        </section>
    );
}
