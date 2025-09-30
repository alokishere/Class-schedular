import React, { useState } from 'react'
import Login from './Login'

const Home = () => {
      const [showLogin, setShowLogin] = useState(false)

      if(showLogin){
        return <Login setShowLogin={setShowLogin}/>
      }
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] to-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-12 py-6 bg-white shadow-sm">
        <div className="text-2xl font-bold text-[#3a5cff]">ClassScheduler</div>
        <div className="flex-1 mx-8">
          <input
            type="text"
            placeholder="Search features, help..."
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3a5cff] transition"
          />
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-[#3a5cff] transition">Categories</a>
          <a href="#" className="text-gray-700 hover:text-[#3a5cff] transition">Features</a>
          <a href="#" className="text-gray-700 hover:text-[#3a5cff] transition">About Us</a>
          <a href="#" className="text-gray-700 hover:text-[#3a5cff] transition">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-[#3a5cff] transition">Contact</a>
          <button onClick={()=> setShowLogin(true)}
          className="ml-4 px-6 py-2 bg-[#3a5cff] text-white rounded-lg font-semibold hover:bg-[#2747b0] transition shadow-md">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-12 py-16">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            Smarter Scheduling <br /> for Students &amp; Teachers
          </h1>
          <p className="text-lg text-gray-600 mb-8 animate-fade-in delay-100">
            Easily plan, organize, and manage your classes with one simple tool.
          </p>
          <form className="flex items-center gap-4 mb-4 animate-fade-in delay-200">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3a5cff] transition w-64"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#3a5cff] text-white rounded-lg font-semibold hover:bg-[#2747b0] transition shadow-lg"
            >
              Get Started Free
            </button>
          </form>
          <span className="text-sm text-gray-500">Trusted by 20k+ students worldwide</span>
        </div>

        {/* Right Image */}
        <div className="relative mt-12 md:mt-0 animate-slide-in">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
            alt="Students scheduling class"
            className="rounded-3xl shadow-xl w-[400px] h-[270px] object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-xl shadow flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-gray-700 text-sm font-medium">Live Scheduling</span>
          </div>
          <div className="absolute top-4 right-4 bg-[#3a5cff] text-white p-2 rounded-full shadow-lg hover:scale-110 transition">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="7" width="14" height="12" rx="3" />
              <path d="M16 3v4M8 3v4" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="flex justify-center gap-16 py-12 bg-transparent">
        <div className="flex flex-col items-center group">
          <div className="bg-blue-100 p-6 rounded-full mb-4 group-hover:scale-110 transition">
            <svg width="32" height="32" fill="none" stroke="#3a5cff" strokeWidth="2">
              <rect x="8" y="12" width="16" height="12" rx="4" />
              <path d="M20 6v6M12 6v6" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-900">10k+</div>
          <div className="text-gray-500">Scheduled Classes</div>
        </div>
        <div className="flex flex-col items-center group">
          <div className="bg-purple-100 p-6 rounded-full mb-4 group-hover:scale-110 transition">
            <svg width="32" height="32" fill="none" stroke="#a259ff" strokeWidth="2">
              <circle cx="16" cy="16" r="12" />
              <path d="M16 8v8l6 4" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-900">5+</div>
          <div className="text-gray-500">Years Experience</div>
        </div>
        <div className="flex flex-col items-center group">
          <div className="bg-green-100 p-6 rounded-full mb-4 group-hover:scale-110 transition">
            <svg width="32" height="32" fill="none" stroke="#3dd68c" strokeWidth="2">
              <rect x="8" y="8" width="16" height="16" rx="4" />
              <path d="M12 12h8v8h-8z" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-900">100+</div>
          <div className="text-gray-500">Institutions</div>
        </div>
        <div className="flex flex-col items-center group">
          <div className="bg-yellow-100 p-6 rounded-full mb-4 group-hover:scale-110 transition">
            <svg width="32" height="32" fill="none" stroke="#ffd700" strokeWidth="2">
              <circle cx="16" cy="16" r="12" />
              <path d="M16 10v8M12 14h8" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-900">50+</div>
          <div className="text-gray-500">Awards</div>
        </div>
      </section>

      {/* Animations */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease;
          }
          .animate-fade-in.delay-100 {
            animation-delay: 0.1s;
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
            from { opacity: 0; transform: translateX(40px);}
            to { opacity: 1; transform: translateX(0);}
          }
        `}
      </style>
    </div>
  )
}

export default Home