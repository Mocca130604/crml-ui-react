import React, { useState, useRef, useEffect } from 'react'
import '../crml-react.css'

export interface CrmlDualRangeSliderProps {
  minLimit?: number
  maxLimit?: number
  value?: [number, number]
  defaultValue?: [number, number]
  step?: number
  prefix?: string
  suffix?: string
  label?: string
  variant?: 'lime' | 'pink' | 'cyan' | 'yellow'
  compact?: boolean
  showLimits?: boolean
  onChange?: (val: [number, number]) => void
}

export const CrmlDualRangeSlider: React.FC<CrmlDualRangeSliderProps> = ({
  minLimit = 0,
  maxLimit = 1000,
  value,
  defaultValue = [150, 800],
  step = 10,
  prefix = '$',
  suffix = '',
  label = 'PRICE RANGE FILTER',
  variant = 'lime',
  compact = false,
  showLimits = true,
  onChange
}) => {
  const [internalVal, setInternalVal] = useState<[number, number]>(value || defaultValue)
  const [activeThumb, setActiveThumb] = useState<'min' | 'max' | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (value) setInternalVal(value)
  }, [value])

  const [minVal, maxVal] = internalVal
  const range = maxLimit - minLimit
  const minPercent = range > 0 ? Math.max(0, Math.min(100, ((minVal - minLimit) / range) * 100)) : 0
  const maxPercent = range > 0 ? Math.max(0, Math.min(100, ((maxVal - minLimit) / range) * 100)) : 100

  const format = (v: number) => {
    let s = v.toString()
    if (compact) {
      if (Math.abs(v) >= 1000000) s = (v / 1000000).toFixed(v % 1000000 === 0 ? 0 : 1) + 'M'
      else if (Math.abs(v) >= 1000) s = (v / 1000).toFixed(v % 1000 === 0 ? 0 : 1) + 'K'
    } else {
      s = v.toLocaleString()
    }
    return `${prefix}${s}${suffix}`
  }

  const handleMinChange = (v: number) => {
    const clamped = Math.max(minLimit, Math.min(v, maxVal - step))
    const next: [number, number] = [clamped, maxVal]
    setInternalVal(next)
    if (onChange) onChange(next)
  }

  const handleMaxChange = (v: number) => {
    const clamped = Math.min(maxLimit, Math.max(v, minVal + step))
    const next: [number, number] = [minVal, clamped]
    setInternalVal(next)
    if (onChange) onChange(next)
  }

  return (
    <div className={`crml-dual-range-wrapper variant-${variant}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
        <span className="crml-label">{label}</span>
        <span className="crml-badge variant-lime" style={{ fontWeight: 900 }}>
          {format(minVal)} — {format(maxVal)}
        </span>
      </div>

      <div ref={trackRef} style={{ position: 'relative', width: '100%', height: 24, display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '100%', height: 10, backgroundColor: '#E4E4E7', border: '2.5px solid #0D0D0D', borderRadius: 999, overflow: 'hidden' }}>
          <div
            style={{
              position: 'absolute',
              height: '100%',
              backgroundColor: '#FF007F',
              left: `${minPercent}%`,
              width: `${Math.max(0, maxPercent - minPercent)}%`
            }}
          />
        </div>

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          step={step}
          value={minVal}
          onChange={(e) => handleMinChange(Number(e.target.value))}
          onPointerDown={() => setActiveThumb('min')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 24,
            background: 'transparent',
            pointerEvents: 'none',
            appearance: 'none',
            margin: 0,
            border: 'none',
            outline: 'none',
            zIndex: activeThumb === 'min' ? 5 : 2
          }}
        />
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          step={step}
          value={maxVal}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
          onPointerDown={() => setActiveThumb('max')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 24,
            background: 'transparent',
            pointerEvents: 'none',
            appearance: 'none',
            margin: 0,
            border: 'none',
            outline: 'none',
            zIndex: activeThumb === 'max' ? 5 : 3
          }}
        />
      </div>

      {showLimits && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', fontWeight: 800, color: '#757575' }}>
          <span style={{ background: '#F4F4F5', border: '1px solid #0D0D0D', padding: '1px 5px', borderRadius: 3, fontWeight: 900 }}>{format(minLimit)}</span>
          <span style={{ background: '#F4F4F5', border: '1px solid #0D0D0D', padding: '1px 5px', borderRadius: 3, fontWeight: 900 }}>{format(maxLimit)}</span>
        </div>
      )}
    </div>
  )
}
