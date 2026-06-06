import SectionDivider from './SectionDivider'

const tags = ['Post-Punk', 'Post-Punk Revival', 'Disco Punk', 'Cold Wave', 'Dark Wave', 'Україна']

export default function About() {
  return (
    <section id="about" className="px-12 py-32 relative">
      <SectionDivider label="/ / 001 — Про гурт" />

      <div className="grid grid-cols-2 gap-24 items-start max-w-5xl">

        <div className="font-bebas text-cream reveal"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 1, letterSpacing: '0.02em' }}>
          МУЗИКА{' '}
          <span style={{ color: 'transparent', WebkitTextStroke: '1px #c0392b' }}>
            ЯКА РІЖЕ
          </span>{' '}
          ПРАВДУ
        </div>

        <div className="reveal">
          <p className="text-sm leading-loose mb-6 tracking-wide"
            style={{ color: 'rgba(232,228,217,0.7)' }}>
            Pidgarle — це пост-панк група, де зустрічаються гострий розум і гостросоціальна лірика. Народжені з тривоги та непокори, музика, що не просить дозволу.
          </p>
          <p className="text-sm leading-loose tracking-wide"
            style={{ color: 'rgba(232,228,217,0.7)' }}>
            Голос, що говорить те, що бояться сказати вголос. Жодних компромісів.
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {tags.map((tag) => (
              <span key={tag}
                className="px-3 py-1 text-[0.6rem] tracking-widest uppercase text-red"
                style={{ border: '1px solid rgba(192,57,43,0.4)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
