import React from 'react'
import '../crml-react.css'

export interface CrmlNeonSwitchProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
  variant?: 'lime' | 'pink' | 'cyan' | 'yellow'
  disabled?: boolean
}

export const CrmlNeonSwitch: React.FC<CrmlNeonSwitchProps> = ({
  checked = false,
  onChange,
  label,
  variant = 'lime',
  disabled = false
}) => {
  return (
    <div
      className={`crml-switch-row variant-${variant}`}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      <div className={`crml-switch-track ${checked ? 'active' : ''}`}>
        <div className="crml-switch-thumb" />
      </div>
      {label && <span className="crml-label">{label}</span>}
    </div>
  )
}
