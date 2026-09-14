import React from 'react'
import '../crml-react.css'

export interface CrmlBadgeProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'obsidian' | 'lime' | 'pink' | 'cyan' | 'yellow'
  size?: 'sm' | 'md'
  children?: React.ReactNode
  className?: string
}

export const CrmlBadge: React.FC<CrmlBadgeProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = ''
}) => {
  return (
    <span className={`crml-badge variant-${variant} size-${size} ${className}`}>
      {children}
    </span>
  )
}
