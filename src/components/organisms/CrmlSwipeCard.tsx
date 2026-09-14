import React from 'react'
import '../crml-react.css'

export interface CrmlSwipeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'lime' | 'pink' | 'cyan' | 'yellow' | 'primary' | 'danger' | 'secondary' | 'warning' | 'outline' | 'obsidian'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  label?: string
  children?: React.ReactNode
  className?: string
}

export const CrmlSwipeCard: React.FC<CrmlSwipeCardProps> = ({
  variant = 'lime',
  size = 'md',
  disabled = false,
  label,
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`crml-swipecard variant-${variant} size-${size} ${className}`}
      style={{ opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : 'auto' }}
      {...props}
    >
      {label && <span className="crml-label">{label}</span>}
      {children}
    </div>
  )
}
