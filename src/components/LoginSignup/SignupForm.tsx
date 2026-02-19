import { useState } from "react";
import type { FormEvent } from "react";
import { signUp } from "../../API/try";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";


interface Props {
  switchMode: () => void;
}

const SignupForm: React.FC<Props> = ({ switchMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim())
      newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fill all fields properly");
      return;
    }

    try {
      const data = await signUp(formData);
      toast.success(data.message || "Signup successful 🎉");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Signup failed"
      );
    }
  };

  return (
    <>
      <div className="w-full max-w-md bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl text-white">
        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>
        <p className="text-center text-white/70 mb-8">
          Join us today
        </p>

        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={showPassword ? "Enter Password" : "••••••••"}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button 
                onClick={() => setShowPassword(prev => !prev)}
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-lg"
            >
                {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5 text-white/80" />
                ) : (
                    <EyeIcon className="w-5 h-5 text-white/80" />
                )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition font-semibold shadow-lg"
          >
            Signup
          </button>
        </form>

        <p className="text-center text-white/70 mt-6">
          Already have an account?{" "}
          <button
            onClick={switchMode}
            className="text-purple-400 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </>
  );
};

export default SignupForm;
