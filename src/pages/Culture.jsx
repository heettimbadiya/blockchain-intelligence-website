import React from "react";

export default function Culture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#27346a] mb-6">Our Culture</h1>
        <div className="w-24 h-1.5 bg-orange-500 rounded-full mx-auto mb-6"></div>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          We believe in innovation, collaboration, and integrity. Our culture empowers every team member to grow, contribute, and make a real impact in the blockchain space.
        </p>
        <div className="bg-white/80 rounded-xl shadow p-6 mb-10 border border-blue-100">
          <h2 className="text-2xl font-bold text-[#27346a] mb-2">A Place Where You Belong</h2>
          <p className="text-gray-700 mb-2">
            We foster a supportive, inclusive environment where everyone's voice is valued. Our team is made up of people from diverse backgrounds, united by a shared passion for technology and positive change.
          </p>
          <p className="text-gray-700 mb-2">
            We believe in work-life balance and offer flexible arrangements so you can do your best work—whether that's in the office, at home, or somewhere in between.
          </p>
          <p className="text-gray-700">
            Continuous learning is at our core. We encourage curiosity, provide opportunities for professional growth, and celebrate every milestone together.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-orange-600 mb-2">Innovation</h2>
            <p className="text-gray-600">We push boundaries and embrace new ideas to stay ahead in the industry.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-orange-600 mb-2">Integrity</h2>
            <p className="text-gray-600">We uphold the highest ethical standards in everything we do.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-orange-600 mb-2">Collaboration</h2>
            <p className="text-gray-600">We work together to achieve shared success and support each other.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-orange-600 mb-2">Impact</h2>
            <p className="text-gray-600">We strive to make a meaningful difference in the blockchain ecosystem.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-[#27346a] mb-2">Ready to make an impact?</h2>
          <p className="text-gray-700">
            Join us and be part of a team where your ideas matter, your growth is supported, and your work shapes the future of blockchain technology.
          </p>
        </div>
      </div>
    </div>
  );
} 