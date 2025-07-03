import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag, Clock, Share2 } from "lucide-react";

const posts = [
    {
      id: 1,
      title: "Understanding Crypto Compliance in 2025",
      excerpt:
        "Explore the evolving landscape of cryptocurrency regulations and how your business can stay compliant with the latest requirements.",
      date: "June 15, 2025",
      readTime: "8 min read",
      author: "Sarah Chen",
      category: "Compliance",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQHweiZHRLJ-lw/article-cover_image-shrink_720_1280/B56Zd04bCSHEAc-/0/1750012647242?e=2147483647&v=beta&t=THX0Hux9Di6mUgHI06EGAX8dK0LtYYW2zxlvo4aTmDk",
      content: `
        <p>Cryptocurrency compliance has become an essential aspect of operating in the blockchain industry. In 2025, regulations have evolved to address emerging risks while encouraging innovation.</p>
        <p>This comprehensive guide explores key areas of compliance including KYC, AML policies, and tax reporting requirements that every crypto business must understand.</p>
        <h2>Why Compliance Matters More Than Ever</h2>
        <p>With increasing regulatory scrutiny from governments worldwide, businesses must ensure they implement robust compliance programs to protect users and maintain trust in the ecosystem.</p>
        <h3>Essential Compliance Components</h3>
        <ul>
          <li><strong>Know Your Customer (KYC) processes</strong> - Verify user identities and assess risk levels</li>
          <li><strong>Anti-Money Laundering (AML) monitoring</strong> - Detect and prevent suspicious transactions</li>
          <li><strong>Smart contract audits</strong> - Ensure code security and functionality</li>
          <li><strong>Data protection measures</strong> - Safeguard user information and privacy</li>
        </ul>
        <p>Adhering to these practices will position your organization for long-term success and help build trust with regulators and users alike.</p>
        <h2>Implementation Strategies</h2>
        <p>Successful compliance implementation requires a systematic approach that balances regulatory requirements with user experience and operational efficiency.</p>
      `,
    },
    {
      id: 2,
      title: "Top Blockchain Security Risks & How to Avoid Them",
      excerpt:
        "Discover common vulnerabilities in smart contracts and decentralized protocols, and learn proven strategies to mitigate them.",
      date: "May 28, 2025",
      readTime: "12 min read",
      author: "Alex Rodriguez",
      category: "Security",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBl-XF1IUYv1ZUseqzVRiw2nlICrXxmdlVgoyeakrSWzk3eWFCeokoW0c-qtXp_2oHi0&usqp=CAU",
      content: `
        <p>As decentralized applications grow in popularity, so do security threats. This comprehensive guide will help you understand the most critical risks in blockchain development and how to protect against them.</p>
        <h2>Common Vulnerabilities in Smart Contracts</h2>
        <p>Understanding these vulnerabilities is the first step toward building secure decentralized applications.</p>
        <ul>
          <li><strong>Reentrancy attacks</strong> - Malicious contracts calling back into your contract</li>
          <li><strong>Integer overflows and underflows</strong> - Mathematical errors in calculations</li>
          <li><strong>Front-running transactions</strong> - Exploiting transaction ordering</li>
          <li><strong>Access control issues</strong> - Improper permission management</li>
        </ul>
        <p>By following secure coding practices and conducting thorough audits, you can significantly reduce exposure to these threats and protect your users' assets.</p>
        <h2>Best Practices for Secure Development</h2>
        <p>Implementing these security measures from the start of your project will save time and resources while protecting your users.</p>
      `,
    },
    {
      id: 3,
      title: "The Future of DeFi: Trends to Watch",
      excerpt:
        "A comprehensive look ahead at how decentralized finance will transform global markets in the next decade.",
      date: "April 10, 2025",
      readTime: "6 min read",
      author: "Michael Thompson",
      category: "DeFi",
      image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Q5Tr5VHnXSQzXWiRDWgKhw.jpeg",
      content: `
        <p>Decentralized Finance (DeFi) is evolving rapidly and promises to reshape the financial landscape in unprecedented ways.</p>
        <h2>Emerging Trends Shaping DeFi's Future</h2>
        <p>These key developments will define the next phase of decentralized finance evolution.</p>
        <ul>
          <li><strong>Cross-chain interoperability</strong> - Seamless asset transfers between blockchains</li>
          <li><strong>Algorithmic stablecoins</strong> - Self-regulating digital currencies</li>
          <li><strong>Decentralized identity</strong> - User-controlled digital identity solutions</li>
          <li><strong>Institutional adoption</strong> - Traditional finance embracing DeFi protocols</li>
        </ul>
        <p>Staying ahead of these trends will help your business leverage DeFi innovations and maintain a competitive edge in the rapidly evolving financial technology landscape.</p>
      `,
    },
    {
      id: 4,
      title: "Smart Contract Auditing Best Practices",
      excerpt: "Essential guidelines and methodologies for conducting thorough smart contract security audits.",
      date: "March 22, 2025",
      readTime: "10 min read",
      author: "Emma Davis",
      category: "Security",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HzU_B4TrV324a9d8cRwUtT5H5STe4iDAvg&s",
      content: `
        <p>Smart contracts are at the core of decentralized applications, and their security is paramount. A comprehensive audit process can mean the difference between a successful launch and a costly exploit.</p>
        <p>This guide outlines the essential practices and methodologies that security professionals use to identify vulnerabilities and ensure contract reliability.</p>
        <h2>The Audit Process: A Systematic Approach</h2>
        <p>Effective smart contract auditing requires a multi-layered approach that combines automated tools with expert manual review.</p>
        <h3>Core Audit Strategies</h3>
        <ul>
          <li><strong>Manual code reviews by experienced auditors</strong> - Human expertise to catch complex logic flaws</li>
          <li><strong>Automated vulnerability scanning</strong> - Tools to identify common security patterns</li>
          <li><strong>Formal verification of critical logic</strong> - Mathematical proofs of contract correctness</li>
          <li><strong>Gas optimization analysis</strong> - Ensuring efficient contract execution</li>
          <li><strong>Integration testing</strong> - Verifying interactions with external contracts</li>
        </ul>
        <p>Implementing these best practices reduces the risk of exploits and builds user confidence in your platform.</p>
        <h2>Post-Audit Considerations</h2>
        <p>The audit process doesn't end with the report. Proper remediation and ongoing monitoring are crucial for maintaining security over time.</p>
      `,
    },
    {
      id: 5,
      title: "Regulatory Updates: What's New in 2025",
      excerpt:
        "Stay up-to-date with the latest cryptocurrency regulations and compliance requirements across different jurisdictions.",
      date: "February 18, 2025",
      readTime: "7 min read",
      author: "David Wilson",
      category: "Compliance",
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQEZ5zvS90E01w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1735441902880?e=2147483647&v=beta&t=_z7OKfXCAXTC70XoJOZpuxpP3RWuJkjssNhvRvPRzHE",
      content: `
        <p>The regulatory environment for cryptocurrency continues to evolve in 2025, with significant updates impacting exchanges, DeFi platforms, and digital asset service providers worldwide.</p>
        <p>Understanding these changes is crucial for maintaining compliance and avoiding costly penalties in an increasingly regulated industry.</p>
        <h2>Major Regulatory Developments</h2>
        <p>Governments worldwide have introduced new frameworks to address the growing crypto ecosystem while balancing innovation with consumer protection.</p>
        <h3>Key Changes Across Jurisdictions</h3>
        <ul>
          <li><strong>Stricter KYC requirements</strong> - Enhanced identity verification for all crypto transactions</li>
          <li><strong>Expanded tax reporting obligations</strong> - More comprehensive reporting for digital asset transactions</li>
          <li><strong>New licensing frameworks for stablecoins</strong> - Specific regulations for algorithmic and asset-backed stablecoins</li>
          <li><strong>DeFi protocol registration requirements</strong> - Compliance obligations for decentralized platforms</li>
          <li><strong>Cross-border transaction monitoring</strong> - Enhanced oversight of international crypto transfers</li>
        </ul>
        <p>Keeping abreast of these changes ensures your business remains compliant and avoids penalties while maintaining operational efficiency.</p>
        <h2>Preparing for Future Regulations</h2>
        <p>Proactive compliance strategies will help businesses adapt quickly to new regulatory requirements as they emerge.</p>
      `,
    },
    {
      id: 6,
      title: "Building Scalable DeFi Applications",
      excerpt:
        "Technical insights and architectural patterns for developing high-performance decentralized finance applications.",
      date: "January 30, 2025",
      readTime: "15 min read",
      author: "Lisa Park",
      category: "DeFi",
      image: "https://www.solulab.com/wp-content/uploads/2025/03/Build-Defi-apps.png",
      content: `
        <p>Scalability is a critical factor in the success of any DeFi application. As the ecosystem grows, developers must implement sophisticated architectural patterns to handle increasing user demand and transaction volumes.</p>
        <p>This comprehensive guide explores proven techniques and emerging technologies for building robust, high-performance DeFi platforms that can scale with your user base.</p>
        <h2>Understanding Scalability Challenges</h2>
        <p>DeFi applications face unique scalability challenges due to blockchain limitations, complex smart contract interactions, and the need for real-time data processing.</p>
        <h3>Scalable Design Principles</h3>
        <ul>
          <li><strong>Layer 2 solutions</strong> - Optimistic rollups and zk-rollups for faster, cheaper transactions</li>
          <li><strong>Sharding and parallelization</strong> - Distributing computational load across multiple chains</li>
          <li><strong>Optimized smart contract architecture</strong> - Gas-efficient code patterns and modular design</li>
          <li><strong>Off-chain computation</strong> - Moving complex calculations off the main blockchain</li>
          <li><strong>State channel implementations</strong> - Enabling instant, low-cost microtransactions</li>
        </ul>
        <p>By adopting these principles, you can deliver fast, reliable experiences to your users and stay ahead of the competition in the rapidly evolving DeFi landscape.</p>
        <h2>Implementation Strategies</h2>
        <p>Successful scalability requires careful planning and the right combination of technologies tailored to your specific use case and user requirements.</p>
        <h3>Performance Optimization Techniques</h3>
        <p>From smart contract optimization to infrastructure scaling, every component of your DeFi application contributes to overall performance and user experience.</p>
      `,
    },
  ]
  

export default function SingleBlogPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number.parseInt(id, 10));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500 text-lg">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm mb-4">
              <Tag className="w-3 h-3 mr-1" />
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#27346a] mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap justify-center gap-6 text-slate-600 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="w-full h-64 md:h-80 lg:h-96">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="mb-8 p-6 bg-slate-50 rounded-xl border-l-4 border-orange-500">
                <p className="text-lg text-slate-700 leading-relaxed italic">
                  {post.excerpt}
                </p>
              </div>

              <div
                className="prose prose-lg prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              </div>
          </article>
          </div>
      </section>
    </div>
  );
}
