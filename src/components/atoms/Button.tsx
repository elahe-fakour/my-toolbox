type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({
  children,
  onClick,
  variant = 'primary',
}: ButtonProps) {
  const base =
    'px-4 py-2 rounded-xl transition font-medium backdrop-blur-md'

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg hover:opacity-90',
    secondary:
      'bg-white/50 text-gray-700 border border-white/30 hover:bg-white/70',
  }

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  )
}
