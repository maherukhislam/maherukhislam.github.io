"use client"

import { useCallback, useRef, useState } from "react"
import { ExternalLink, Info } from "lucide-react"
import { projects, recognitionAdditional, recognitionHighlights, type Project } from "./data"
import ProjectModal from "./project-modal"
import TechSphere from "./tech-sphere"

type TabId = "projects" | "certificates" | "tech"

const tabs: { id: TabId; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "tech", label: "Tech Stack" },
]

/* Decorative label with animated lines (from template) */
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-4">
      <span className="relative overflow-hidden" aria-hidden="true">
        <span className="block h-px w-10 bg-white/20" />
        <span className="absolute inset-0 block animate-[lineMove_2s_linear_infinite] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/35">
        {text}
      </span>
      <span className="relative overflow-hidden" aria-hidden="true">
        <span className="block h-px w-10 bg-white/20" />
        <span className="absolute inset-0 block animate-[lineMove_2s_linear_infinite] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </span>
    </div>
  )
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (p: Project) => void
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-2xl hover:shadow-white/10">
      {/* Top visual band with big index */}
      <div className="relative flex h-36 items-end overflow-hidden border-b border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-3 -top-8 select-none font-display text-[7rem] leading-none text-white/[0.06] transition-colors duration-500 group-hover:text-white/[0.12]"
        >
          {project.index}
        </span>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
            {project.category}
          </p>
          <h3 className="mt-1.5 text-xl font-bold leading-tight tracking-tight text-white">
            {project.title}
          </h3>
        </div>
        <span
          className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium ${
            project.status === "Open Source"
              ? "border-white/25 bg-white/10 text-white/80"
              : "border-green-400/30 bg-green-400/10 text-green-300"
          }`}
        >
          {project.status === "Live" ? (
            <span
              aria-hidden="true"
              className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-green-400"
            />
          ) : null}
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-white/60">{project.short}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white/50"
            >
              {tech}
            </li>
          ))}
          {project.tech.length > 4 ? (
            <li className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white/40">
              +{project.tech.length - 4}
            </li>
          ) : null}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition-all duration-300 hover:bg-white hover:text-black"
          >
            <Info className="h-3.5 w-3.5" aria-hidden="true" />
            Details
          </button>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.urlLabel ?? project.title} (opens in new tab)`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/30 active:scale-95"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

function CertCard({
  title,
  org,
  note,
  date,
  highlight,
}: {
  title: string
  org: string
  note?: string
  date?: string
  highlight?: boolean
}) {
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-2xl border p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 ${
        highlight
          ? "border-white/20 bg-white/[0.07] hover:border-white/35"
          : "border-white/10 bg-white/[0.04] hover:border-white/20"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold leading-snug text-white">{title}</h3>
        {note ? (
          <span
            className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${
              highlight
                ? "border-white/30 bg-white/10 text-white/80"
                : "border-white/15 bg-white/[0.05] text-white/50"
            }`}
          >
            {note}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-white/50">{org}</p>
      {date ? (
        <p className="mt-auto pt-4 font-mono text-[10px] text-white/35">{date}</p>
      ) : null}
    </div>
  )
}

export function Showcase() {
  const [active, setActive] = useState<TabId>("projects")
  const [animKey, setAnimKey] = useState(0)
  const [selected, setSelected] = useState<Project | null>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const touchStartX = useRef<number | null>(null)

  const switchTab = useCallback((id: TabId) => {
    setActive(id)
    setAnimKey((k) => k + 1)
  }, [])

  const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next = index
    if (e.key === "ArrowRight") next = (index + 1) % tabs.length
    else if (e.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length
    else if (e.key === "Home") next = 0
    else if (e.key === "End") next = tabs.length - 1
    else return
    e.preventDefault()
    switchTab(tabs[next].id)
    tabRefs.current[next]?.focus()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) < 50) return
    const order = tabs.map((t) => t.id)
    const idx = order.indexOf(active)
    if (dx < 0 && idx < order.length - 1) switchTab(order[idx + 1])
    if (dx > 0 && idx > 0) switchTab(order[idx - 1])
    touchStartX.current = null
  }

  const activePillLeft =
    active === "projects"
      ? "6px"
      : active === "certificates"
        ? "calc(33.333% + 2px)"
        : "calc(66.666% - 2px)"

  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="relative min-h-[85vh] w-full overflow-hidden bg-black px-4 py-24 text-white sm:px-8 md:px-16 lg:px-24"
    >
      {/* Backdrop glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[140px]"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center">
        <SectionLabel text="Showcase" />
        <span id="showcase-heading" className="sr-only">
          Portfolio showcase — projects, certificates, and tech stack
        </span>

        <h2
          className="mb-12 text-center font-black leading-none tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          style={{ fontSize: "clamp(32px,6vw,80px)" }}
        >
          <span className="inline-block bg-gradient-to-b from-white via-white to-white/45 bg-clip-text text-transparent">
            Portfolio Showcase
          </span>
        </h2>

        {/* Tab switcher */}
        <div
          role="tablist"
          aria-label="Showcase categories"
          className="relative mb-14 flex w-full max-w-md items-center rounded-full border border-white/20 bg-white/[0.08] p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          <div
            aria-hidden="true"
            className="absolute bottom-1.5 top-1.5 rounded-full border border-white/40 bg-white/20 shadow-xl shadow-white/10 transition-[left] duration-300 ease-out"
            style={{
              width: "calc(33.333% - 4px)",
              left: activePillLeft,
              backdropFilter: "blur(15px)",
            }}
          />
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={active === tab.id ? 0 : -1}
              onClick={() => switchTab(tab.id)}
              onKeyDown={(e) => onTabKeyDown(e, i)}
              className="relative z-10 h-12 flex-1 rounded-full text-xs font-medium tracking-wide transition-colors duration-200"
            >
              <span
                className={
                  active === tab.id
                    ? "font-semibold text-white"
                    : "text-white/35 hover:text-white/60"
                }
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Panels */}
        <div
          key={animKey}
          id={`panel-${active}`}
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          tabIndex={0}
          className="w-full animate-[contentIn_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {active === "projects" ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  className="opacity-0"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` }}
                >
                  <ProjectCard project={project} onOpen={setSelected} />
                </div>
              ))}
            </div>
          ) : null}

          {active === "certificates" ? (
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-white/35">
                  Highlights — most professionally relevant
                </p>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {recognitionHighlights.map((item, i) => (
                    <div
                      key={item.title}
                      className="opacity-0"
                      style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` }}
                    >
                      <CertCard
                        title={item.title}
                        org={item.orgNote ? `${item.org} — ${item.orgNote}` : item.org}
                        note={item.note}
                        date={item.date}
                        highlight
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-white/35">
                  Additional certificates &amp; achievements
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {recognitionAdditional.map((item, i) => (
                    <div
                      key={item.title}
                      className="opacity-0"
                      style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.05}s forwards` }}
                    >
                      <CertCard
                        title={item.title}
                        org={item.org}
                        note={item.note}
                        date={item.date}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {active === "tech" ? (
            <div className="animate-[fadeSlideUp_0.5s_ease_forwards]">
              <TechSphere />
            </div>
          ) : null}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
