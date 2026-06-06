import { useEffect, useState } from 'react'

const links = [
  { href: '#about',   label: 'Гурт' },
  { href: '#members', label: 'Склад' },
  { href: '#shows',   label: 'Концерти' },
  { href: '#music',   label: 'Музика' },
  { href: '#contact', label: 'Контакт' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{ background: 'linear-gradient(180deg, rgba(8,8,8,0.97) 0%, transparent 100%)', borderBottom: '1px solid rgba(192,57,43,0.3)' }}>

      <div className="flex justify-between items-center px-6 py-5 md:px-12">
        <a href="#hero" className="font-vt323 text-3xl tracking-widest text-red animate-flicker"
          style={{ textShadow: '0 0 20px rgba(192,57,43,0.7)' }}>
          PIDGARLE
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-xs tracking-widest uppercase no-underline relative transition-all duration-200"
                style={{ color: active === href.slice(1) ? '#c0392b' : '#e8e4d9' }}
              >
                {label}
                <span
                  className="absolute bottom-[-4px] left-0 h-px bg-red transition-all duration-300"
                  style={{ width: active === href.slice(1) ? '100%' : '0' }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span className="block w-6 h-[2px] bg-cream transition-all duration-300"
            style={{ transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span className="block w-6 h-[2px] bg-red transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }} />
          <span className="block w-6 h-[2px] bg-cream transition-all duration-300"
            style={{ transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '400px' : '0', background: 'rgba(8,8,8,0.98)' }}>
        <ul className="list-none px-6 pb-6 pt-2">
          {links.map(({ href, label }) => (
            <li key={href} style={{ borderBottom: '1px solid rgba(232,228,217,0.08)' }}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block py-4 text-sm tracking-widest uppercase no-underline transition-colors duration-200"
                style={{ color: active === href.slice(1) ? '#c0392b' : '#e8e4d9' }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
