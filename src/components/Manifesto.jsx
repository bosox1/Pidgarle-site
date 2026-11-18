import { MANIFESTO } from '../data/site'

const SIZE = 'clamp(2.5rem, 10vw, 8rem)'
const STEP = 'clamp(1rem, 5vw, 5rem)' // зсув кожного наступного рядка вправо

export default function Manifesto() {
  const { subject, lines, finale } = MANIFESTO
  const full = [subject, ...lines.map((l) => `${l.lead} ${l.text}`), finale].join(' ')

  return (
    <section id="manifesto" className="relative px-6 md:px-12 py-24 md:py-36 overflow-hidden">

      {/* Гігантський контурний ✕ на фоні */}
      <div aria-hidden="true"
        className="absolute -right-16 md:right-0 top-1/2 -translate-y-1/2 font-bebas select-none pointer-events-none"
        style={{
          fontSize: 'clamp(22rem, 55vw, 44rem)', lineHeight: 1,
          color: 'transparent', WebkitTextStroke: '1px rgba(192,57,43,0.12)',
        }}>
        ✕
      </div>

      <p className="reveal text-[0.6rem] tracking-[0.5em] uppercase text-red mb-10 relative z-10">
        // маніфест
      </p>

      {/* aria-label — щоб скрінрідер прочитав одним реченням, а не по шматках */}
      <blockquote className="relative z-10 font-bebas uppercase" aria-label={full}
        style={{ fontSize: SIZE, lineHeight: 0.95 }}>

        <p aria-hidden="true" className="reveal text-cream">{subject}</p>

        {lines.map((line, i) => (
          <p key={line.text} aria-hidden="true" className="reveal whitespace-nowrap"
            style={{ paddingLeft: `calc(${i + 1} * ${STEP})`, transitionDelay: `${(i + 1) * 150}ms` }}>
            <span className="text-red">{line.lead}</span>{' '}
            <span className="text-cream">{line.text}</span>
          </p>
        ))}

        {/* Фінальне слово — контур + гліч, як GARLE у Hero */}
        <p aria-hidden="true" className="reveal whitespace-nowrap"
          style={{ paddingLeft: `calc(${lines.length + 1} * ${STEP})`, transitionDelay: `${(lines.length + 1) * 150}ms` }}>
          <span className="glitch inline-block" data-text={finale}
            style={{ color: 'transparent', WebkitTextStroke: '2px #e8e4d9' }}>
            {finale}
          </span>
        </p>
      </blockquote>
    </section>
  )
}
