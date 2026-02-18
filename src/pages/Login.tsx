import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
// @ts-ignore: external JS module without type declarations
import { login } from "../API/try";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/authSlice";
import { useAppDispatch } from "../store/hooks";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Silk from "../components/ReactBits/Silk";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  /* 🔹 Validation */
  // const validate = () => {
  //   const newErrors: typeof errors = {};

  //   if (!formData.email.trim()) {
  //     newErrors.email = "Email is required";
  //   }

  //   if (!formData.password.trim()) {
  //     newErrors.password = "Password is required";
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const navigate = useNavigate();

const dispatch = useAppDispatch();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await login(formData);

      dispatch(
        loginSuccess({
          token: data.jwtToken,
          email: data.email,
          name: data.name,
        })
      );

      navigate("/home");
    } catch (error: any) {
      console.error(error?.response?.data?.message || "Login failed");
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

      <div className="w-full max-w-md bg-black/20 backdrop-blur rounded-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-white">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-white mt-4">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  </div>
);

};

export default Login;
