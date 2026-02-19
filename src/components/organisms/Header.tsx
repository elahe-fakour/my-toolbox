import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../theme/ useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="
        sticky top-0 z-50
        backdrop-blur-xl
        bg-[var(--glass-bg)]
        border-b border-[var(--glass-border)]
      "
    >
      <div className="h-14 max-w-7xl mx-auto px-4 flex items-center justify-between">
        <span className="text-sm font-medium text-[var(--text-main)]">
          ابزارهای کاربردی
        </span>

        <button
          onClick={toggleTheme}
          className="
            w-9 h-9 rounded-lg
            flex items-center justify-center
            hover:bg-black/10 dark:hover:bg-white/10
            transition
          "
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
