import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { experienceItems } from '../data/data'
import { SectionShell } from './SectionShell'

export function Experience() {
  return (
    <SectionShell
      id="experience"
      title="Experience"
      subtitle="Research and mentoring experience with applied technical impact."
    >
      <div className="relative ml-3 border-l border-[var(--color-border)] pl-7">
        {experienceItems.map((item, index) => (
          <motion.article
            key={item.role + item.organization}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative mb-8 rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-5 shadow-sm last:mb-0"
          >
            <span className="absolute -left-[39px] top-6 h-3.5 w-3.5 rounded-full border-2 border-[var(--surface-strong)] bg-[var(--color-accent)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              {item.duration}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[var(--color-heading)]">{item.role}</h3>
            <p className="mt-1 text-sm text-[var(--color-text)]">{item.organization}</p>
            {item.project ? (
              <p className="mt-3 text-sm font-medium text-[var(--color-heading)]">Project: {item.project}</p>
            ) : null}
            {item.supervisor ? (
              <p className="mt-2 text-sm text-[var(--color-text)]">Supervisor: {item.supervisor}</p>
            ) : null}
            {item.certificateUrl ? (
              <a
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--chip-text)] transition hover:border-[var(--color-accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--color-accent)]"
              >
                <FileText size={12} />
                View Certificate
              </a>
            ) : null}

            <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--color-text)]">
              {item.bullets.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}
