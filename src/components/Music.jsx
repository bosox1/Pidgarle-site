import SectionDivider from './SectionDivider'
import { RELEASES } from '../data/site'

const gradients = [
  'linear-gradient(135deg, #0d0000 0%, #1a0000 50%, #0d0000 100%)',
  'linear-gradient(225deg, #000000 0%, #0a0505 100%)',
  'linear-gradient(45deg, #050005 0%, #000000 100%)',
]

export default function Music() {
  return (
    <section id="music" className="px-6 md:px-12 py-20 md:py-32 relative"
      style={{ background: '#1a1a1a', borderTop: '1px solid rgba(192,57,43,0.2)' }}>
      <SectionDivider label="/ / 004 — Музика" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {RELEASES.map((r, i) => (
          <div key={r.id} className="group relative overflow-hidden reveal"
            style={{ aspectRatio: '1', background: '#2e2e2e' }}>

            <div className="absolute inset-0" style={{ background: gradients[i % gradients.length] }} />

            <div className="absolute inset-0" style={{
              background: i === 0
                ? 'radial-gradient(circle at 30% 70%, rgba(192,57,43,0.25) 0%, transparent 60%)'
                : i === 1
                ? 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(192,57,43,0.04) 10px, rgba(192,57,43,0.04) 11px)'
                : 'radial-gradient(ellipse at 70% 30%, rgba(192,57,43,0.2) 0%, transparent 50%)'
            }} />

            <div className="absolute inset-0 flex items-center justify-center font-bebas text-8xl"
              style={{ color: 'rgba(232,228,217,0.03)', letterSpacing: '-0.05em' }}>PG</div>

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
              style={{ background: 'linear-gradient(0deg, rgba(8,8,8,0.9) 0%, transparent 100%)' }}>
              <div className="font-bebas text-xl md:text-2xl tracking-wide">{r.title}</div>
              <div className="text-[0.6rem] tracking-widest text-red mt-1">
                {r.year} · {r.type}
                {r.status === 'coming_soon' && ' · Скоро'}
              </div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-400"
              style={{ background: 'rgba(8,8,8,0.85)' }}>
              {r.status === 'coming_soon' ? (
                <div className="text-xs tracking-widest uppercase"
                  style={{ color: 'rgba(232,228,217,0.5)' }}>
                  // Скоро у всіх стримінгах //
                </div>
              ) : r.url ? (
                <a href={r.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[0.65rem] tracking-widest uppercase text-cream no-underline">
                  <div className="w-8 h-8 rounded-full border border-red flex items-center justify-center text-red text-xs">▶</div>
                  Слухати
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
