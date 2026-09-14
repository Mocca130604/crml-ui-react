import React from 'react'
import '../crml-react.css'

export interface CrmlEmojiRatingSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'lime' | 'pink' | 'cyan' | 'yellow' | 'primary' | 'danger' | 'secondary' | 'warning' | 'outline' | 'obsidian'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  label?: string
  children?: React.ReactNode
  className?: string
}

export const CrmlEmojiRatingSlider: React.FC<CrmlEmojiRatingSliderProps> = ({
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
      className={`crml-emojiratingslider variant-${variant} size-${size} ${className}`}
      style={{ opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : 'auto' }}
      {...props}
    >
      {label && <span className="crml-label">{label}</span>}
      {children}
    </div>
  )
}
