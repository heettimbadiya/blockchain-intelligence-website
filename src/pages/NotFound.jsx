import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        {/* 404 Icon */}
        <div className="w-24 h-24 bg-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-12 h-12 text-white" />
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