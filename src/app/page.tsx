"use client"

import { useReducedMotion } from "framer-motion"
import Noise from "@/components/Noise"
import { SiteHeader } from "@/components/portfolio/site-header"
import { Hero, MarqueeBand } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Background } from "@/components/portfolio/background"
import { Showcase } from "@/components/portfolio/showcase"
import { Contact, SiteFooter } from "@/components/portfolio/contact"

export default function Home() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="flex min-h-screen flex-col bg-surface text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        <Hero />
        <MarqueeBand />
        <About />
        <Showcase />
        <Background />
        <Contact />
      </main>

      <SiteFooter />

      {/* Film-grain overlay (React Bits Noise) - subtle texture over everything */}
      {!reduceMotion ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[500] opacity-25"
        >
          <Noise patternAlpha={5} patternRefreshInterval={4} />
        </div>
      ) : null}
    </div>
  )
}
