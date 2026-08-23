import { useEffect, useMemo, useState } from 'react'
import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { CertificationsLeadership } from './components/CertificationsLeadership'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Publications } from './components/Publications'
import { Skills } from './components/Skills'
import { navItems } from './data/data'

type Theme = 'light' | 'dark'

function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [activeSection, setActiveSection] = useState('home')

  const observedSections = useMemo(
    () => Array.from(new Set(['home', ...navItems.map((item) => item.id), 'certifications'])),
    [],
  )

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = storedTheme ?? (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const elements = observedSections
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [observedSections])

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-90">
        <div className="absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(circle_at_10%_10%,rgba(42,123,155,0.16),transparent_55%)]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(27,58,107,0.12),transparent_60%)] blur-3xl" />
      </div>

      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      />

      <main>
        <Hero />
        <About />
        <Education />
        <Publications />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <CertificationsLeadership />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
