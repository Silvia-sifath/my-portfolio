import { ArrowUp, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaResearchgate } from 'react-icons/fa6'
import { contactInfo, siteConfig } from '../data/data'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--surface-strong)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-[var(--color-text)]">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">

          {/* LinkedIn */}
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--color-border)] p-2.5 text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={14} />
          </a>

          {/* ResearchGate */}
          <a
            href={contactInfo.researchgate}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--color-border)] p-2.5 text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="ResearchGate"
          >
            <FaResearchgate size={16} />
          </a>

          {/* GitHub */}
          {contactInfo.github && (
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--color-border)] p-2.5 text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              aria-label="GitHub"
            >
              <FaGithub size={14} />
            </a>
          )}

          {/* Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="rounded-full border border-[var(--color-border)] p-2.5 text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>

          {/* Back to Top */}
          <a
            href="#home"
            className="rounded-full border border-[var(--color-border)] p-2.5 text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>

        </div>
      </div>
    </footer>
  )
}