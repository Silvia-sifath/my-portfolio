import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, siteConfig } from '../data/data'

type NavbarProps = {
  activeSection: string
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'pt-2' : 'pt-0'
      }`}
    >
      <nav
        className={`mx-auto flex h-[4.85rem] w-[calc(100%-1.5rem)] max-w-6xl items-center justify-between rounded-full border px-3 transition-all duration-300 sm:px-4 ${
          scrolled
            ? 'border-[var(--glass-border)] bg-[var(--glass)] shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a
          href="#home"
          className="logo flex items-center gap-2 text-sm font-bold tracking-[-0.06em] text-[var(--color-heading)] sm:text-base"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--surface-strong)] text-[var(--color-accent)]">
            &lt;/&gt;
          </span>
          <span>{siteConfig.name}</span>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-transparent p-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <div key={item.id} className="relative">
                {isActive ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 z-0 rounded-full bg-[var(--accent-soft)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : null}
                <a
                  href={`#${item.id}`}
                  className={`relative z-10 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text)] hover:text-[var(--color-accent)]'
                  }`}
                >
                  {item.label}
                </a>
              </div>
            )
          })}

          <button
            type="button"
            onClick={onToggleTheme}
            className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--surface)] text-[var(--color-heading)] transition hover:border-[var(--color-accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--color-accent)]"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--surface)] text-[var(--color-heading)] lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-xs flex-col gap-6 border-l border-[var(--color-border)] bg-[var(--glass)] p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <p className="logo text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-heading)]">
                  Menu
                </p>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--surface)]"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl px-3 py-2 font-medium transition ${
                      activeSection === item.id
                        ? 'bg-[var(--accent-soft)] font-semibold text-[var(--color-accent)]'
                        : 'text-[var(--color-text)] hover:bg-[var(--surface)]'
                    }`}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <button
                type="button"
                onClick={onToggleTheme}
                className="mt-auto flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--color-heading)]"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
              </button>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
