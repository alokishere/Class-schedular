import React, { useState } from "react";
import SingUp from "./SingUp";

const Login = ({ setShowLogin }) => {
  const [ShowSingUp, setShowSingUp] = useState(false);

  if (ShowSingUp) {
   return <SingUp setShowLogin={setShowLogin} setShowSingUp={setShowSingUp} />;
  }else return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f8ff] to-white px-4">
      {/* Logo & Title */}
      <h1
        onClick={() => setShowLogin(false)}
        className="text-2xl border-b cursor-pointer font-bold text-[#1a2236] mb-4"
      >
        {" "}
        ← Back to home
      </h1>
      <div className="flex flex-col items-center mb-8 animate-fade-in">
        <span className="mb-2">
          <svg
            width="40"
            height="40"
            fill="none"
            stroke="#1a2236"
            strokeWidth="2"
          >
            <rect x="10" y="14" width="20" height="16" rx="5" />
            <path d="M28 8v6M12 8v6" />
          </svg>
        </span>
        <span className="text-2xl font-bold text-[#1a2236]">
          ClassScheduler
        </span>
      </div>
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 animate-slide-in transition-all duration-500 border border-[#eaf0fb]">
        <h2 className="text-3xl font-bold text-[#1a2236] mb-2">Welcome Back</h2>
        <div className="flex items-center text-gray-500 mb-6 gap-2">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="#6b7280"
            strokeWidth="2"
          >
            <rect x="3" y="7" width="14" height="10" rx="3" />
            <path d="M17 3v4M7 3v4" />
          </svg>
          <span>Sign in to continue to your dashboard</span>
        </div>
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-500 mb-1" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="2"
                >
                  <rect x="2" y="5" width="16" height="10" rx="4" />
                  <path d="M2 5l8 6 8-6" />
                </svg>
              </span>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#eaf0fb] focus:outline-none focus:ring-2 focus:ring-[#3a5cff] transition"
                autoComplete="email"
              />
            </div>
          </div>
          {/* Password */}
          <div>
            <label className="block text-gray-500 mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="2"
                >
                  <circle cx="10" cy="10" r="7" />
                  <path d="M10 13v-3M10 16v-1" />
                </svg>
              </span>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#eaf0fb] focus:outline-none focus:ring-2 focus:ring-[#3a5cff] transition"
                autoComplete="current-password"
              />
            </div>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#3a82f7] text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:bg-[#2563eb] transition-all duration-200 hover:scale-[1.03] active:scale-95"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M5 11h12M13 7l4 4-4 4" />
            </svg>
            Login
          </button>
        </form>
        {/* Forgot Password */}
        <div className="mt-4 text-center">
          <a href="#" className="text-[#3a82f7] hover:underline transition">
            Forgot Password?
          </a>
        </div>
      </div>
      {/* Signup Link */}
      <div className="mt-8 text-center text-gray-500 animate-fade-in delay-200">
        Don’t have an account?{" "}
        <span
          onClick={() => setShowSingUp(true)}
          className="cursor-pointer text-[#3a82f7] hover:underline transition"
        >
          Signup
        </span>
      </div>
      {/* Animations */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease;
          }
          .animate-fade-in.delay-200 {
            animation-delay: 0.2s;
          }
          .animate-slide-in {
            animation: slideIn 1s cubic-bezier(.4,0,.2,1);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
};

export default Login;
