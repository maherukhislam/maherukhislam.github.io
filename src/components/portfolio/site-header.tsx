"use client"

import { useEffect, useState } from "react"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar"

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "showcase", label: "Showcase" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
]

const navItems = navLinks.map((link) => ({
  name: link.label,
  link: `#${link.id}`,
}))

function formatDhakaTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Dhaka",
  })
}

function Logo() {
  return (
    <a
      href="#home"
      className="relative z-20 flex items-center gap-3"
      aria-label="Maherukh Islam, back to top"
    >
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 font-mono text-[10px] font-bold tracking-widest text-white"
      >
        MI
      </span>
      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70 md:text-xs">
        Maherukh · Web Builder
      </span>
    </a>
  )
}

export function SiteHeader() {
  const [time, setTime] = useState(() => formatDhakaTime())
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setTime(formatDhakaTime()), 60_000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenu])

  return (
    <Navbar className="px-6">
      {/* Desktop: floating pill navbar that blurs once the page scrolls */}
      <NavBody className="justify-between border border-line bg-surface/80 backdrop-blur-xl">
        <Logo />
        <NavItems
          items={navItems}
          className="text-xs tracking-wide"
        />
        <div className="relative z-20 flex items-center gap-6">
          <div
            className="hidden font-mono text-[10px] tabular-nums text-white/60 xl:block"
            aria-label={`Local time in Dhaka: ${time}`}
            suppressHydrationWarning
          >
            Dhaka {time}
          </div>
          <a
            href="#contact"
            className="rounded-full border border-signal/40 bg-signal/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-signal transition-colors duration-200 hover:bg-signal hover:text-black"
          >
            Let&apos;s talk
          </a>
        </div>
      </NavBody>

      {/* Mobile / tablet: floating bar with dropdown menu */}
      <MobileNav className="border border-line bg-surface/80 backdrop-blur-xl">
        <MobileNavHeader>
          <Logo />
          <MobileNavToggle
            isOpen={mobileMenu}
            onClick={() => setMobileMenu((open) => !open)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={mobileMenu}
          onClose={() => setMobileMenu(false)}
          className="border border-line bg-surface shadow-none backdrop-blur-xl"
        >
          <div
            className="absolute right-6 top-6 font-mono text-[10px] tabular-nums text-white/60"
            suppressHydrationWarning
          >
            Dhaka {time}
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileMenu(false)}
              className="text-sm tracking-wide text-white/80 transition-colors hover:text-signal"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenu(false)}
            className="mt-4 w-fit rounded-full bg-signal px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-black"
          >
            Let&apos;s talk
          </a>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
