import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  glowing?: boolean;
}

const NeonButton = ({ 
  children, 
  className, 
  variant = "primary", 
  size = "md", 
  glowing = false,
  ...props 
}: NeonButtonProps) => {
  const baseClasses = "retro-button font-retro";
  
  const variantClasses = {
    primary: "border-neon-green text-neon-green hover:bg-neon-green/10",
    secondary: "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10",
    accent: "border-retro-orange text-retro-orange hover:bg-retro-orange/10"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        glowing && "animate-glow-pulse",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;