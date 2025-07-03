import React, { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    User,
    Building,
    Briefcase,
    Globe,
    MessageSquare,
    Shield,
    CheckCircle,
    ExternalLink,
} from "lucide-react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        role: "",
        phone: "",
        country: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "General Inquiries",
            details: "info@chainalysis.com",
            href: "mailto:info@chainalysis.com",
            description: "For general questions and business inquiries",
        },
        {
            icon: Phone,
            title: "Call Us",
            details: "+1 (555) 123-4567",
            href: "tel:+15551234567",
            description: "Speak directly with our experts",
        },
        {
            icon: Shield,
            title: "Support",
            details: "support@chainalysis.com",
            href: "mailto:support@chainalysis.com",
            description: "Technical support and customer service",
        },
    ];

    const officeLocations = [
        {
            city: "New York",
            address: "123 Wall Street, Suite 500, New York, NY 10005",
            timezone: "EST",
        },
        {
            city: "London",
            address: "45 Finsbury Square, London EC2A 1PX, United Kingdom",
            timezone: "GMT",
        },
        {
            city: "Singapore",
            address: "1 Marina Boulevard, Singapore 018989",
            timezone: "SGT",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#27346a] mb-8">
                        Contact Us
                    </h1>
                    <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Ready to learn how blockchain intelligence can transform your operations? Contact us today to schedule a personalized demo or get answers to your questions.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 p-8">
                    {isSubmitted ? (
                        <div className="text-center py-16">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-[#27346a] mb-2">Thank You!</h3>
                            <p className="text-gray-600">
                                Your demo request has been submitted. Our team will contact you within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-3xl font-bold text-[#27346a] mb-6 flex items-center gap-3">
                                <MessageSquare className="w-6 h-6 text-orange-500" />
                                Request a Demo
                            </h2>
                            <div className="w-16 h-1 bg-orange-500 rounded-full mb-8"></div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        { label: "Full Name *", name: "name", type: "text", icon: User },
                                        { label: "Business Email *", name: "email", type: "email", icon: Mail },
                                        { label: "Company", name: "company", type: "text", icon: Building },
                                        { label: "Job Title", name: "role", type: "text", icon: Briefcase },
                                        { label: "Phone Number", name: "phone", type: "tel", icon: Phone },
                                        { label: "Country", name: "country", type: "text", icon: Globe },
                                    ].map((field, idx) => (
                                        <div key={idx} className="space-y-2">
                                            <label className="text-sm font-semibold text-[#27346a] flex items-center gap-2">
                                                <field.icon className="w-4 h-4" />
                                                {field.label}
                                            </label>
                                            <input
                                                required={field.label.includes("*")}
                                                name={field.name}
                                                type={field.type}
                                                value={formData[field.name]}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#27346a] flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4" />
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all duration-200 resize-none"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center text-lg transition-all duration-300"
                                    >
                                        <Send className="w-5 h-5 mr-2" />
                                        Submit Request
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => window.open('tel:+15551234567', '_self')}
                                        className="flex-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-4 rounded-xl flex items-center justify-center text-lg transition-all duration-300"
                                    >
                                        <Phone className="w-5 h-5 mr-2" />
                                        Call Us
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                    {contactInfo.map((contact, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-orange-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center">
                                    <contact.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#27346a] mb-1">{contact.title}</h3>
                                    <a
                                        href={contact.href}
                                        className="text-orange-500 hover:text-orange-600 font-semibold block mb-1"
                                    >
                                        {contact.details}
                                    </a>
                                    <p className="text-sm text-gray-600">{contact.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Business Hours */}
                    <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-3xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Clock className="w-6 h-6 text-orange-500" />
                            <h3 className="font-bold text-[#27346a]">Business Hours</h3>
                        </div>
                        <div className="text-sm space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Mon - Fri:</span>
                                <span className="font-semibold text-[#27346a]">9 AM - 6 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Saturday:</span>
                                <span className="font-semibold text-[#27346a]">10 AM - 4 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Sunday:</span>
                                <span className="font-semibold text-[#27346a]">Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-[#27346a] text-center mb-12">
                        Our Global Offices
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {officeLocations.map((office, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-orange-200 rounded-3xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-bold text-[#27346a] text-xl mb-2">{office.city}</h3>
                                <p className="text-gray-600 mb-2">{office.address}</p>
                                <span className="text-sm text-orange-500 font-semibold">
                  Timezone: {office.timezone}
                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
