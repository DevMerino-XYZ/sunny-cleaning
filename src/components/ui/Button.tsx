import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
    
  children: ReactNode;
  className?: string;
}

export default function Button({ children, className }: Props) {
  return (
    <button
      className={cn(
        "bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md",
        className
      )}
    >
      {children}
    </button>
  );
}
