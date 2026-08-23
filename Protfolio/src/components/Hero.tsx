import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { contactInfo, siteConfig } from '../data/data'

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentRole = siteConfig.roles[roleIndex]
    const speed = deleting ? 45 : 90

    const timer = window.setTimeout(() => {
      if (!deleting && typedText.length < currentRole.length) {
        setTypedText(currentRole.slice(0, typedText.length + 1))
        return
      }

      if (deleting && typedText.length > 0) {
        setTypedText(currentRole.slice(0, typedText.length - 1))
        return
      }

      if (!deleting) {
        window.setTimeout(() => setDeleting(true), 900)
      } else {
        setDeleting(false)
        setRoleIndex((prev) => (prev + 1) % siteConfig.roles.length)
      }
    }, speed)

    return () => window.clearTimeout(timer)
  }, [deleting, roleIndex, typedText])

  return (
    <section id="home" className="relative px-4 pb-18 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(42,123,155,0.22),_transparent_65%)]" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Professional Portfolio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-heading)] sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 min-h-8 text-lg font-medium text-[var(--color-text)] sm:text-xl">
            {typedText}
            <span className="ml-1 inline-block h-6 w-[2px] animate-caret bg-[var(--color-accent)] align-middle" />
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text)]">
            {siteConfig.professionalSummary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.cvPath}
              className="rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[var(--button-primary-hover)]"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-[var(--color-border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--color-heading)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--color-border)] p-3 text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--color-border)] p-3 text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="rounded-full border border-[var(--color-border)] p-3 text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto"
        >
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-[var(--color-border)] bg-[linear-gradient(145deg,var(--surface-strong),var(--surface))] shadow-[0_20px_60px_rgba(20,34,57,0.2)]">
            {siteConfig.profileImage ? (
              <img
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                loading="lazy"
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <span className="text-5xl font-semibold tracking-wide text-[var(--color-heading)]">
                {siteConfig.initials}
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
