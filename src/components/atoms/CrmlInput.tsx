import React from 'react'
import '../crml-react.css'

export interface CrmlInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  variant?: 'lime' | 'pink' | 'cyan' | 'yellow'
}

export const CrmlInput: React.FC<CrmlInputProps> = ({
  label,
  variant = 'lime',
  className = '',
  id,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
  return (
    <div className="crml-input-wrapper">
      {label && <label htmlFor={inputId} className="crml-label">{label}</label>}
      <input id={inputId} className={`crml-input variant-${variant} ${className}`} {...props} />
    </div>
  )
}
