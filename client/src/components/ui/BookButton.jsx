import { useAuth } from "@/providers/context/AuthContext";

import { useNavigate } from "react-router-dom";

export default function BookButton({
  className = "",
  onRequireAuth,
  children = "BOOK NOW",
}) {
  const { user } = useAuth();

  const navigate = useNavigate();

  function handleClick() {
    if (!user) {
      return onRequireAuth?.();
    }

    navigate("/book");
  }

  return (
    <button
      onClick={handleClick}
      className={`
        px-6 py-2.5
        rounded-md
        text-sm font-medium
        tracking-wide
        transition-all duration-300
        border border-[#D4A24C]
        text-[#D4A24C]
        bg-transparent
        hover:bg-[#D4A24C]
        hover:text-black
        dark:border-[#D4AF37]
        dark:text-[#D4AF37]
        dark:hover:bg-[#D4AF37]
        dark:hover:text-black
        active:scale-[0.98]
        focus:outline-none
        focus:ring-2
        focus:ring-[#D4A24C]/40
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
}