import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { contactInfo } from '../data/data'
import { SectionShell } from './SectionShell'

export function Contact() {
  return (
    <SectionShell
      id="contact"
      title="Contact"
      subtitle="Open to Validation, Quality Systems, research, and engineering opportunities."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-6 shadow-sm"
        >
          <div className="grid gap-4">
            <label className="text-sm font-medium text-[var(--color-heading)]" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="h-11 rounded-lg border border-[var(--color-border)] bg-transparent px-4 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--accent-soft)]"
            />

            <label className="text-sm font-medium text-[var(--color-heading)]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className="h-11 rounded-lg border border-[var(--color-border)] bg-transparent px-4 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--accent-soft)]"
            />

            <label className="text-sm font-medium text-[var(--color-heading)]" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="How can I help?"
              className="rounded-lg border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--accent-soft)]"
            />

            <button
              type="button"
              className="mt-1 rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--button-primary-hover)]"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="space-y-4"
        >
          <ContactCard icon={<Phone size={16} />} label="Phone" value={contactInfo.phone} href={`tel:${contactInfo.phone}`} />
          <ContactCard icon={<Mail size={16} />} label="Email" value={contactInfo.email} href={`mailto:${contactInfo.email}`} />
          <ContactCard icon={<MapPin size={16} />} label="Location" value={contactInfo.location} />

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-5 shadow-sm">
            <p className="text-sm font-semibold text-[var(--color-heading)]">Social Profiles</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--color-border)] p-3 text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--color-border)] p-3 text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>
        </motion.aside>
      </div>
    </SectionShell>
  )
}

type ContactCardProps = {
  icon: ReactNode
  label: string
  value: string
  href?: string
}

function ContactCard({ icon, label, value, href }: ContactCardProps) {
  const content = (
    <>
      <span className="inline-flex rounded-lg bg-[var(--icon-soft-bg)] p-2 text-[var(--icon-soft-text)]">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">{label}</p>
        <p className="mt-1 text-sm font-medium text-[var(--color-heading)]">{value}</p>
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-5 shadow-sm transition hover:border-[var(--color-accent)]"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-5 shadow-sm">
      {content}
    </div>
  )
}
