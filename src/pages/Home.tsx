import React from "react";
import { Link, useNavigate } from "react-router-dom";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  {
    title: "Secure Authentication",
    description:
      "JWT-based authentication with encrypted passwords and protected routes.",
    icon: "🔐",
  },
  {
    title: "Fast Performance",
    description:
      "Optimized frontend with Vite, Tailwind, and efficient API handling.",
    icon: "⚡",
  },
  {
    title: "Scalable Architecture",
    description:
      "Clean separation of frontend, backend, and API layers.",
    icon: "🧱",
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      
      {/* 🔹 TOP BAR */}
      <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-gray-800">
          Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
        >
          Logout
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Build <span className="text-blue-600">Modern Web Apps</span>
          <br /> with Confidence
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          A full-stack starter platform with authentication, clean UI,
          scalable APIs, and modern development practices.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/signup"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose This Platform?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">100%</h3>
            <p className="text-gray-600 mt-2">TypeScript Codebase</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">JWT</h3>
            <p className="text-gray-600 mt-2">Secure Authentication</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">Tailwind</h3>
            <p className="text-gray-600 mt-2">Modern UI Styling</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Build Something Awesome?
        </h2>
        <p className="text-gray-600 mb-8">
          Start your journey with a clean, scalable, and production-ready setup.
        </p>
        <Link
          to="/signup"
          className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Create Your Account
        </Link>
      </section>
    </div>
  );
};

export default Home;
