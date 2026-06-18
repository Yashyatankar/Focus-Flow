import React from 'react'

const FancyButton = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="
      group
      relative
      w-full
      overflow-hidden
      rounded-xl
      bg-gradient-to-r
      from-violet-600
      via-purple-600
      to-pink-500
      py-3
      font-semibold
      text-white
      transition-all
      duration-500
      hover:scale-105
      hover:shadow-lg
      hover:shadow-purple-500/40
      "
    >
      <span
        className="
        absolute
        inset-0
        -translate-x-full
        bg-gradient-to-r
        from-transparent
        via-white/30
        to-transparent
        transition-transform
        duration-1000
        group-hover:translate-x-full
        "
      />

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </button>
  );
};

export default FancyButton;