import { motion } from 'framer-motion'
import { achievementItems } from '../data/data'
import { SectionShell } from './SectionShell'

export function Achievements() {
  return (
    <SectionShell
      id="achievements"
      title="Achievements & Awards"
      subtitle="Academic achievements, fellowships, scholarships, and research-related recognition."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {achievementItems.map((achievement, index) => (
          <motion.article
            key={achievement.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="group rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              {/* Small achievement icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10">
                <span className="text-lg">🏆</span>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                  {achievement.label}
                </p>

                <p className="mt-1 text-base leading-relaxed text-[var(--color-heading)]">
                  {achievement.value}
                </p>

                {achievement.link ? (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-xs font-semibold text-[var(--color-accent)] transition-opacity hover:opacity-80"
                  >
                    View Details →
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}