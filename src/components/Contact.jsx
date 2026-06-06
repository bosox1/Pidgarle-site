import { useState } from 'react'
import SectionDivider from './SectionDivider'
import { SOCIALS } from '../data/site'

const socialLinks = [
  { label: 'Instagram', key: 'instagram' },
  { label: 'Bandcamp',  key: 'bandcamp'  },
  { label: 'Spotify',   key: 'spotify'   },
  { label: 'YouTube',   key: 'youtube'   },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('https://formspree.io/f/mreveook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    setSent(true)
  }

  const handlePhoneHover = (e) => {
    const el = e.currentTarget.querySelector('.phone-num')
    const real = '+38 063 925 06 31'
    const chars = '0123456789'
    let iter = 0
    const interval = setInterval(() => {
      el.innerText = real
        .split('')
        .map((ch, i) => {
          if (ch === ' ') return ' '
          if (i < iter) return real[i]
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join('')
      if (iter >= real.length) clearInterval(interval)
      iter += 1.5
    }, 40)
  }

  return (
    <section id="contact" className="px-12 py-32 relative">
      <SectionDivider label="/ / 005 — Контакт" />

      <div className="grid grid-cols-2 gap-24 items-start">

        {/* Left */}
        <div>
          <h2 className="font-bebas reveal"
            style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 0.9 }}>
            ЗВ'ЯЖИСЬ<br />
            <span className="text-red">З НАМИ</span>
          </h2>

          <ul className="list-none mt-12 reveal">
            {socialLinks.map(({ label, key }) => (
              SOCIALS[key] && (
                <li key={key} style={{ borderBottom: '1px solid rgba(232,228,217,0.08)' }}>
                  <a href={SOCIALS[key]} target="_blank" rel="noopener noreferrer"
                    className="group flex justify-between items-center py-5 no-underline text-cream text-[0.7rem] tracking-widest uppercase transition-all duration-200 hover:text-red hover:pr-2">
                    {label}
                    <span className="text-xl transition-colors duration-200 group-hover:text-red"
                      style={{ color: 'rgba(232,228,217,0.3)' }}>↗</span>
                  </a>
                </li>
              )
            ))}

            <li style={{ borderBottom: '1px solid rgba(232,228,217,0.08)' }}>
              <a href={`mailto:${SOCIALS.email}`}
                className="group flex justify-between items-center py-5 no-underline text-cream text-[0.7rem] tracking-widest uppercase transition-all duration-200 hover:text-red hover:pr-2">
                {SOCIALS.email}
                <span className="text-xl transition-colors duration-200 group-hover:text-red"
                  style={{ color: 'rgba(232,228,217,0.3)' }}>↗</span>
              </a>
            </li>

            <li style={{ borderBottom: '1px solid rgba(232,228,217,0.08)' }}>
              <a
                href="tel:+380639250631"
                onMouseEnter={handlePhoneHover}
                className="group flex justify-between items-center py-5 no-underline text-cream text-[0.7rem] tracking-widest uppercase transition-all duration-200 hover:text-red hover:pr-2"
              >
                <span className="phone-num">+38 063 925 06 31</span>
                <span className="text-xl transition-colors duration-200 group-hover:text-red"
                  style={{ color: 'rgba(232,228,217,0.3)' }}>↗</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Right — Form */}
        <div className="reveal">
          {sent ? (
            <div className="py-16">
              <p className="font-bebas text-4xl text-red mb-2">Отримали!</p>
              <p className="text-xs tracking-widest uppercase" style={{ color: 'rgba(232,228,217,0.5)' }}>
                // Відповімо найближчим часом //
              </p>
            </div>
          ) : (
            <form name="contact" method="POST" onSubmit={handleSubmit}>
              {[
                { name: 'name',  label: "Ім'я / Організація", type: 'text',  placeholder: "Твоє ім'я"         },
                { name: 'email', label: 'Email',               type: 'email', placeholder: 'email@example.com' },
              ].map((f) => (
                <div key={f.name} className="mb-6">
                  <label className="block text-[0.6rem] tracking-widest uppercase mb-2"
                    style={{ color: 'rgba(232,228,217,0.4)' }}>{f.label}</label>
                  <input
                    type={f.type}
                    name={f.name}
                    required
                    placeholder={f.placeholder}
                    value={form[f.name]}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b py-3 text-cream text-sm font-mono outline-none transition-colors duration-300 placeholder:opacity-30"
                    style={{ borderBottomColor: 'rgba(232,228,217,0.15)' }}
                    onFocus={e => e.target.style.borderBottomColor = '#c0392b'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(232,228,217,0.15)'}
                  />
                </div>
              ))}

              <div className="mb-8">
                <label className="block text-[0.6rem] tracking-widest uppercase mb-2"
                  style={{ color: 'rgba(232,228,217,0.4)' }}>Повідомлення</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Букінг, колаборації, медіа..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b py-3 text-cream text-sm font-mono outline-none resize-none transition-colors duration-300 placeholder:opacity-30"
                  style={{ borderBottomColor: 'rgba(232,228,217,0.15)' }}
                  onFocus={e => e.target.style.borderBottomColor = '#c0392b'}
                  onBlur={e => e.target.style.borderBottomColor = 'rgba(232,228,217,0.15)'}
                />
              </div>

              <button type="submit" className="btn-outline">Надіслати →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
