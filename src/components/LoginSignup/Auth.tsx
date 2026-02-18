import { useState } from "react";
import Silk from "../ReactBits/Silk";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { ToastContainer } from "react-toastify";

const Auth = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="relative w-screen h-screen overflow-hidden">
        <ToastContainer position="top-right" autoClose={3000} />

      {/* Background */}
      <div className="absolute inset-0">
        <Silk
          speed={10}
          scale={1}
          color="#a53dff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Foreground */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="relative w-full max-w-md min-h-[520px] [perspective:1000px]">
          <div
          className={`relative w-full transition-transform duration-700 
            [transform-style:preserve-3d] 
${mode === "signup" ? "[transform:rotateY(180deg)]" : ""}`}

          >
<div className="absolute w-full [backface-visibility:hidden]">
              <LoginForm switchMode={() => setMode("signup")} />
            </div>

<div className="absolute w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <SignupForm switchMode={() => setMode("login")} />
            </div>
          </div>

        </div>
      </div>
    </div>
    
  );

};

export default Auth;
