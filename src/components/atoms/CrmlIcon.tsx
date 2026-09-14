import React from 'react'
import type { CrmlIconName, CrmlIconSize, CrmlIconVariant } from '../../icons/types'
import { CRML_ICONS } from '../../icons/defs'

export interface CrmlIconProps extends React.SVGAttributes<SVGElement> {
  name: CrmlIconName
  size?: CrmlIconSize
  variant?: CrmlIconVariant
  strokeWidth?: number | string
  spin?: boolean
  title?: string
  className?: string
}

export const CrmlIcon: React.FC<CrmlIconProps> = ({
  name = 'bolt',
  size = 'md',
  variant = 'current',
  strokeWidth = 2.5,
  spin = false,
  title,
  className = '',
  style = {},
  ...props
}) => {
  const iconDef = CRML_ICONS[name] || CRML_ICONS['bolt']

  let sizePixels = '24px'
  if (typeof size === 'number') {
    sizePixels = `${size}px`
  } else {
    switch (size) {
      case 'xs': sizePixels = '16px'; break;
      case 'sm': sizePixels = '20px'; break;
      case 'md': sizePixels = '24px'; break;
      case 'lg': sizePixels = '32px'; break;
      case 'xl': sizePixels = '40px'; break;
      default: sizePixels = '24px';
    }
  }

  let iconColor = 'currentColor'
  switch (variant) {
    case 'lime': iconColor = 'var(--crt-electric-lime, #CCFF00)'; break;
    case 'pink': iconColor = 'var(--crt-hot-pink, #FF007F)'; break;
    case 'cyan': iconColor = 'var(--crt-cyber-cyan, #00F0FF)'; break;
    case 'yellow': iconColor = 'var(--crt-sunburst-yellow, #FFD600)'; break;
    case 'obsidian': iconColor = 'var(--crt-obsidian, #0D0D0D)'; break;
    case 'white': iconColor = 'var(--crt-pure-white, #FFFFFF)'; break;
    case 'ghost': iconColor = 'rgba(13, 13, 13, 0.4)'; break;
    default: iconColor = 'currentColor';
  }

  const combinedStyle: React.CSSProperties = {
    width: sizePixels,
    height: sizePixels,
    color: iconColor,
    display: 'inline-block',
    verticalAlign: 'middle',
    flexShrink: 0,
    userSelect: 'none',
    transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.15s ease',
    ...(spin ? { animation: 'crml-spin 1s linear infinite' } : {}),
    ...style
  }

  return (
    <svg
      className={`crml-icon crml-icon--${variant} ${spin ? 'crml-icon--spin' : ''} ${className}`}
      style={combinedStyle}
      viewBox={iconDef.viewBox || '0 0 24 24'}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title || name}
      {...props}
    >
      {title && <title>{title}</title>}
      {iconDef.elements.map((el, idx) => {
        if (!el.tag || el.tag === 'path') {
          return (
            <path
              key={idx}
              d={el.d}
              fill={el.fill || 'none'}
              stroke={el.stroke || 'currentColor'}
              strokeWidth={el.strokeWidth || strokeWidth}
              strokeLinecap={el.strokeLinecap || 'square'}
              strokeLinejoin={el.strokeLinejoin || 'miter'}
            />
          )
        }
        if (el.tag === 'circle') {
          return (
            <circle
              key={idx}
              cx={el.cx}
              cy={el.cy}
              r={el.r}
              fill={el.fill || 'none'}
              stroke={el.stroke || 'currentColor'}
              strokeWidth={el.strokeWidth || strokeWidth}
            />
          )
        }
        if (el.tag === 'ellipse') {
          return (
            <ellipse
              key={idx}
              cx={el.cx}
              cy={el.cy}
              rx={el.rx}
              ry={el.ry}
              fill={el.fill || 'none'}
              stroke={el.stroke || 'currentColor'}
              strokeWidth={el.strokeWidth || strokeWidth}
            />
          )
        }
        if (el.tag === 'rect') {
          return (
            <rect
              key={idx}
              x={el.x}
              y={el.y}
              width={el.width}
              height={el.height}
              rx={el.rx}
              ry={el.ry}
              fill={el.fill || 'none'}
              stroke={el.stroke || 'currentColor'}
              strokeWidth={el.strokeWidth || strokeWidth}
            />
          )
        }
        if (el.tag === 'line') {
          return (
            <line
              key={idx}
              x1={el.x1}
              y1={el.y1}
              x2={el.x2}
              y2={el.y2}
              stroke={el.stroke || 'currentColor'}
              strokeWidth={el.strokeWidth || strokeWidth}
              strokeLinecap={el.strokeLinecap || 'square'}
            />
          )
        }
        if (el.tag === 'polyline') {
          return (
            <polyline
              key={idx}
              points={el.points}
              fill={el.fill || 'none'}
              stroke={el.stroke || 'currentColor'}
              strokeWidth={el.strokeWidth || strokeWidth}
              strokeLinecap={el.strokeLinecap || 'square'}
              strokeLinejoin={el.strokeLinejoin || 'miter'}
            />
          )
        }
        if (el.tag === 'polygon') {
          return (
            <polygon
              key={idx}
              points={el.points}
              fill={el.fill || 'none'}
              stroke={el.stroke || 'currentColor'}
              strokeWidth={el.strokeWidth || strokeWidth}
              strokeLinecap={el.strokeLinecap || 'square'}
              strokeLinejoin={el.strokeLinejoin || 'miter'}
            />
          )
        }
        return null
      })}
    </svg>
  )
}

export default CrmlIcon
