import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  children,
  onClick,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-xl px-4 py-2 transition font-medium",
        variant === "primary" &&
          "bg-sky-500 text-white hover:bg-sky-600",
        variant === "secondary" &&
          "bg-white/60 text-slate-700 hover:bg-white/80",
        className
      )}
    >
      {children}
    </button>
  );
}
