import SectionDivider from './SectionDivider'
import { SHOWS } from '../data/site'

export default function Shows() {
  return (
    <section id="shows" className="px-6 md:px-12 py-20 md:py-32 relative">
      <SectionDivider label="/ / 003 — Концерти" />

      {SHOWS.length === 0 ? (
        <div className="reveal max-w-xl">
          <p className="font-bebas text-4xl tracking-wide mb-4"
            style={{ color: 'rgba(232,228,217,0.2)' }}>
            Тур у розробці
          </p>
          <p className="text-xs tracking-widest uppercase"
            style={{ color: 'rgba(232,228,217,0.3)' }}>
            // Слідкуй за анонсами //
          </p>
        </div>
      ) : (
        <div className="max-w-3xl">
          {SHOWS.map((show, i) => (
            <div key={i} className="group py-6 md:py-8 relative cursor-pointer transition-all duration-300"
              style={{ borderBottom: '1px solid rgba(232,228,217,0.08)' }}>

              {/* Mobile layout */}
              <div className="flex items-start justify-between gap-4 md:hidden">
                <div>
                  <div className="font-vt323 text-xl text-red mb-1">{show.date}</div>
                  <div className="font-bebas text-lg tracking-wide">{show.venue}</div>
                  <div className="text-[0.65rem] tracking-widest uppercase mt-1"
                    style={{ color: 'rgba(232,228,217,0.4)' }}>{show.city}</div>
                </div>
                {show.ticketUrl && (
                  <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer"
                    className="text-[0.6rem] tracking-widest uppercase text-red no-underline px-3 py-2 shrink-0"
                    style={{ border: '1px solid rgba(192,57,43,0.4)' }}>
                    Квитки
                  </a>
                )}
              </div>

              {/* Desktop layout */}
              <div className="hidden md:grid items-center gap-8 hover:pl-4 transition-all duration-300"
                style={{ gridTemplateColumns: 'auto 1fr auto' }}>
                <div className="absolute left-[-2rem] text-red text-xl opacity-0 group-hover:opacity-100 group-hover:left-[-1rem] transition-all duration-300">→</div>
                <div className="font-vt323 text-2xl text-red min-w-[7rem]">{show.date}</div>
                <div>
                  <div className="font-bebas text-xl tracking-wide">{show.venue}</div>
                  <div className="text-[0.65rem] tracking-widest uppercase mt-1"
                    style={{ color: 'rgba(232,228,217,0.4)' }}>{show.city}</div>
                </div>
                {show.ticketUrl && (
                  <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer"
                    className="text-[0.6rem] tracking-widest uppercase text-red no-underline px-4 py-2 transition-all duration-200 group-hover:bg-red group-hover:text-cream"
                    style={{ border: '1px solid rgba(192,57,43,0.4)' }}>
                    Квитки
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
