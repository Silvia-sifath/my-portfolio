import { motion } from 'framer-motion'
import {
  BookOpen,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Search,
} from 'lucide-react'
import { aboutText, quickFacts } from '../data/data'
import { SectionShell } from './SectionShell'

const factIcons = [MapPin, Mail, Phone, GraduationCap]

export function About() {
  return (
    <SectionShell
      id="about"
      title="About Me"
      subtitle="Lecturer, researcher, and aspiring PhD scholar in Computer Science and Artificial Intelligence."
    >
      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.85fr]">
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-[var(--color-border)] bg-[var(--surface)] p-7 shadow-sm"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent)]/10">
              <BookOpen
                size={21}
                className="text-[var(--color-accent)]"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Academic Profile
              </p>
              <h3 className="mt-1 text-lg font-semibold text-[var(--color-heading)]">
                Computer Science & Engineering
              </h3>
            </div>
          </div>

          <p className="text-justify text-[15px] leading-8 text-[var(--color-text)]">
            {aboutText}
          </p>

          {/* Research Focus */}
          <div className="mt-7 border-t border-[var(--color-border)] pt-6">
            <div className="flex items-center gap-2">
              <Search
                size={17}
                className="text-[var(--color-accent)]"
              />

              <h4 className="text-sm font-semibold text-[var(--color-heading)]">
                Research Focus
              </h4>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'Artificial Intelligence',
                'Machine Learning',
                'Deep Learning',
                'NLP',
                'Healthcare AI',
                'Fuzzy Systems',
                'Medical Image Analysis',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1.5 text-xs font-medium text-[var(--color-text)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid gap-3"
        >
          {quickFacts.map((fact, index) => {
            const Icon = factIcons[index] ?? GraduationCap

            return (
              <motion.div
                key={fact.label}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10">
                    <Icon
                      size={18}
                      className="text-[var(--color-accent)]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {fact.label}
                    </p>

                    <p className="mt-1 break-words text-sm font-medium text-[var(--color-heading)]">
                      {fact.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Academic Highlight */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-5 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10">
                <GraduationCap
                  size={19}
                  className="text-[var(--color-accent)]"
                />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Academic Achievement
                </p>

                <p className="mt-1 text-sm font-semibold text-[var(--color-heading)]">
                  M.Sc. CGPA 3.96 (1st)/ 4.00
                </p>

                <p className="mt-1 text-xs text-[var(--color-text)]">
                  B.Sc. CGPA 3.88 (1st) / 4.00 
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionShell>
  )
}
