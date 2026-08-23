import { motion } from 'framer-motion'
import { publicationItems } from '../data/data'
import { SectionShell } from './SectionShell'

export function Publications() {
  return (
    <SectionShell
      id="publications"
      title="Publications"
      subtitle="Research contributions in medical imaging and Explainable AI."
    >
      <div className="grid gap-6">
        {publicationItems.map((publication, index) => (
          <motion.article
            key={publication.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-[var(--color-heading)]">{publication.title}</h3>
              <span className="rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--chip-text)]">
                Published
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">{publication.type}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {publication.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3 py-1 text-xs font-semibold text-[var(--chip-text)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}
