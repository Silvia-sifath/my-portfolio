import { motion } from 'framer-motion'
import { skillCategories } from '../data/data'
import { SectionShell } from './SectionShell'

export function Skills() {
  return (
    <SectionShell
      id="skills"
      title="Technical Skills"
      subtitle="Competencies across programming, machine learning, XAI, and engineering tools."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((group, index) => (
          <motion.article
            key={group.category}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-[var(--color-heading)]">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--chip-text)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}
