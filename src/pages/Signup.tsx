import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
// @ts-ignore: external JS module without type declarations
import { signUp } from "../API/try";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Silk from "../components/ReactBits/Silk";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  /* 🔹 Basic validation */
  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Input Required");
      return;
    }

    try {
      const data = await signUp(formData);
      toast.success(data.message || "Signup successful 🎉");
      console.log("Signup Success:", data);
    } catch (error: any) {
      const msg =
        error?.response?.data?.message || "Signup failed";
      toast.error(msg);
      console.error("Signup Error:", error);
    }
  };

  return (
  <div className="relative w-screen h-screen overflow-hidden">
    
    {/* 🔥 Background */}
    <div className="absolute inset-0">
      <Silk
        speed={5}
        scale={1}
        color="#a53dff"
        noiseIntensity={1.5}
        rotation={0}
      />
    </div>

    {/* 🔥 Foreground Content */}
    <div className="relative z-10 flex items-center justify-center h-full">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="w-full max-w-md bg-black/20 backdrop-blur rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-white">
          Signup
        </h1>

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className={`w-full px-4 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-500"
              }`}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-500"
              }`}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-500"
              }`}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Signup
          </button>
        </form>

        <p className="text-sm text-center text-white mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Signup;
