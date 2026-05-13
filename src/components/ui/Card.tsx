import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const hoverStyles = hover
    ? 'hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20'
    : ''

  return (
    <div
      className={`bg-white/50 dark:bg-slate-900/50 border border-cyan-500/20 dark:border-cyan-500/30 rounded-2xl p-8 transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  )
}
