type Props = {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
};

export function ToolCard({ title, icon, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer rounded-2xl p-6 flex flex-col items-center gap-4
        bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)]
        backdrop-blur-xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]
        transition-all duration-300
        hover:scale-[1.03] hover:shadow-[0_18px_45px_-18px_rgba(14,165,233,0.55)]
      "
    >
      <div
        className="
          text-4xl
          drop-shadow-[0_6px_18px_var(--glass-glow)]
        "
      >
        {icon}
      </div>

      <p className="font-semibold text-[color:var(--text-main)]">
        {title}
      </p>
    </div>
  );
}
