import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projectItems } from '../data/data'
import { SectionShell } from './SectionShell'

export function Projects() {
  return (
    <SectionShell
      id="projects"
      title="Projects"
      subtitle="Selected engineering and applied AI projects with measurable outcomes."
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {projectItems.map((project) => (
          <motion.article
            key={project.title}
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
            className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--surface)] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-[var(--color-heading)]">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-text)]">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3 py-1 text-xs font-medium text-[var(--chip-text)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]"
                >
                  View Live Demo <ExternalLink size={14} />
                </a>
              ) : null}
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]"
                >
                  View on GitHub <ExternalLink size={14} />
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  )
}
