"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { Spotlight } from "@/components/ui/spotlight"

const marqueeItems = [
  "WEB PLATFORMS",
  "INTERNAL TOOLS",
  "ACCESSIBLE UI",
  "SECURE DATA",
  "REACT",
  "TYPESCRIPT",
  "POSTGRESQL",
  "SUPABASE",
]

const colorModes = [
  "bg-gradient-to-b from-white via-neutral-300 via-neutral-500 to-black text-transparent bg-clip-text",
  "text-white",
  "bg-gradient-to-b from-neutral-500 via-neutral-300 to-white text-transparent bg-clip-text",
]

export function Hero() {
  const [colorMode, setColorMode] = useState(0)
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative h-svh min-h-[640px] w-full overflow-hidden bg-surface"
    >
      {/* Backdrop visual: hero portrait (template's photo, restored) - RGB-split glitch
          layers + radial mask fading into the black page + gradient scrims for readability */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-1/2 top-[42%] h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-[90px]" />
        <div className="hero-portrait-mask absolute inset-0">
          <Image
            src="/hero-portrait.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%] opacity-90 brightness-[0.92]"
          />
          <Image
            src="/hero-portrait.png"
            alt=""
            fill
            sizes="100vw"
            className="hero-glitch-layer hero-glitch-a object-cover object-[center_30%]"
          />
          <Image
            src="/hero-portrait.png"
            alt=""
            fill
            sizes="100vw"
            className="hero-glitch-layer hero-glitch-b object-cover object-[center_30%]"
          />
        </div>
        {/* Scrims: darken top edge (under fixed header) + bottom edge (tagline/CTA row) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/85" />
      </div>

      {/* Spotlight beam (Aceternity) - sweeps in behind the portrait on load */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="relative z-10 flex h-full w-full flex-col justify-between px-6 pb-10 pt-24 md:px-12">
        {/* Giant name in a mask that wipes up on load - click to cycle color mode */}
        <h1 className="w-fit">
          <span className="block overflow-hidden py-[6px] -my-[6px]">
            <motion.button
              type="button"
              onClick={() => setColorMode((prev) => (prev + 1) % colorModes.length)}
              aria-label={`Maherukh. Activate to change the name color style (style ${colorMode + 1} of ${colorModes.length})`}
              initial={reduceMotion ? {} : { y: "110%" }}
              animate={reduceMotion ? {} : { y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`block font-display text-left text-[21vw] uppercase leading-[0.85] tracking-[-0.03em] transition-colors duration-300 md:text-[15vw] lg:text-[13rem] ${
                colorModes[colorMode]
              }`}
            >
              MAHERUKH
            </motion.button>
          </span>
        </h1>

        {/* Statement */}
        <p
          className="mt-4 max-w-md text-right text-3xl font-bold leading-[1.05] tracking-tight text-white text-balance md:absolute md:right-12 md:top-28 md:mt-0 md:text-4xl lg:text-5xl"
        >
          Building
          <br />
          Systems
          <br />
          That Just
          <br />
          Work.
        </p>

        {/* Bottom row */}
        <div className="mt-auto flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-sm font-medium leading-relaxed text-white/65 sm:text-base lg:text-lg">
            Science student in Dhaka, building the systems
            <br />
            <em className="not-italic text-white">
              clubs and small offices actually run on.
            </em>
          </p>

          <a
            href="#showcase"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:border-signal hover:bg-signal/10 hover:text-signal"
          >
            View Showcase
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-transparent via-white/60 to-transparent"
        />
      </div>
    </section>
  )
}

export function MarqueeBand() {
  return (
    <div className="overflow-hidden border-y border-line bg-surface-raised py-5">
      <div
        className="flex animate-marquee items-center gap-16 whitespace-nowrap"
        aria-hidden="true"
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-16 text-xs font-medium tracking-[0.15em] text-white/45 uppercase"
          >
            {item}
            <span className="text-white/20">âœ¦</span>
          </span>
        ))}
      </div>
      <ul className="sr-only">
        {marqueeItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
