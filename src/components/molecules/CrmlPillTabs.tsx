import React from 'react'
import '../crml-react.css'

export interface CrmlPillTabItem {
  id: string
  label: string
  icon?: string
}

export interface CrmlPillTabsProps {
  tabs: CrmlPillTabItem[]
  activeTab?: string
  onChange?: (id: string) => void
  variant?: 'lime' | 'pink' | 'cyan' | 'yellow'
}

export const CrmlPillTabs: React.FC<CrmlPillTabsProps> = ({
  tabs,
  activeTab,
  onChange,
  variant = 'lime'
}) => {
  const current = activeTab || tabs[0]?.id
  return (
    <div style={{ display: 'inline-flex', gap: '0.5rem', background: '#F4F4F5', padding: '0.35rem', border: '2.5px solid #0D0D0D', borderRadius: 999 }}>
      {tabs.map((tab) => {
        const isActive = tab.id === current
        return (
          <button
            key={tab.id}
            onClick={() => onChange && onChange(tab.id)}
            className={`crml-btn ${isActive ? `variant-${variant}` : 'variant-outline'} size-sm`}
            style={{ borderRadius: 999, border: '2px solid #0D0D0D', boxShadow: isActive ? '2px 2px 0px #0D0D0D' : 'none' }}
          >
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
