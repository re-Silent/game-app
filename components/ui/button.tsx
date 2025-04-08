import { ReactNode } from "react";

export function Button({ children, onClick, variant = "default" }: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "ghost" | "outline";
}) {
  const base = "px-4 py-2 rounded-xl font-medium transition";
  const variants = {
    default: "bg-indigo-600 hover:bg-indigo-500 text-white",
    ghost: "bg-transparent hover:bg-white/10 text-white",
    outline: "border border-white/30 hover:bg-white/10 text-white"
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}
