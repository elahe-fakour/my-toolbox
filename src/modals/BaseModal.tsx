import { ReactNode, useEffect } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title: string
  titleClassName?: string   // ✅ اضافه شده
}

export function BaseModal({ isOpen, onClose, children, title, titleClassName }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-md rounded-2xl bg-white/50 backdrop-blur-xl border border-white/30 shadow-2xl p-6 animate-fadeIn"
      >
        <div className="flex justify-between items-center mb-4 relative">
          {/* عنوان وسط‌چین و قابل استایل */}
          <h2
            className={`
              w-full text-center font-semibold text-2xl tracking-tight
              ${titleClassName ?? "text-gray-800"}
            `}
          >
            {title}
          </h2>

          {/* دکمه بستن */}
          <button
            onClick={onClose}
            className="absolute right-0 top-1 text-gray-600 hover:text-gray-800 text-xl"
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}
