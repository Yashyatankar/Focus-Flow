import React from 'react'
import { useState } from 'react';
import FancyButton from './FancyButton'

const LoginPage = () => {

    const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center overflow-hidden relative">

      {/* Background Blobs */}
      <div className="absolute h-96 w-96 rounded-full bg-purple-600/30 blur-[150px] top-20 -left-20 animate-pulse" />

      <div className="absolute h-96 w-96 rounded-full bg-pink-500/30 blur-[150px] bottom-20 -right-20 animate-pulse" />

      {/* Card */}
      <div className="relative z-10 w-[400px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-white text-center mb-2">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <p className="text-zinc-400 text-center mb-8">
          {isLogin
            ? "Login to continue"
            : "Sign up to get started"}
        </p>

        <form className="space-y-5">

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-zinc-900/70
              px-4
              py-3
              text-white
              outline-none
              focus:border-purple-500
              "
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-zinc-900/70
            px-4
            py-3
            text-white
            outline-none
            focus:border-purple-500
            "
          />

          <input
            type="password"
            placeholder="Password"
            className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-zinc-900/70
            px-4
            py-3
            text-white
            outline-none
            focus:border-purple-500
            "
          />

          <FancyButton>
            {isLogin ? "Login" : "Sign Up"}
          </FancyButton>
        </form>

        <div className="mt-6 text-center text-zinc-400">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="
            ml-2
            font-semibold
            text-purple-400
            hover:text-pink-400
            transition-colors
            "
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage