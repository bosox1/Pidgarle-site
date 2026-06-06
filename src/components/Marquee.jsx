const items = ['PIDGARLE', 'POST-PUNK', 'POST-PUNK REVIVAL', 'UKRAINE', 'DARK WAVE', 'COLD WAVE',]
const repeated = [...items, ...items, ...items]

export default function Marquee() {
  return (
    <div className="overflow-hidden py-4" style={{
      borderTop: '1px solid rgba(192,57,43,0.3)',
      borderBottom: '1px solid rgba(192,57,43,0.3)',
    }}>
      <div className="flex w-max animate-marquee">
        {repeated.map((item, i) => (
          <span key={i} className="font-bebas text-lg px-12 whitespace-nowrap"
            style={{ letterSpacing: '0.3em', color: i % 2 === 1 ? '#c0392b' : 'rgba(192,57,43,0.5)' }}>
            {i % 2 === 1 ? '✕' : item}
          </span>
        ))}
      </div>
    </div>
  )
}
