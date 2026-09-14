import React from 'react'
import '../crml-react.css'

export interface CrmlCardProps {
  title?: string
  badge?: string
  variant?: 'lime' | 'pink' | 'cyan' | 'yellow'
  children?: React.ReactNode
  className?: string
}

export const CrmlCard: React.FC<CrmlCardProps> = ({
  title,
  badge,
  variant = 'lime',
  children,
  className = ''
}) => {
  return (
    <div className={`crml-card variant-${variant} ${className}`}>
      {(title || badge) && (
        <div className="crml-card-header">
          {title && <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase' }}>{title}</h3>}
          {badge && <span className="crml-badge variant-cyan">{badge}</span>}
        </div>
      )}
      <div className="crml-card-body">{children}</div>
    </div>
  )
}
