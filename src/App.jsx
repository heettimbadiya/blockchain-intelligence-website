import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Menu, X, Search, Shield, BarChart3, Lock, ChevronRight, Users, Globe, TrendingUp } from 'lucide-react'
import './App.css'

// Import assets
import heroIllustration from './assets/hero_illustration.png'
import investigationsIcon from './assets/investigations_icon.png'
import complianceIcon from './assets/compliance_icon.png'
import securityIcon from './assets/security_icon.png'
import analyticsIcon from './assets/analytics_icon.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold" style={{color: 'var(--navy-blue)'}}>
                  BlockIntel
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#solutions" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                  Solutions
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="#resources" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                  Resources
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                  Contact
                </a>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                className="text-white font-medium px-6 py-2 rounded-lg transition-colors"
                style={{backgroundColor: 'var(--orange-accent)'}}
              >
                Request a Demo
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-900 focus:outline-none focus:text-blue-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#solutions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900">
                Solutions
              </a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900">
                About
              </a>
              <a href="#resources" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900">
                Resources
              </a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button 
                  className="w-full text-white font-medium py-2 rounded-lg"
                  style={{backgroundColor: 'var(--orange-accent)'}}
                >
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{backgroundColor: 'var(--light-gray)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{color: 'var(--navy-blue)'}}>
                Blockchain Intelligence for a Safer Digital Economy
              </h1>
              <p className="text-xl mb-8" style={{color: 'var(--text-light)'}}>
                Empowering governments, businesses, and financial institutions with the data and tools to navigate the complex world of cryptocurrency with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="text-white font-medium px-8 py-3 rounded-lg"
                  style={{backgroundColor: 'var(--orange-accent)'}}
                >
                  Request a Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="font-medium px-8 py-3 rounded-lg border-2"
                  style={{borderColor: 'var(--navy-blue)', color: 'var(--navy-blue)'}}
                >
                  Explore Solutions
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={heroIllustration} 
                alt="Blockchain Intelligence Illustration" 
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--navy-blue)'}}>
              Trusted by Over 1,500 Customers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold mb-2" style={{color: 'var(--orange-accent)'}}>
                  9/10
                </div>
                <p className="text-gray-600">
                  Leading crypto exchanges trust our platform for compliance and risk management
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold mb-2" style={{color: 'var(--orange-accent)'}}>
                  $12.6B+
                </div>
                <p className="text-gray-600">
                  In illicit funds identified and recovered with our intelligence
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold mb-2" style={{color: 'var(--orange-accent)'}}>
                  50+
                </div>
                <p className="text-gray-600">
                  Regulatory bodies worldwide rely on our data to shape policy and protect consumers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section id="solutions" className="py-20" style={{backgroundColor: 'var(--light-gray)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: 'var(--navy-blue)'}}>
              Comprehensive Blockchain Intelligence Solutions
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-light)'}}>
              From investigations to compliance, we provide the tools and insights you need to operate safely in the digital asset ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow border-2 hover:border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <img src={investigationsIcon} alt="Investigations" className="w-full h-full" />
                </div>
                <CardTitle className="text-xl mb-2" style={{color: 'var(--navy-blue)'}}>
                  Investigations & Forensics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Uncover the truth behind complex crypto transactions. Advanced analytics trace funds and identify illicit actors.
                </p>
                <Button variant="ghost" className="p-0 h-auto font-medium" style={{color: 'var(--orange-accent)'}}>
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-2 hover:border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <img src={complianceIcon} alt="Compliance" className="w-full h-full" />
                </div>
                <CardTitle className="text-xl mb-2" style={{color: 'var(--navy-blue)'}}>
                  Compliance & Risk Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ensure regulatory adherence and mitigate financial crime risks with real-time monitoring and screening.
                </p>
                <Button variant="ghost" className="p-0 h-auto font-medium" style={{color: 'var(--orange-accent)'}}>
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-2 hover:border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <img src={securityIcon} alt="Security" className="w-full h-full" />
                </div>
                <CardTitle className="text-xl mb-2" style={{color: 'var(--navy-blue)'}}>
                  Web3 Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Protect your protocols, chains, and assets from exploits and scams with cutting-edge intelligence.
                </p>
                <Button variant="ghost" className="p-0 h-auto font-medium" style={{color: 'var(--orange-accent)'}}>
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-2 hover:border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <img src={analyticsIcon} alt="Analytics" className="w-full h-full" />
                </div>
                <CardTitle className="text-xl mb-2" style={{color: 'var(--navy-blue)'}}>
                  Strategic Insights & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Transform raw blockchain data into strategic advantages with comprehensive analytics and insights.
                </p>
                <Button variant="ghost" className="p-0 h-auto font-medium" style={{color: 'var(--orange-accent)'}}>
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: 'var(--navy-blue)'}}>
              The BlockIntel Difference
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-light)'}}>
              Why leading organizations choose our blockchain intelligence platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 p-4 rounded-full" style={{backgroundColor: 'var(--light-gray)'}}>
                <BarChart3 className="w-8 h-8" style={{color: 'var(--navy-blue)'}} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{color: 'var(--navy-blue)'}}>
                Unparalleled Data Accuracy
              </h3>
              <p className="text-gray-600">
                Our proprietary machine learning and robust architecture ensure the most precise and reliable blockchain data in the industry.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 p-4 rounded-full" style={{backgroundColor: 'var(--light-gray)'}}>
                <Globe className="w-8 h-8" style={{color: 'var(--navy-blue)'}} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{color: 'var(--navy-blue)'}}>
                Comprehensive Coverage
              </h3>
              <p className="text-gray-600">
                Seamlessly integrate new blockchains and support all major tokens, providing an unmatched view of the crypto landscape.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 p-4 rounded-full" style={{backgroundColor: 'var(--light-gray)'}}>
                <Users className="w-8 h-8" style={{color: 'var(--navy-blue)'}} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{color: 'var(--navy-blue)'}}>
                Expert Support & Innovation
              </h3>
              <p className="text-gray-600">
                Benefit from our global team's 24/7 expertise and dedicated R&D initiatives that continuously deliver groundbreaking features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" style={{backgroundColor: 'var(--light-gray)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{color: 'var(--navy-blue)'}}>
              Get in Touch with Our Experts
            </h2>
            <p className="text-xl" style={{color: 'var(--text-light)'}}>
              Ready to learn how blockchain intelligence can transform your operations? Contact us today.
            </p>
          </div>

          <Card className="p-8">
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="Enter your work email" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="role">Role</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="executive">Executive</SelectItem>
                        <SelectItem value="compliance">Compliance Officer</SelectItem>
                        <SelectItem value="security">Security Professional</SelectItem>
                        <SelectItem value="analyst">Data Analyst</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Enter your country" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your specific needs or questions"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full text-white font-medium py-3 rounded-lg"
                  style={{backgroundColor: 'var(--orange-accent)'}}
                >
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BlockIntel</h3>
              <p className="text-gray-400">
                Pioneering blockchain intelligence for a secure digital economy.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Investigations</a></li>
                <li><a href="#" className="hover:text-white">Compliance</a></li>
                <li><a href="#" className="hover:text-white">Web3 Security</a></li>
                <li><a href="#" className="hover:text-white">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">News</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Research</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BlockIntel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

