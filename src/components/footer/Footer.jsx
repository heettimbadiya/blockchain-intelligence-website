import React from 'react';

function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Chainalysis</h3>
                            <p className="text-gray-400">
                                Pioneering blockchain intelligence for a secure digital economy.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Solutions</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="/" className="hover:text-white">Investigations</a></li>
                                <li><a href="/" className="hover:text-white">Compliance</a></li>
                                <li><a href="/" className="hover:text-white">Web3 Security</a></li>
                                <li><a href="/" className="hover:text-white">Analytics</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="/about" className="hover:text-white">About Us</a></li>
                                <li><a href="/careers" className="hover:text-white">Careers</a></li>
                                <li><a href="/culture" className="hover:text-white">News</a></li>
                                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                                <li><a href="/resources" className="hover:text-white">Resource</a></li>
                                <li><a href="/Solution" className="hover:text-white">Solutions</a></li>
                                <li><a href="/contact" className="hover:text-white">Support</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Chainalysis. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;