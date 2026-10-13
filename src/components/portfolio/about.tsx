"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion"
import Counter from "@/components/Counter"
import { GraduationCap, MapPin, Sparkles } from "lucide-react"
import { coreStack, profile, stats } from "./data"
import { SectionLabel } from "./section-label"

/* Stat number that counts up when scrolled into view (React Bits Counter) */
function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number
  suffix?: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const reduceMotion = useReducedMotion()
  const started = reduceMotion || inView

  return (
    <div ref={ref} className="px-8 py-14">
      <dd className="flex items-baseline text-4xl font-semibold tracking-tight text-white tabular-nums">
        <Counter
          value={started ? value : 0}
          fontSize={40}
          gap={2}
          fontWeight="inherit"
          gradientHeight={0}
          counterStyle={{ paddingLeft: 0, paddingRight: 0 }}
        />
        {suffix ? <span style={{ fontSize: 40 }}>{suffix}</span> : null}
      </dd>
      <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
        {label}
      </dt>
    </div>
  )
}


/* Typing "Available for work" ticker, from template */
function AvailabilityTicker() {
  return (
    <div className="mb-6 flex items-center gap-2.5" aria-label="Available for select web and product work">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-signal"
      />
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
        Available for select web &amp; product work
      </span>
    </div>
  )
}

/* Draggable glass ID card - lighter take on the template's physics band card */
function IdCard({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ y: "-110%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-110%", opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      drag
      dragConstraints={{ left: -40, right: 40, top: -20, bottom: 20 }}
      dragElastic={0.2}
      whileDrag={{ scale: 1.02, rotate: 0 }}
      className="absolute right-4 top-4 z-30 w-[290px] cursor-grab overflow-hidden rounded-xl border border-line bg-surface-raised shadow-2xl shadow-black/60 active:cursor-grabbing sm:w-[320px]"
      role="group"
      aria-label="Identity card, draggable"
    >
      {/* shine edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent"
      />
      <div className="flex items-center justify-between border-b border-line bg-white/[0.02] px-5 py-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
          ID · DHAKA · BD
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-signal">
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-signal" />
          Open
        </span>
      </div>

      <div className="space-y-4 px-5 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-semibold leading-tight tracking-tight text-white">
              Md. Maherukh Islam
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
              Creative Web Builder
            </p>
          </div>
          <span
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 font-mono text-sm font-bold text-white/80"
          >
            MI
          </span>
        </div>

        <dl className="space-y-2 font-mono text-[11px] leading-relaxed text-white/60">
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-white/40" aria-hidden="true" />
            <dt className="sr-only">Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-3 w-3 text-white/40" aria-hidden="true" />
            <dt className="sr-only">Education</dt>
            <dd>{profile.educationNote}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-white/40" aria-hidden="true" />
            <dt className="sr-only">Status</dt>
            <dd className="text-white/80">5 live platforms · 1,000+ users</dd>
          </div>
        </dl>

        {/* Barcode decoration */}
        <div aria-hidden="true" className="flex h-8 items-end gap-[3px]">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="w-[2px] bg-white/50"
              style={{ height: `${40 + ((i * 37) % 60)}%` }}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="w-full border-t border-line bg-white/[0.02] px-5 py-2.5 font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 transition-colors hover:bg-white/10 hover:text-white"
      >
        Put card away ✕
      </button>
    </motion.div>
  )
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { amount: 0.3 })
  const [showCard, setShowCard] = useState(false)
  const reduceMotion = useReducedMotion()

  const anim = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full overflow-hidden border-t border-line bg-surface px-6 py-24 text-white md:px-10"
    >
      {/* Background texture */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Giant heading */}
        <span id="about-heading" className="sr-only">
          About Md. Maherukh Islam
        </span>
        <SectionLabel text="About" />
        <AvailabilityTicker />

        <h2 className="max-w-4xl text-[clamp(48px,8vw,104px)] font-semibold leading-[1.02] tracking-tight text-balance">
          <motion.span {...anim(0)} className="block text-white">
            Creative Web
          </motion.span>
          <motion.span {...anim(0.25)} className="block text-white/45">
            Builder.
          </motion.span>
        </h2>

        {/* Intro + core stack - two columns for breathing room */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div {...anim(0.5)} className="lg:col-span-7">
            <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              I&apos;m a science student in Dhaka. Since 2024 I&apos;ve built
              and still maintain <span className="text-white">five production platforms</span>: a
              1,000-member club&apos;s first website, two treasury portals, a
              consultancy portal, and a security tool. Roughly 1,000 students
              and three organizations use them daily.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/45 sm:text-base">
              None of these are demo projects. Real memberships and real money
              run through them, which is why I care about WCAG and row-level
              security as much as I care about React. That&apos;s the habit
              I&apos;d bring to a team: build it, ship it, keep it running.
            </p>
          </motion.div>

          <motion.div {...anim(0.65)} className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              Core Stack
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {coreStack.map((tech) => (
                <div
                  key={tech}
                  className="rounded-lg border border-line bg-surface-raised px-3.5 py-1.5 text-sm text-white/80 transition-colors duration-200 hover:border-signal/40 hover:text-white"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setShowCard((s) => !s)}
                aria-expanded={showCard}
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-xs font-semibold tracking-[0.1em] text-white uppercase transition-colors duration-200 hover:border-signal/50 hover:bg-signal/10 hover:text-signal"
              >
                {showCard ? "Hide Card" : "Show ID Card"}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats - proof strip */}
        <motion.dl
          {...anim(0.85)}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.dl>

        {/* ID card overlay */}
        <AnimatePresence>
          {showCard ? <IdCard onClose={() => setShowCard(false)} /> : null}
        </AnimatePresence>
      </div>
    </section>
  )
}
