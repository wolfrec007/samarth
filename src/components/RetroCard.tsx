import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RetroCardProps {
  children: ReactNode;
  className?: string;
  glowing?: boolean;
  animated?: boolean;
}

const RetroCard = ({ children, className, glowing = false, animated = false }: RetroCardProps) => {
  return (
    <div
      className={cn(
        "arcade-frame bg-retro-card p-6 rounded-sm relative overflow-hidden",
        glowing && "animate-glow-pulse",
        animated && "hover:scale-105 transition-transform duration-300",
        className
      )}
    >
      {/* Scanlines effect */}
      <div className="scanlines absolute inset-0 pointer-events-none opacity-30" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default RetroCard;