import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";

export default function AuthCard() {
  const [mode, setMode] = useState("login");

  return (
    <div
      className="
        relative
        w-full
        max-w-md
        overflow-hidden
        rounded-3xl
        border
        border-zinc-200/70
        dark:border-zinc-800
        bg-white/80
        dark:bg-[#0b0b0b]/90
        backdrop-blur-xl
        shadow-[0_10px_60px_rgba(0,0,0,0.08)]
        dark:shadow-[0_10px_60px_rgba(0,0,0,0.5)]
      "
    >
      {/* GOLD GLOW */}
      <div
        className="
          absolute
          -top-24
          right-0
          h-56
          w-56
          rounded-full
          bg-[#D4AF37]/20
          blur-3xl
          pointer-events-none
        "
      />

      {/* TOP BORDER GLOW */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#D4AF37]
          to-transparent
        "
      />

      <div className="relative z-10 p-8 sm:p-10">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <div
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-[#D4AF37]/30
              bg-[#D4AF37]/10
              px-4
              py-1
              text-xs
              font-semibold
              tracking-[0.25em]
              text-[#D4AF37]
              uppercase
            "
          >
            StyleHub
          </div>

          <h1
            className="
              mt-5
              text-3xl
              font-bold
              tracking-tight
              text-zinc-900
              dark:text-white
            "
          >
            {mode === "login"
              ? "Welcome Back"
              : "Create Account"}
          </h1>

          <p
            className="
              mt-2
              text-sm
              leading-relaxed
              text-zinc-600
              dark:text-zinc-400
            "
          >
            {mode === "login"
              ? "Login to continue your premium styling experience."
              : "Join StyleHub and discover elite beauty services."}
          </p>
        </div>

        {/* SWITCH TABS */}
        <div
          className="
            relative
            mb-8
            grid
            grid-cols-2
            rounded-2xl
            border
            border-zinc-200
            dark:border-zinc-800
            bg-zinc-100
            dark:bg-zinc-900
            p-1
          "
        >
          {/* ACTIVE TAB */}
          <motion.div
            layout
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
            className={`
              absolute
              top-1
              bottom-1
              w-[calc(50%-4px)]
              rounded-xl
              bg-[#D4AF37]
              shadow-lg
              ${
                mode === "login"
                  ? "left-1"
                  : "left-[calc(50%+2px)]"
              }
            `}
          />

          <button
            onClick={() => setMode("login")}
            className={`
              relative
              z-10
              rounded-xl
              py-2.5
              text-sm
              font-semibold
              transition-all
              ${
                mode === "login"
                  ? "text-black"
                  : "text-zinc-600 dark:text-zinc-400"
              }
            `}
          >
            Login
          </button>

          <button
            onClick={() => setMode("register")}
            className={`
              relative
              z-10
              rounded-xl
              py-2.5
              text-sm
              font-semibold
              transition-all
              ${
                mode === "register"
                  ? "text-black"
                  : "text-zinc-600 dark:text-zinc-400"
              }
            `}
          >
            Register
          </button>
        </div>

        {/* FORM AREA */}
        <AnimatePresence mode="wait">
          {mode === "login" ? (
            <motion.div
              key="login"
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: 15,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <LoginForm
                onSwitch={() => setMode("register")}
              />
            </motion.div>
          ) : (
            <motion.div
              key="register"
              initial={{
                opacity: 0,
                x: 15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -15,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <RegisterForm
                onSwitch={() => setMode("login")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}