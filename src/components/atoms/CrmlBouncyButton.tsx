import React from 'react'
import '../crml-react.css'

export interface CrmlBouncyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'lime' | 'pink' | 'cyan' | 'yellow' | 'primary' | 'danger' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  children?: React.ReactNode
}

export const CrmlBouncyButton: React.FC<CrmlBouncyButtonProps> = ({
  variant = 'lime',
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
      className={`crml-bouncy-btn variant-${variant} size-${size} ${className}`}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <span className="crml-icon-left">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="crml-icon-right">{iconRight}</span>}
    </button>
  )
}
