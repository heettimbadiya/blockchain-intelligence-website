import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";

function Investigations() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-4">Advanced Blockchain Investigations</h2>
      <p className="mb-4">Uncover illicit activity and analyze complex networks. Our investigations platform provides unparalleled visibility into the flow of funds across diverse blockchains. Empower law enforcement, intelligence agencies, and financial institutions to dismantle criminal networks and recover stolen assets.</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Comprehensive Transaction Tracing</li>
        <li>Entity Identification</li>
        <li>Visualization Tools</li>
        <li>Case Management</li>
        <li>Threat Intelligence</li>
      </ul>
      <button className="bg-orange-600 text-white py-2 px-4 rounded font-semibold">Request a Demo</button>
    </div>
  );
}

function Compliance() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-4">Real-time Crypto Compliance & Risk Mitigation</h2>
      <p className="mb-4">Automated, real-time monitoring and risk assessment tools to help you meet AML/CFT obligations, prevent illicit transactions, and build trust with regulators and customers.</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Real-time Transaction Monitoring (KYT)</li>
        <li>VASP Risking</li>
        <li>Address Screening</li>
        <li>Risk Scoring & Reporting</li>
        <li>Policy Enforcement</li>
      </ul>
      <button className="bg-orange-600 text-white py-2 px-4 rounded font-semibold">Request a Demo</button>
    </div>
  );
}

function Web3Security() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-4">Securing the Decentralized Future</h2>
      <p className="mb-4">Safeguard decentralized applications, smart contracts, and blockchain networks from exploits, scams, and vulnerabilities. Proactive identification and prevention of threats.</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Exploit Detection & Prevention</li>
        <li>Smart Contract Auditing</li>
        <li>DeFi & NFT Risk Assessment</li>
        <li>Incident Response Support</li>
        <li>Supply Chain Security</li>
      </ul>
      <button className="bg-orange-600 text-white py-2 px-4 rounded font-semibold">Request a Demo</button>
    </div>
  );
}

function Analytics() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-4">Data-Driven Decisions for the Blockchain Economy</h2>
      <p className="mb-4">Transform raw blockchain data into actionable intelligence. Customizable dashboards and market intelligence for informed decisions.</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Customizable Dashboards</li>
        <li>Market Intelligence</li>
        <li>Entity Profiling</li>
        <li>API Access</li>
        <li>Research & Reporting</li>
      </ul>
      <button className="bg-orange-600 text-white py-2 px-4 rounded font-semibold">Request a Demo</button>
    </div>
  );
}

export default function Solutions() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 border rounded-lg bg-white shadow">
          <h2 className="text-2xl font-semibold mb-2">Investigations & Forensics</h2>
          <p className="mb-4">Uncover illicit activity and analyze complex networks. Advanced analytics for law enforcement, intelligence agencies, and financial institutions.</p>
          <Link to="/solutions/investigations" className="text-orange-600 font-medium">Learn More</Link>
        </div>
        <div className="p-6 border rounded-lg bg-white shadow">
          <h2 className="text-2xl font-semibold mb-2">Compliance & Risk Management</h2>
          <p className="mb-4">Real-time crypto compliance and risk mitigation. Automated monitoring and risk assessment tools for regulatory adherence.</p>
          <Link to="/solutions/compliance" className="text-orange-600 font-medium">Learn More</Link>
        </div>
        <div className="p-6 border rounded-lg bg-white shadow">
          <h2 className="text-2xl font-semibold mb-2">Web3 Security</h2>
          <p className="mb-4">Protect your protocols, chains, and assets from emerging Web3 threats. Proactive identification and prevention of vulnerabilities.</p>
          <Link to="/solutions/web3-security" className="text-orange-600 font-medium">Learn More</Link>
        </div>
        <div className="p-6 border rounded-lg bg-white shadow">
          <h2 className="text-2xl font-semibold mb-2">Strategic Insights & Data Analytics</h2>
          <p className="mb-4">Transform raw blockchain data into actionable intelligence. Customizable dashboards and market intelligence for informed decisions.</p>
          <Link to="/solutions/analytics" className="text-orange-600 font-medium">Learn More</Link>
        </div>
      </div>
      <Routes>
        <Route path="investigations" element={<Investigations />} />
        <Route path="compliance" element={<Compliance />} />
        <Route path="web3-security" element={<Web3Security />} />
        <Route path="analytics" element={<Analytics />} />
      </Routes>
      <Outlet />
    </div>
  );
} 