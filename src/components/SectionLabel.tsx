type SectionLabelProps = {
  index: string
  children: string
  tone?: 'olive' | 'light'
  className?: string
}

export function SectionLabel({ index, children, tone = 'olive', className = '' }: SectionLabelProps) {
  return (
    <p
      className={`eyebrow ${tone === 'light' ? 'text-corn' : 'text-terracotta'} ${className}`}
    >
      <span className={`h-px w-8 ${tone === 'light' ? 'bg-corn' : 'bg-terracotta'}`} aria-hidden="true" />
      {index} / {children}
    </p>
  )
}
