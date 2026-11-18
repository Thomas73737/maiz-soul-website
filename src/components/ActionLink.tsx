import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

type ActionLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'light' | 'ghost-light'
  icon?: 'arrow-right' | 'arrow-up-right' | 'none'
  newTab?: boolean
  className?: string
  onClick?: () => void
}

const variants = {
  primary: 'button-primary',
  outline: 'button-outline',
  light: 'button-light',
  'ghost-light': 'button-ghost-light',
}

export function ActionLink({
  href,
  children,
  variant = 'primary',
  icon = 'arrow-right',
  newTab = false,
  className = '',
  onClick,
}: ActionLinkProps) {
  const Icon = icon === 'arrow-up-right' ? ArrowUpRight : ArrowRight

  return (
    <a
      href={href}
      className={`button-base ${variants[variant]} ${className}`}
      onClick={onClick}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {icon !== 'none' && <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />}
    </a>
  )
}
