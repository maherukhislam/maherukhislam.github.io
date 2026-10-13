"use client"

import { useCallback, useRef, useState } from "react"
import { ExternalLink, Info } from "lucide-react"
import { projects, recognitionAdditional, recognitionHighlights, type Project } from "./data"
import ProjectModal from "./project-modal"
import { TechStackList } from "./tech-stack-list"
import { SectionLabel } from "./section-label"

type TabId = "projects" | "certificates" | "tech"

const tabs: { id: TabId; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "tech", label: "Tech Stack" },
]

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (p: Project) => void
}) {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-line bg-surface-raised transition-colors duration-200 hover:border-white/20">
      {/* Top visual band with big index */}
      <div className="relative flex h-36 items-end overflow-hidden border-b border-line p-5">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-3 -top-8 select-none font-display text-[7rem] leading-none text-white/[0.04]"
        >
          {project.index}
        </span>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
            {project.category}
          </p>
          <h3 className="mt-1.5 text-xl font-semibold leading-tight tracking-tight text-white">
            {project.title}
          </h3>
        </div>
        <span
          className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium ${
            project.status === "Open Source"
              ? "border-white/15 bg-white/5 text-white/60"
              : "border-signal/30 bg-signal/10 text-signal"
          }`}
        >
          {project.status === "Live" ? (
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-signal"
            />
          ) : null}
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-white/55">{project.short}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[10px] text-white/45"
            >
              {tech}
            </li>
          ))}
          {project.tech.length > 4 ? (
            <li className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[10px] text-white/55">
              +{project.tech.length - 4}
            </li>
          ) : null}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-semibold tracking-[0.1em] text-white/80 uppercase transition-colors duration-200 hover:border-signal/50 hover:bg-signal/10 hover:text-signal"
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
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-white/50 transition-colors duration-200 hover:border-signal/40 hover:text-signal"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
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
      className={`flex h-full flex-col rounded-xl border p-5 transition-colors duration-200 ${
        highlight
          ? "border-white/15 bg-surface-raised hover:border-white/25"
          : "border-line bg-surface-raised hover:border-white/15"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold leading-snug text-white">{title}</h3>
        {note ? (
          <span
            className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${
              highlight
                ? "border-signal/30 bg-signal/10 text-signal"
                : "border-line text-white/45"
            }`}
          >
            {note}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-white/50">{org}</p>
      {date ? (
        <p className="mt-auto pt-4 font-mono text-[10px] text-white/60">{date}</p>
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
    <>
      <section
        id="showcase"
        aria-labelledby="showcase-heading"
        className="relative w-full overflow-hidden border-t border-line bg-surface px-6 py-24 text-white md:px-10"
      >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <SectionLabel text="Showcase" />
        <span id="showcase-heading" className="sr-only">
          Portfolio showcase: projects, certificates, and tech stack
        </span>

        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-[clamp(36px,6vw,72px)] font-semibold leading-[0.95] tracking-tight text-balance">
            Portfolio Showcase
          </h2>

          {/* Tab switcher */}
          <div
            role="tablist"
            aria-label="Showcase categories"
            className="relative flex w-full items-center rounded-full border border-line bg-surface-raised p-1.5 md:w-auto md:min-w-md"
          >
            <div
              aria-hidden="true"
              className="absolute bottom-1.5 top-1.5 rounded-full bg-white/10 transition-[left] duration-300 ease-out"
              style={{
                width: "calc(33.333% - 4px)",
                left: activePillLeft,
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
            <div className="space-y-10">
              <div>
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                  Highlights: most professionally relevant
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {recognitionHighlights.map((item, i) => (
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
                        highlight
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                  Other selected recognition
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            <TechStackList />
          ) : null}
        </div>
      </div>

      </section>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
