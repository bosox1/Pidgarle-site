import { useEffect } from 'react'
import Nav     from './components/Nav'
import Hero    from './components/Hero'
import Marquee from './components/Marquee'
import About   from './components/About'
import Members from './components/Members'
import Shows   from './components/Shows'
import Music   from './components/Music'
import Contact from './components/Contact'
import Footer  from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Members />
        <Shows />
        <Music />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
