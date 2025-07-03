import React from "react";

const jobs = [
  {
    title: "Frontend React Developer",
    location: "Remote / India",
    type: "Full-time",
    description:
      "Build beautiful, scalable web applications using React and modern JavaScript. Collaborate with designers and backend engineers to deliver seamless user experiences.",
    requirements: [
      "2+ years experience with React.js",
      "Strong CSS/JS skills",
      "Familiarity with REST APIs",
      "Attention to detail and UX",
    ],
  },
  {
    title: "Blockchain Analyst",
    location: "Bangalore, India",
    type: "Full-time",
    description:
      "Analyze blockchain data, monitor trends, and provide actionable insights for compliance and security. Work with a global team to support investigations and research.",
    requirements: [
      "Degree in Computer Science, Math, or related field",
      "Experience with blockchain explorers",
      "Analytical mindset",
      "Excellent written communication",
    ],
  },
  {
    title: "Product Designer",
    location: "Remote / Hybrid",
    type: "Contract",
    description:
      "Design intuitive, modern interfaces for our blockchain intelligence platform. Work closely with product and engineering to turn ideas into reality.",
    requirements: [
      "Portfolio of web/app design work",
      "Proficiency in Figma or Sketch",
      "Strong sense of visual hierarchy",
      "User-centered design approach",
    ],
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex flex-col items-center py-12 px-4">
      {/* Mission & Values */}
      <section className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-[#27346a] mb-4">Join Our Team</h1>
        <div className="w-24 h-1.5 bg-orange-500 rounded-full mx-auto mb-6"></div>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          We're building the future of blockchain intelligence. Our mission is to empower organizations with the tools and insights they need to navigate the evolving world of crypto with confidence, security, and compliance.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium text-sm">Innovation</span>
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm">Integrity</span>
          <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium text-sm">Collaboration</span>
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium text-sm">Growth</span>
        </div>
      </section>

      {/* Job Listings */}
      <section className="max-w-4xl w-full mb-16">
        <h2 className="text-3xl font-bold text-[#27346a] mb-8 text-center">Open Positions</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job, idx) => (
            <div key={job.title} className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-orange-600 mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3 text-sm">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{job.location}</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{job.type}</span>
                </div>
                <p className="text-gray-700 mb-3">{job.description}</p>
                <ul className="list-disc list-inside text-gray-600 mb-2">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-2xl w-full text-center mb-8">
        <div className="bg-white/90 rounded-xl shadow p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-[#27346a] mb-2">Don't see your dream job?</h2>
          <p className="text-gray-700 mb-4">
            We're always looking for talented people. If you're passionate about blockchain, compliance, or security, send us your resume and tell us how you can make a difference.
          </p>
        </div>
      </section>
    </div>
  );
} 