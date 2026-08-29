"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  GraduationCap,
  HandHeart,
  Landmark,
} from "lucide-react"
import { education, interests, leadership } from "./data"

/* Decorative label with animated lines (shared pattern from showcase/contact) */
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="relative overflow-hidden" aria-hidden="true">
        <span className="block h-px w-10 bg-white/20" />
        <span className="absolute inset-0 block animate-[lineMove_2s_linear_infinite] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/60">
        {text}
      </span>
    </div>
  )
}

export function Background() {
  const reduceMotion = useReducedMotion()

  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section
      id="background"
      aria-labelledby="background-heading"
      className="relative w-full overflow-hidden bg-black px-6 py-28 text-white md:px-20"
    >
      {/* Backdrop */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-white/[0.04] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionLabel text="Background" />

        <h2
          id="background-heading"
          className="mt-6 text-[clamp(40px,6vw,80px)] font-extrabold leading-[1.05] tracking-tight"
        >
          <motion.span {...reveal(0)} className="block text-white">
            Education &amp; Leadership.
          </motion.span>
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Education */}
          <motion.div {...reveal(0.1)}>
            <h3 className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.45em] text-white/60">
              <GraduationCap className="h-4 w-4 text-white/50" aria-hidden="true" />
              Education
            </h3>

            <ul className="mt-6 space-y-4">
              {education.map((item, i) => (
                <li
                  key={item.degree}
                  className={`rounded-2xl border p-6 ${
                    item.current
                      ? "border-white/25 bg-white/[0.05]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-semibold text-white">{item.degree}</h4>
                    {item.current ? (
                      <span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-white/70">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/50">
                    {item.school ? (
                      <span className="inline-flex items-center gap-1.5">
                        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.school}
                      </span>
                    ) : null}
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-white/40">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.period}
                    </span>
                  </p>

                  {item.subjects.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.subjects.map((subject) => (
                        <li
                          key={subject}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/60"
                        >
                          {subject}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {item.current && item.next ? (
                    <p className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-sm font-medium text-white/75">
                      <ArrowRight className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                      {item.next}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Leadership */}
          <motion.div {...reveal(0.2)}>
            <h3 className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.45em] text-white/60">
              <HandHeart className="h-4 w-4 text-white/50" aria-hidden="true" />
              Leadership &amp; Service
            </h3>

            <ul className="mt-6 space-y-4">
              {leadership.map((item, i) => {
                const Icon = i === 0 ? Landmark : HandHeart
                return (
                  <li
                    key={item.role}
                    className={`rounded-2xl border p-6 transition-colors hover:border-white/20 ${
                      i === 0
                        ? "border-white/25 bg-white/[0.05]"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-xs text-white/60">{item.period}</span>
                    </div>
                    <h4 className="mt-3 text-base font-semibold text-white">{item.role}</h4>
                    <p className="mt-0.5 text-sm text-white/60">
                      {item.org}
                      {item.orgNote ? (
                        <span className="text-white/60"> · {item.orgNote}</span>
                      ) : null}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">{item.desc}</p>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        {/* Currently learning - slim footer row */}
        <motion.div {...reveal(0.3)} className="mt-16">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/60">
              Currently Learning
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {interests.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
