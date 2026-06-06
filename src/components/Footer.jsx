export default function Footer() {
  return (
    <footer className="px-12 py-8 flex justify-between items-center"
      style={{ borderTop: '1px solid rgba(192,57,43,0.2)' }}>
      <div className="font-vt323 text-2xl tracking-widest text-red opacity-60">PIDGARLE</div>
      <div className="text-[0.6rem] tracking-widest" style={{ color: 'rgba(232,228,217,0.2)' }}>
        © {new Date().getFullYear()} Pidgarle. Всі права захищені.<p>Розробка: JJ Digital</p>
      </div>
    </footer>
  )
}
