type Props = {
  title: string
  icon: React.ReactNode
  onClick: () => void
}

export function ToolCard({ title, icon, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-2xl bg-white/40 backdrop-blur-lg border border-white/30 shadow-lg p-6 flex flex-col items-center gap-4 hover:scale-[1.02] transition"
    >
      <div className="text-4xl">{icon}</div>
      <p className="font-medium">{title}</p>
    </div>
  )
}
