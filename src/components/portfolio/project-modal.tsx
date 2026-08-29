"use client"

import { useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, ShieldCheck, X } from "lucide-react"
import type { Project } from "./data"

const psiLabels = [
  {
    key: "problem" as const,
    label: "Problem",
    color: "text-red-300",
    border: "border-red-400/15 bg-red-400/[0.04]",
  },
  {
    key: "solution" as const,
    label: "Solution",
    color: "text-white",
    border: "border-white/15 bg-white/[0.04]",
  },
  {
    key: "impact" as const,
    label: "Impact",
    color: "text-green-300",
    border: "border-green-400/15 bg-green-400/[0.04]",
  },
]

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 backdrop-blur-md sm:items-center sm:p-6"
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl border border-white/15 bg-black/90 p-6 shadow-2xl shadow-black sm:rounded-3xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} - project details`}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                  {project.category}
                  {project.timeline ? ` · ${project.timeline}` : ""}
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  <span className="text-white/60">Role:</span> {project.role}
                  {project.version ? (
                    <span className="font-mono text-white/60">
                      {" "}
                      · {project.version} · {project.license}
                    </span>
                  ) : null}
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-colors hover:bg-white/15 hover:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Status + URL */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
                  project.status === "Open Source"
                    ? "border-white/25 bg-white/10 text-white/80"
                    : "border-green-400/30 bg-green-400/10 text-green-300"
                }`}
              >
                {project.status === "Open Source" ? (
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <span
                    aria-hidden="true"
                    className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-green-400"
                  />
                )}
                {project.status}
              </span>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 font-mono text-sm text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                >
                  {project.urlLabel ?? project.url}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </div>

            {/* PSI grid */}
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {psiLabels.map(({ key, label, color, border }) => {
                const value = project[key]
                if (!value) return null
                return (
                  <div key={key} className={`rounded-2xl border p-4 ${border}`}>
                    <p className={`font-mono text-[10px] uppercase tracking-[0.25em] ${color}`}>
                      {label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{value}</p>
                  </div>
                )
              })}
            </div>

            {/* Coverage */}
            {project.coverage ? (
              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                  Coverage Areas
                </p>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {project.coverage.map((item) => (
                    <li
                      key={item.area}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5"
                    >
                      <p className="text-sm font-semibold text-white">{item.area}</p>
                      <p className="mt-1 font-mono text-xs leading-relaxed text-white/60">
                        {item.checks}
                      </p>
                    </li>
                  ))}
                </ul>
                {project.standards ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.standards.map((standard) => (
                      <li
                        key={standard}
                        className="rounded-full border border-white/20 bg-white/[0.06] px-3 py-1 font-mono text-xs text-white/70"
                      >
                        {standard}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}

            {/* Modules */}
            {project.modules ? (
              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                  {project.modulesLabel ?? "Modules"}
                </p>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {project.modules.map((module) => (
                    <li
                      key={module.name}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5"
                    >
                      <p className="font-mono text-sm font-semibold text-white/90">
                        {module.name}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/50">
                        {module.purpose}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Characteristics */}
            {project.characteristics ? (
              <ul className="mt-4 grid gap-3 md:grid-cols-3">
                {project.characteristics.map((characteristic) => (
                  <li
                    key={characteristic.title}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5"
                  >
                    <p className="text-sm font-semibold text-white">{characteristic.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/50">
                      {characteristic.desc}
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}

            {/* Tech */}
            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                Stack
              </span>
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-xs text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
