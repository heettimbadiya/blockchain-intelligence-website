import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        {/* 404 Icon */}
        <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="#ff6600"
              className="w-12 h-12"
          >
            <path d="M50 0c1.12 0 2.39.14 2.39.14a28.31 28.31 0 00-6.48 15.92 33.76 33.76 0 00-27.86 28.59c-6.47.7-13.79 3.66-18 7.89C-.95 23.52 21.29 0 50 0zm7.2 87.18a27 27 0 01-4 .29 49.17 49.17 0 01-6.9-.57 51.83 51.83 0 01-7 12A50 50 0 011.72 62.82c4.51-5.35 14.93-8.45 21.4-8.45 13.8 0 21.12 7.32 23.66 18.73-8.31-2.25-13.24-6.9-16.48-13.8a16.68 16.68 0 00-5.91-1 16.83 16.83 0 00-5.35.85C22.7 73.1 36.22 83.52 52.69 83.52c15.21 0 21.68-7.74 21.68-7.74V63.94s-7.46 7.75-16.75 9.3A33.74 33.74 0 0028.9 44.65C31.29 32.82 40.3 26.2 52.55 26.2s22.11 8.87 22.11 8.87V23.38s-6.34-5.92-17.6-7.18c.28-5.2 3.66-11.69 7.32-14.09C79.72 6.9 94.51 19.86 98.73 38.73c0 0-6.76 6.76-19.43 6.76-10.42 0-17-5.21-20.7-14.36a17.28 17.28 0 00-6.05-1 15.4 15.4 0 00-5.63 1c4.08 14.65 17 24.5 31.4 24.5 14.08 0 21.68-6.47 21.68-6.47 0 29.29-22.39 50.28-49 50.84 3.1-3 5.49-9.58 6.2-12.82z"/>
          </svg>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-bold text-[#27346a] mb-4">
          404
        </h1>
        
        <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>

        {/* Error Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#27346a] mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex cursor-pointer items-center justify-center gap-2 px-6 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold rounded-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="flex cursor-pointer items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Go Home
          </button>
        </div>

        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <button
              onClick={() => navigate('/solutions')}
              className="text-orange-500 cursor-pointer hover:text-orange-600 font-medium transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => navigate('/about')}
              className="text-orange-500 cursor-pointer hover:text-orange-600 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="text-orange-500 cursor-pointer hover:text-orange-600 font-medium transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => navigate('/resources')}
              className="text-orange-500 cursor-pointer hover:text-orange-600 font-medium transition-colors"
            >
              Resources
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12">
          <p className="text-sm text-gray-500">
            © 2024 Chainalysis. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
} 