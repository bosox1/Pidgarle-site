import SectionDivider from './SectionDivider'
import { MEMBERS } from '../data/site'

export default function Members() {
  return (
    <section id="members" className="px-12 py-32 relative"
      style={{ background: '#1a1a1a', borderTop: '1px solid rgba(192,57,43,0.2)' }}>
      <SectionDivider label="/ / 002 — Склад" />

      <div className="grid grid-cols-4 reveal"
        style={{ gap: '1px', background: 'rgba(192,57,43,0.2)', border: '1px solid rgba(192,57,43,0.2)' }}>
        {MEMBERS.map((m) => (
          <div key={m.num}
            className="group relative overflow-hidden p-10 transition-colors duration-300"
            style={{ background: '#1a1a1a' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(192,57,43,0.05)'}
            onMouseLeave={e => e.currentTarget.style.background = '#1a1a1a'}
          >
            {/* Bottom red line on hover */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />

            <div className="font-vt323 text-5xl leading-none mb-4"
              style={{ color: 'rgba(192,57,43,0.15)' }}>
              {m.num}
            </div>
            <div className="font-bebas text-2xl tracking-wide mb-1">{m.name}</div>
            <div className="text-[0.6rem] tracking-widest uppercase text-red mb-2">{m.role}</div>
            <a href={m.ig} target="_blank" rel="noopener noreferrer"
              className="text-[0.6rem] tracking-wide no-underline transition-colors duration-200"
              style={{ color: 'rgba(232,228,217,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#c0392b'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,228,217,0.3)'}>
              {m.handle}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
