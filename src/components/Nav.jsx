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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-5"
      style={{ background: 'linear-gradient(180deg, rgba(8,8,8,0.95) 0%, transparent 100%)', borderBottom: '1px solid rgba(192,57,43,0.3)' }}>

      <a href="#hero" className="font-vt323 text-3xl tracking-widest text-red animate-flicker"
        style={{ textShadow: '0 0 20px rgba(192,57,43,0.7)' }}>
        PIDGARLE
      </a>

      <ul className="flex gap-10 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-xs tracking-widest uppercase no-underline relative transition-all duration-200 group"
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
    </nav>
  )
}
