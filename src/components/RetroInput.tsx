import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface RetroInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const RetroInput = forwardRef<HTMLInputElement, RetroInputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-retro text-neon-green neon-text">
            {label}
          </label>
        )}
        <input
          className={cn(
            "retro-input w-full rounded-sm",
            error && "border-destructive focus:border-destructive",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-destructive font-mono animate-flicker">
            {error}
          </p>
        )}
      </div>
    );
  }
);

RetroInput.displayName = "RetroInput";

export default RetroInput;