import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative flex size-11 items-center justify-center rounded-full",
        "bg-bg-elevated text-fg social-btn",
      )}
    >
      <span className="relative size-5">
        <span
          className={cn(
            "icon-swap absolute inset-0 flex items-center justify-center",
            isDark ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]",
          )}
        >
          <Sun className="size-5" strokeWidth={1.75} />
        </span>
        <span
          className={cn(
            "icon-swap flex items-center justify-center",
            isDark ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none",
          )}
        >
          <Moon className="size-5" strokeWidth={1.75} />
        </span>
      </span>
    </button>
  );
}
