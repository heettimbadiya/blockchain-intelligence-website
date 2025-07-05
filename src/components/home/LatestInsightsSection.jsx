import React from "react";
import { useNavigate } from "react-router-dom";

export default function LatestInsightsSection() {
  const navigate = useNavigate();

  return (
      <section className="w-full">
        {/* Gradient Banner */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-400 py-24 px-4 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get started—chat with one of our experts.
          </h2>
          <button
              onClick={() => navigate("/contact")}
              className="bg-[#27346a] hover:bg-[#1b2653] text-white font-semibold py-3 px-6 rounded-full transition-colors"
          >
            Request a demo
          </button>
        </div>

        {/* Newsletter Section */}
        <div className="py-16 px-4 md:px-8 mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h3 className="text-2xl md:text-4xl font-bold text-[#27346a] text-center md:text-left">
            Subscribe to our weekly newsletter
          </h3>
          <form
              onSubmit={(e) => {
                e.preventDefault();
                // Add subscribe logic here
              }}
              className="flex flex-col sm:flex-row gap-3 w-full md:max-w-xl"
          >
            <input
                type="email"
                required
                placeholder="Email Address"
                className="border border-gray-300 px-5 py-3 w-full min-w-0 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
                type="submit"
                className="bg-[#27346a] hover:bg-[#1b2653] text-white font-semibold px-8 py-3 rounded-full transition-colors w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
  );
}
