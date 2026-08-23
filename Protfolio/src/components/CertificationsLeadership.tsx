import { motion } from 'framer-motion'
import { Award, FileText, Handshake } from 'lucide-react'
import { certificationsLeadershipItems } from '../data/data'
import { SectionShell } from './SectionShell'

export function CertificationsLeadership() {
  return (
    <SectionShell
      id="certifications"
      title="Certifications & Leadership"
      subtitle="Professional development and leadership responsibilities."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {certificationsLeadershipItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-5 shadow-sm"
          >
            <div className="mb-4 inline-flex rounded-lg bg-[var(--icon-soft-bg)] p-2 text-[var(--icon-soft-text)]">
              {item.link ? <Award size={16} /> : <Handshake size={16} />}
            </div>
            <h3 className="text-base font-semibold leading-6 text-[var(--color-heading)]">{item.title}</h3>
            <p className="mt-2 text-sm text-[var(--color-text)]">{item.details}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--chip-text)] transition hover:border-[var(--color-accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--color-accent)]"
                >
                  <Award size={12} />
                  View Certificate
                </a>
              ) : null}
              {item.certificateUrl ? (
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--chip-text)] transition hover:border-[var(--color-accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--color-accent)]"
                >
                  <FileText size={12} />
                  View Certificate
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}
