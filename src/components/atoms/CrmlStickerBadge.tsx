import React from 'react'
import '../crml-react.css'

export interface CrmlStickerBadgeProps {
  variant?: 'lime' | 'pink' | 'cyan' | 'yellow'
  tilt?: 'none' | 'left' | 'right'
  star?: boolean
  children?: React.ReactNode
  className?: string
}

export const CrmlStickerBadge: React.FC<CrmlStickerBadgeProps> = ({
  variant = 'pink',
  tilt = 'right',
  star = false,
  children,
  className = ''
}) => {
  return (
    <div className={`crml-sticker variant-${variant} tilt-${tilt} ${className}`}>
      {star && <span>★</span>}
      <span>{children}</span>
    </div>
  )
}
