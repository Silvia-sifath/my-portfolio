import { motion } from 'framer-motion'
import type { PropsWithChildren, ReactNode } from 'react'

type SectionShellProps = PropsWithChildren<{
  id: string
  title: string
  subtitle?: string
  actionSlot?: ReactNode
}>

export function SectionShell({
  id,
  title,
  subtitle,
  actionSlot,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-8 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Portfolio
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-heading)] sm:text-4xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-3 max-w-3xl text-base text-[var(--color-text)]">{subtitle}</p>
            ) : null}
          </div>
          {actionSlot}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
