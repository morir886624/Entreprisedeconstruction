interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
}

export function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <div className={`mb-8 ${alignClass[align]}`}>
      <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
