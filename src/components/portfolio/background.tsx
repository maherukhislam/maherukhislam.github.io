"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  HandHeart,
  Landmark,
} from "lucide-react"
import { education, interests, leadership } from "./data"
import { Timeline } from "@/components/ui/timeline"
import { SectionLabel } from "./section-label"
import { SpotlightCard } from "./spotlight-card"

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
      className="relative w-full overflow-hidden border-t border-line bg-surface px-6 py-24 text-white md:px-10"
    >
      {/* Backdrop */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <SectionLabel text="Background" />

        <h2
          id="background-heading"
          className="mt-6 max-w-3xl text-[clamp(36px,6vw,72px)] font-semibold leading-[1.0] tracking-tight text-balance"
        >
          <motion.span {...reveal(0)} className="block text-white">
            Education &amp; Leadership.
          </motion.span>
        </h2>

        {/* Scroll-animated timeline (Aceternity Timeline, rethemed monochrome):
            sticky headings + a progress beam that fills as you scroll */}
        <div className="mt-10">
          <Timeline
            data={[
              {
                title: "Education",
                content: (
                  <ul className="space-y-4">
                    {education.map((item) => (
                      <li key={item.degree}>
                        <SpotlightCard
                          className={`rounded-xl border p-6 ${
                          item.current
                            ? "border-white/15 bg-surface-raised"
                            : "border-line bg-surface-raised"
                          }`}
                        >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-base font-semibold text-white">{item.degree}</h4>
                          {item.current ? (
                            <span className="rounded-full border border-signal/30 bg-signal/10 px-2.5 py-0.5 font-mono text-[9px] tracking-[0.15em] text-signal uppercase">
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
                                className="rounded-md border border-line px-3 py-1 text-xs text-white/60"
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
                        </SpotlightCard>
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                title: "Leadership & Service",
                content: (
                  <ul className="space-y-4">
                    {leadership.map((item, i) => {
                      const Icon = i === 0 ? Landmark : HandHeart
                      return (
                        <li key={item.role}>
                          <SpotlightCard
                            className={`rounded-xl border p-6 transition-colors hover:border-white/20 ${
                            i === 0
                              ? "border-white/15 bg-surface-raised"
                              : "border-line bg-surface-raised"
                            }`}
                          >
                          <div className="flex items-center justify-between">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-white/70">
                              <Icon className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span className="font-mono text-xs text-white/55">{item.period}</span>
                          </div>
                          <h4 className="mt-3 text-base font-semibold text-white">{item.role}</h4>
                          <p className="mt-0.5 text-sm text-white/55">
                            {item.org}
                            {item.orgNote ? (
                              <span className="text-white/55"> · {item.orgNote}</span>
                            ) : null}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-white/45">{item.desc}</p>
                          </SpotlightCard>
                        </li>
                      )
                    })}
                  </ul>
                ),
              },
              {
                title: "Areas of Interest",
                content: (
                  <SpotlightCard className="rounded-xl border border-line bg-surface-raised px-6 py-5">
                    <ul className="flex flex-wrap gap-2">
                      {interests.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-line px-3.5 py-1.5 text-sm text-white/70 transition-colors duration-200 hover:border-signal/40 hover:text-white"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                ),
              },
            ]}
          />
        </div>
      </div>
    </section>
  )
}
