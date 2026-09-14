import React, { useState } from 'react'
import {
  CrmlButton,
  CrmlBouncyButton,
  CrmlBadge,
  CrmlStickerBadge,
  CrmlInput,
  CrmlNeonSwitch,
  CrmlDualRangeSlider,
  CrmlPillTabs,
  CrmlCard
} from '../src/index'

export function App() {
  const [count, setCount] = useState(0)
  const [neonActive, setNeonActive] = useState(true)
  const [range, setRange] = useState<[number, number]>([150, 800])
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { id: 'all', label: '01 ALL ITEMS', icon: '⚡' },
    { id: 'mecha', label: '02 MECHA', icon: '🤖' },
    { id: 'tactile', label: '03 TACTILE', icon: '🎯' }
  ]

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1.5rem', fontFamily: "'Space Grotesk', sans-serif" }}>
      <header style={{ borderBottom: '3.5px solid #0D0D0D', paddingBottom: '1.5rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <CrmlStickerBadge variant="pink" star>REACT ECOSYSTEM v0.1</CrmlStickerBadge>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900, margin: '0.75rem 0 0 0', letterSpacing: '-1px' }}>
            CRML - UI <span style={{ backgroundColor: '#CCFF00', padding: '0 0.5rem', border: '3px solid #0D0D0D', boxShadow: '4px 4px 0px #0D0D0D' }}>REACT</span>
          </h1>
        </div>
        <CrmlBouncyButton variant="lime" onClick={() => setCount(c => c + 1)}>
          ENERGY: {count} ⚡
        </CrmlBouncyButton>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        <CrmlCard title="TACTILE BUTTONS" badge="REACT 18/19">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <CrmlBouncyButton variant="lime">LIME BOUNCY</CrmlBouncyButton>
            <CrmlBouncyButton variant="pink">HOT PINK</CrmlBouncyButton>
            <CrmlButton variant="cyan">CYBER CYAN</CrmlButton>
            <CrmlButton variant="yellow">SUNBURST</CrmlButton>
          </div>
        </CrmlCard>

        <CrmlCard title="TACTILE DUAL SLIDER" badge="PARITY FIX">
          <CrmlDualRangeSlider
            minLimit={0}
            maxLimit={1000}
            value={range}
            onChange={setRange}
            label="PRICE BOUNDS ($0 - $1,000)"
          />
        </CrmlCard>

        <CrmlCard title="SWITCH & TABS" badge="MODULAR">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <CrmlPillTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
            <CrmlNeonSwitch checked={neonActive} onChange={setNeonActive} label="TACTILE NEON OVERDRIVE" />
            <CrmlInput label="HANDLE INPUT" placeholder="Enter pilot handle..." />
          </div>
        </CrmlCard>
      </div>
    </div>
  )
}
