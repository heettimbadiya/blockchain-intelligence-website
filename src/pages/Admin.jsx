import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff, Shield, AlertCircle } from "lucide-react";
import toast from "react-hot-toast";

export default function Admin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Dummy credentials for demo
  const DUMMY_CREDENTIALS = {
    username: "admin",
    password: "admin123",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      if (
        credentials.username === DUMMY_CREDENTIALS.username &&
        credentials.password === DUMMY_CREDENTIALS.password
      ) {
        // Store admin session
        localStorage.setItem("adminAuthenticated", "true");
        toast.success("Login successful!");
        navigate("/adminContact");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="#ff6600"
                className="w-12 h-12"
            >
              <path d="M50 0c1.12 0 2.39.14 2.39.14a28.31 28.31 0 00-6.48 15.92 33.76 33.76 0 00-27.86 28.59c-6.47.7-13.79 3.66-18 7.89C-.95 23.52 21.29 0 50 0zm7.2 87.18a27 27 0 01-4 .29 49.17 49.17 0 01-6.9-.57 51.83 51.83 0 01-7 12A50 50 0 011.72 62.82c4.51-5.35 14.93-8.45 21.4-8.45 13.8 0 21.12 7.32 23.66 18.73-8.31-2.25-13.24-6.9-16.48-13.8a16.68 16.68 0 00-5.91-1 16.83 16.83 0 00-5.35.85C22.7 73.1 36.22 83.52 52.69 83.52c15.21 0 21.68-7.74 21.68-7.74V63.94s-7.46 7.75-16.75 9.3A33.74 33.74 0 0028.9 44.65C31.29 32.82 40.3 26.2 52.55 26.2s22.11 8.87 22.11 8.87V23.38s-6.34-5.92-17.6-7.18c.28-5.2 3.66-11.69 7.32-14.09C79.72 6.9 94.51 19.86 98.73 38.73c0 0-6.76 6.76-19.43 6.76-10.42 0-17-5.21-20.7-14.36a17.28 17.28 0 00-6.05-1 15.4 15.4 0 00-5.63 1c4.08 14.65 17 24.5 31.4 24.5 14.08 0 21.68-6.47 21.68-6.47 0 29.29-22.39 50.28-49 50.84 3.1-3 5.49-9.58 6.2-12.82z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[#27346a] mb-2">
            Admin Login
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">
            Access the admin dashboard to manage contacts
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#27346a] flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Username
              </label>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#27346a] flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Demo Credentials Info */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-[#27346a] mb-1">
                    Demo Credentials
                  </p>
                  <p className="text-gray-600">
                    Username: <span className="font-mono">admin</span>
                    <br />
                    Password: <span className="font-mono">admin123</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3 rounded-xl flex items-center justify-center text-lg transition-all duration-300"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Logging in...
                </div>
              ) : (
                <>
                  <Lock className="w-5 h-5 mr-2" />
                  Login
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            © 2024 Chainalysis. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
} 