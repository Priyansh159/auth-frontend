import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import { ToastContainer } from "react-toastify";
import { loginSuccess } from "../../store/authSlice";
import { useAppDispatch } from "../../store/hooks";
import { login } from "../../API/try";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import { EyeSlashIcon } from "@heroicons/react/24/outline";

interface Props {
  switchMode: () => void;
}

const LoginForm: React.FC<Props> = ({ switchMode }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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
    <>

      <div className="w-full max-w-md bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl text-white">
        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-white/70 mb-8">
          Login to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm mb-2 text-white/80">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            
          </div>

          <div>
  <label className="block text-sm mb-2 text-white/80">
    Password
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      placeholder={showPassword ? "Enter Password" : "••••••••"}
      className="w-full px-4 py-3 pr-12 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
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
</div>


          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition font-semibold shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center text-white/70 mt-6">
          Don’t have an account?{" "}
          <button
            onClick={switchMode}
            className="text-purple-400 hover:underline"
          >
            Signup
          </button>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
