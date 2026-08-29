"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "showcase", label: "Showcase" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
]

const linkClass =
  "relative hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"

function formatDhakaTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Dhaka",
  })
}

export function SiteHeader() {
  const [time, setTime] = useState(() => formatDhakaTime())
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setTime(formatDhakaTime()), 1000)
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenu(false)
  }

  return (
    <nav
      aria-label="Primary"
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/20 px-6 py-5 backdrop-blur-xl md:px-12"
    >
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault()
          scrollTo("home")
        }}
        className="flex items-center gap-3"
        aria-label="Maherukh Islam — back to top"
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

      {/* Desktop nav */}
      <ul className="hidden items-center gap-10 text-xs uppercase tracking-widest text-white/70 md:flex">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.id)
              }}
              className={linkClass}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Live Dhaka clock */}
      <div
        className="hidden text-[10px] uppercase tracking-[0.3em] text-white/70 md:block"
        aria-label={`Local time in Dhaka: ${time}`}
        suppressHydrationWarning
      >
        Dhaka {time}
      </div>

      <button
        type="button"
        onClick={() => setMobileMenu((open) => !open)}
        aria-expanded={mobileMenu}
        aria-label={mobileMenu ? "Close menu" : "Open menu"}
        className="z-50 flex h-11 w-11 items-center justify-center text-white md:hidden"
      >
        {mobileMenu ? (
          <X size={24} aria-hidden="true" />
        ) : (
          <Menu size={24} aria-hidden="true" />
        )}
      </button>

      {/* Mobile fullscreen menu */}
      {mobileMenu ? (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black/95 text-sm uppercase tracking-[0.3em] text-white backdrop-blur-xl md:hidden">
          <div className="absolute top-24 text-center" suppressHydrationWarning>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-white/40">TIME — DHAKA</p>
            <h2 className="text-2xl font-semibold tracking-widest">{time}</h2>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.id)
              }}
              className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </nav>
  )
}
