import React from 'react'
import '../crml-react.css'

export interface CrmlButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'outline' | 'obsidian' | 'lime' | 'pink' | 'cyan' | 'yellow'
  size?: 'sm' | 'md' | 'lg'
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  children?: React.ReactNode
}

export const CrmlButton: React.FC<CrmlButtonProps> = ({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  children,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={`crml-btn variant-${variant} size-${size} ${className}`}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <span className="crml-icon-left">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="crml-icon-right">{iconRight}</span>}
    </button>
  )
}
