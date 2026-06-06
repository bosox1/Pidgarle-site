export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-start px-6 md:px-12 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 70% at 80% 50%, rgba(139,37,0,0.15) 0%, transparent 70%), linear-gradient(135deg, #080808 0%, #110000 50%, #080808 100%)'
      }} />

      {/* Vertical red line */}
      <div className="absolute left-4 md:left-10 animate-pulse-line" style={{
        top: '15%', width: '2px', height: '70%',
        background: 'linear-gradient(180deg, transparent, #c0392b, transparent)'
      }} />

      <p className="text-xs tracking-[0.5em] uppercase text-red mb-6 pl-8 md:pl-12 relative z-10 animate-fadein-0">
        Post-Punk / Post-Punk Revival · Україна
      </p>

      <h1
        className="font-bebas relative z-10 pl-8 md:pl-12 glitch animate-fadein-1"
        data-text="PID GARLE"
        style={{ fontSize: 'clamp(5rem, 22vw, 18rem)', lineHeight: 0.85, letterSpacing: '-0.02em' }}
      >
        <span className="block text-cream">PID</span>
        <span className="block" style={{
          color: 'transparent',
          WebkitTextStroke: '2px #c0392b',
          textShadow: '0 0 40px rgba(192,57,43,0.3)'
        }}>GARLE</span>
      </h1>

      <p className="mt-8 pl-8 md:pl-12 text-xs tracking-[0.3em] uppercase relative z-10 animate-fadein-2"
        style={{ color: 'rgba(232,228,217,0.5)' }}>
        // шум · білий шум · чорний шум //
      </p>

      <div className="mt-12 pl-8 md:pl-12 relative z-10 animate-fadein-3">
        <a href="#music" className="btn-outline">Слухати зараз</a>
      </div>

      <div className="absolute bottom-8 right-6 md:right-12 text-xs tracking-widest uppercase animate-blink"
        style={{ color: 'rgba(232,228,217,0.3)', writingMode: 'vertical-rl' }}>
        ↓ scroll
      </div>
    </section>
  )
}
