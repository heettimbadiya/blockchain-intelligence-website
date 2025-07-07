import React from "react";
import { useNavigate } from "react-router-dom";
import right1 from '../../assets/home/right1.webp'
import right2 from '../../assets/home/right2.webp'
import right3 from '../../assets/home/right3.webp'
import left1 from '../../assets/home/left1.webp'
import left2 from '../../assets/home/left2.webp'
import homeDataSolutions from '../../assets/home/home-data-solutions-1.webp'
import {CheckCircle} from "lucide-react";


export default function SolutionsOverviewSection() {

  const navigate = useNavigate();
  const features = [
    {
      title: "Trace illicit activity and analyze networks",
      description:
          "Understand the entire flow of funds from source to destination. Discover leads, analyze activities, and pursue threats across chains, web3 infrastructure, and more. Visualize illicit networks and gather actionable intelligence to combat crypto crime.",
      buttonText: "Explore Reactor",
      imageUrl: right1,
      reverse: false,
    },
    {
      title: "Monitor activity and manage risky exposure to your platform",
      description:
          "Ensure compliance and prevent illicit activity with continuous and real-time screening of crypto transactions. Tailor your risk settings, assess deposits and withdrawals, and audit suspicious user activity.",
      buttonText: "Explore KYT",
      imageUrl: left1,
      reverse: true,
    },
    {
      title: "Assess risk profiles of on-chain entities",
      description:
          "Leverage on-chain intelligence to screen wallet addresses, virtual asset service providers (VASPs), or entire token ecosystems to identify and respond to potential risks and ensure compliance with regulations.",
      buttonText: "VASP Risking",
      buttonText2: "Address Screening",
      imageUrl: right2,
      reverse: false,
    },
    {
      title: "Harden your web3 security",
      description:
          "Leverage enterprise-grade security to prevent cyber exploits, scams, financial risks and more for protocols, chains, asset managers, and exchanges.",
      buttonText: "Web3 security with Hexagate",
      imageUrl: left2,
      reverse: true,
    },
    {
      title: "Identify scammers before they meet their victims",
      description:
          "Prevent evolving threats with AI-powered fraud detection to reduce payments-related fraud, build customer trust, and protect your reputation.",
      buttonText: "Fraud prevention with Alterya",
      imageUrl: right3,
      reverse: false,
    },
  ];

  const features2 = [
    {
      title: "Data you can trust",
      description:
          "Using sophisticated machine learning techniques coupled with proprietary architecture, we are built to handle hundreds of clustering heuristics, ingest data at scale, and verify data accuracy with the lowest tolerance for error in the industry."
    },
    {
      title: "Complete blockchain coverage",
      description:
          "Chainalysis seamlessly onboards new blockchains and automatically supports all tokens that follow widely adopted standards. This approach guarantees instant compatibility and the most comprehensive blockchain coverage in the industry."
    },
    {
      title: "Cross-chain tracing",
      description:
          "Chainalysis simplifies the complex and makes it effortless to trace the flow of funds through bridges, mixers, DEX swaps, and more."
    },
    {
      title: "Used as evidence in highest profile industry cases",
      description:
          "Chainalysis data is court admissible and has uniquely helped customers take ground-breaking actions in court."
    },
    {
      title: "Experts by your side",
      description:
          "Our global team supports you along your journey bringing 24/7 unmatched experience, localized guidance, an understanding of diverse threat typologies, as well as how to execute on advanced investigative techniques."
    },
    {
      title: "Continuous innovation",
      description:
          "Chainalysis pioneered blockchain intelligence, and we continue to build on our tradition of innovation. Our R&D initiative brings new features and capabilities that are unique to Chainalysis."
    }
  ];

  const newsItems = [
    {
      date: "JUL 02, 2025",
      title: "OFACがAeza Groupを制裁：サイバー犯罪と技術窃盗を可能にした防弾ホスティングと関連暗号資産アドレス",
      link: "/blog/1"
    },
    {
      date: "JUL 01, 2025",
      title: "OFAC Sanctions Aeza Group for Hosting Global Bulletproof Service which Enabled Cybercriminals and Technology Theft, Includes Crypto Address in Designation",
      link: "/blog/2"
    },
    {
      date: "JUN 26, 2025",
      title: "The Road to Crypto Regulation Part 1: Crypto’s Journey from Margins to Mainstream",
      link: "/blog/3"
    },
    {
      date: "JUN 18, 2025",
      title: "Nobitex, Sanctions, and The $90 Million Exploit: A Window into Iran’s Largest Crypto Exchange",
      link: "/blog/4"
    },
    {
      date: "JUN 18, 2025",
      title: "The Security Risks of Stablecoins: How Hackers Exploit Centralized and Decentralized Issuers",
      link: "/blog/5"
    }
  ];

  return (
      <>
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-20">
            {features.map((item, idx) => (
                <div
                    key={idx}
                    className={`flex flex-col-reverse ${
                        item.reverse ? "md:flex-row-reverse" : "md:flex-row"
                    } items-center gap-10`}
                >
                  {/* Text Content */}
                  <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#1b2653] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <div>

                      <div className={item.buttonText2 ? "flex flex-col sm:flex-row gap-2" : ""}>
                      <button className="px-6 cursor-pointer py-3 border border-[#1b2653] text-[#1b2653] font-extrabold rounded-full hover:bg-[#1b2653] hover:text-white transition" onClick={() => navigate("/contact")}>
                        {item.buttonText}
                      </button>

                      {item.buttonText2 && <div className={'sm:mr-2 mt-3 sm:mt-0'}> <button
                          className="px-6 cursor-pointer py-3 border border-[#1b2653] text-[#1b2653] font-extrabold rounded-full hover:bg-[#1b2653] hover:text-white mr-5" onClick={() => navigate("/contact")}>
                        {item.buttonText2}
                      </button> </div>}
                    </div>

                    </div>
                  </div>

                  {/* Image */}
                  <div className="md:w-1/2">
                    <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full max-w-md mx-auto"
                    />
                  </div>
                </div>
            ))}
          </div>
        </section>
        <section className={'py-6 mb-12'}>
          <div className="max-w-7xl py-16 bg-[#f5f7fa] rounded-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-evenly">

            {/* Image Side */}
            <div className="w-full md:w-1/2 flex justify-center relative">
              {/* Background chart image */}
              <img src={homeDataSolutions} alt="Code Chart" className="w-64 md:w-72 relative z-0" />

            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1b2653] mb-4">
                Identify leads, generate insights,<br className="hidden md:block" />
                and make strategic decisions
              </h2>
              <p className="text-gray-600 mb-6 text-base md:text-lg">
                Build bespoke analyses and alerting with the industry’s most trusted blockchain intelligence to generate new leads and take action on data-driven insights to advance your mission.
              </p>
              <button
                  onClick={() => navigate("/contact")}
                  className="px-6 cursor-pointer py-3 border border-[#1b2653] text-[#1b2653] font-extrabold rounded-full hover:bg-[#1b2653] hover:text-white transition"
              >
                Explore Chainalysis DS
              </button>
            </div>

          </div>
        </section>
        <section className="py-24 bg-[#122149] text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12">The Chainalysis difference</h2>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14 text-left">
              {features2.map((feature, idx) => (
                  <div key={idx}>
                      <div className={'mb-4'}>
                        <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  <div  className="flex items-start gap-4">
                    <div>
                      <h3 className="text-[22px] font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-300 text-md">{feature.description}</p>
                    </div>
                  </div>
                  </div>
              ))}
            </div>

            {/* Button */}
                <div className="mt-10">
                  <button
                      onClick={() => navigate('/contact')}
                      className="px-6 py-2 cursor-pointer bg-[#00e3aa] text-[#0f1e53] font-semibold rounded-full hover:bg-[#00c795] transition"
                  >
                    Why Chainalysis
                  </button>
                </div>
          </div>
        </section>
        <section className="py-22 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-extrabold text-[#1b2653] mb-2">Latest news</h2>
              <button
                  onClick={() => navigate('/blog')}
                  className="text-[#1b2653] cursor-pointer underline font-medium text-sm hover:text-orange-500 transition"
              >
                View the blog
              </button>
            </div>

            {/* News List */}
            <div className="md:col-span-3 space-y-6">
              {newsItems.map((item, idx) => (
                  <div
                      key={idx}
                      className="border-t border-gray-300 py-4 flex flex-col md:flex-row justify-between gap-2"
                  >
                    <div className="text-sm uppercase text-[#1b2653] font-bold mb-1 whitespace-nowrap">
                      {item.date}
                    </div>
                    <button
                        onClick={() => navigate(item.link)}
                        className="text-[#1b2653] cursor-pointer text-base md:text-xl font-bold text-left transition-colors hover:text-orange-500 w-full md:w-[700px]"
                    >
                      {item.title}
                    </button>
                  </div>
              ))}
            </div>

          </div>
        </section>

      </>
  );
} 