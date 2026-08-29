"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import WelcomeScreen from "@/components/portfolio/welcome-screen"
import { SiteHeader } from "@/components/portfolio/site-header"
import { Hero, MarqueeBand } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Background } from "@/components/portfolio/background"
import { Showcase } from "@/components/portfolio/showcase"
import { Contact, SiteFooter } from "@/components/portfolio/contact"

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to main content
      </a>

      <AnimatePresence>
        {showWelcome ? <WelcomeScreen onDone={() => setShowWelcome(false)} /> : null}
      </AnimatePresence>

      <SiteHeader />

      <main id="main" className="flex-1">
        <Hero start={!showWelcome} />
        <MarqueeBand />
        <About />
        <Showcase />
        <Background />
        <Contact />
      </main>

      <SiteFooter />
    </div>
  )
}
