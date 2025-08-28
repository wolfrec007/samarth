import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface RetroTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const RetroTextarea = forwardRef<HTMLTextAreaElement, RetroTextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-retro text-neon-green neon-text">
            {label}
          </label>
        )}
        <textarea
          className={cn(
            "retro-input w-full rounded-sm min-h-[120px] resize-y",
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

RetroTextarea.displayName = "RetroTextarea";

export default RetroTextarea;