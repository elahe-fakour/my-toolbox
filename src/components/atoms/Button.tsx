import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
};

export function Button({
  children,
  onClick,
  variant = "primary",
  className,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "rounded-xl px-4 py-2 transition font-medium",
        variant === "primary" &&
          "bg-sky-500 text-white hover:bg-sky-600",
        variant === "secondary" &&
          "bg-white/60 text-slate-700 hover:bg-white/80",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}
