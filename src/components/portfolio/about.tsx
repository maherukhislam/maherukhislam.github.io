"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion"
import { GraduationCap, MapPin, Sparkles } from "lucide-react"
import { coreStack, profile, stats } from "./data"

/* Typing "Available for work" ticker, from template */
function AvailabilityTicker() {
  const reduceMotion = useReducedMotion()
  const text = "✦ Available for select web & product work"

  if (reduceMotion) {
    return (
      <div className="mb-6 flex items-center">
        <span className="inline-block whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
          {text}
        </span>
      </div>
    )
  }

  return (
    <div className="mb-6 flex items-center" aria-label={text}>
      <motion.span
        animate={{ width: ["0em", "32em", "32em", "0em"] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.3, 0.8, 1],
        }}
        className="inline-block overflow-hidden whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.15em] text-white/60"
      >
        {text}
      </motion.span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-[2px] font-mono text-white/60"
        aria-hidden="true"
      >
        |
      </motion.span>
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
      whileDrag={{ scale: 1.03, rotate: 0 }}
      className="absolute right-4 top-4 z-30 w-[290px] cursor-grab overflow-hidden rounded-2xl border border-white/15 bg-black/70 shadow-2xl shadow-white/10 backdrop-blur-2xl active:cursor-grabbing sm:w-[320px]"
      role="group"
      aria-label="Identity card, draggable"
    >
      {/* shine edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
      />
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
          ID · DHAKA · BD
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-green-400/30 bg-green-400/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-green-300">
          <span aria-hidden="true" className="animate-pulse-dot h-1 w-1 rounded-full bg-green-400" />
          Open
        </span>
      </div>

      <div className="space-y-4 px-5 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-black leading-tight tracking-tight text-white">
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
        className="w-full border-t border-white/10 bg-white/[0.02] px-5 py-2.5 font-mono text-[9px] uppercase tracking-[0.3em] text-white/40 transition-colors hover:bg-white/10 hover:text-white"
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
      className="relative w-full overflow-hidden bg-black px-6 py-28 text-white select-none md:px-20"
    >
      {/* Background texture */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-white/[0.04] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Giant heading */}
        <span id="about-heading" className="sr-only">
          About Md. Maherukh Islam
        </span>
        <AvailabilityTicker />

        <h2 className="text-[clamp(56px,9vw,120px)] font-extrabold leading-[1.02] tracking-tight">
          <motion.span {...anim(0)} className="block text-white">
            Creative Web
          </motion.span>
          <motion.span {...anim(0.25)} className="block text-white/70">
            Builder.
          </motion.span>
        </h2>

        {/* Intro + core stack - two columns for breathing room */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div {...anim(0.5)} className="lg:col-span-7">
            <p className="max-w-xl text-base font-medium leading-relaxed tracking-wide text-white/80 sm:text-lg">
              I&apos;m a science student in Dhaka. Since 2024 I&apos;ve built
              and still maintain <span className="text-white">five production platforms</span>: a
              1,000-member club&apos;s first website, two treasury portals, a
              consultancy portal, and a security tool. Roughly 1,000 students
              and three organizations use them daily.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed tracking-wide text-white/50 sm:text-base">
              None of these are demo projects. Real memberships and real money
              run through them, which is why I care about WCAG and row-level
              security as much as I care about React. That&apos;s the habit
              I&apos;d bring to a team: build it, ship it, keep it running.
            </p>
          </motion.div>

          <motion.div {...anim(0.65)} className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/60">
              Core Stack
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {coreStack.map((tech) => (
                <div
                  key={tech}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-xl transition-all duration-300"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl border border-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="relative z-10">{tech}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setShowCard((s) => !s)}
                aria-expanded={showCard}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                {showCard ? "Hide Card" : "Show ID Card"}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats - proof strip */}
        <motion.dl
          {...anim(0.85)}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-black/80 px-8 py-8 backdrop-blur">
              <dd className="text-4xl font-black tracking-tight text-white lg:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                {stat.label}
              </dt>
            </div>
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
