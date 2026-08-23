import { motion } from 'framer-motion'
import { educationItems } from '../data/data'
import { SectionShell } from './SectionShell'

export function Education() {
  return (
    <SectionShell id="education" title="Education" subtitle="Academic journey and milestones.">
      <div className="relative ml-3 border-l border-[var(--color-border)] pl-7">
        {educationItems.map((item, index) => (
          <motion.article
            key={item.degree}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className={`relative rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-5 shadow-sm ${
              index === educationItems.length - 1 ? 'mb-0' : 'mb-10'
            }`}
          >
            <span className="absolute -left-[39px] top-6 h-3.5 w-3.5 rounded-full border-2 border-[var(--surface-strong)] bg-[var(--color-accent)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              {item.duration}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[var(--color-heading)]">{item.degree}</h3>
            <p className="mt-1 text-sm text-[var(--color-text)]">{item.institution}</p>
            {item.result ? (
              <p className="mt-3 inline-block rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3 py-1 text-xs font-medium text-[var(--chip-text)]">
                {item.result}
              </p>
            ) : null}
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}
