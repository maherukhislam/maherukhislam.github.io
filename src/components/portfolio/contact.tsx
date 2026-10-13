"use client"

import { ArrowUpRight, Facebook, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { profile, socials } from "./data"
import { SectionLabel } from "./section-label"

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook: Facebook,
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full overflow-hidden border-t border-line bg-surface px-6 py-24 text-white md:px-10"
    >
      {/* Grid */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="mb-16">
          <SectionLabel text="Contact" />
          <h2
            id="contact-heading"
            className="mt-5 max-w-3xl text-[clamp(40px,7vw,88px)] font-semibold leading-[0.95] tracking-tight text-white text-balance"
          >
            Let&apos;s Build Together
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left: pitch */}
          <div className="flex flex-col items-start gap-8">
            <p className="max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              Still running your club or business on paper forms and
              spreadsheets? I build web systems that replace them, and I&apos;m
              open for select web &amp; product work right now. I read every
              email myself.
            </p>

            {/* Social icons */}
            <ul className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = socialIcons[social.name as keyof typeof socialIcons]
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.name}: ${social.handle} (opens in new tab)`}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface-raised text-white/55 transition-colors duration-200 hover:border-signal/40 hover:text-signal"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>

            <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] text-white/55 uppercase">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.location}
            </p>
          </div>

          {/* Right: email CTA card */}
          <div className="w-full max-w-md">
            <div className="relative overflow-hidden rounded-xl border border-line bg-surface-raised p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
              />
              <p className="font-mono text-[11px] tracking-[0.15em] text-white/55 uppercase">
                Direct line
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 flex min-h-11 items-center gap-3 text-lg font-semibold break-all text-white transition-colors duration-200 hover:text-signal sm:text-xl"
              >
                <Mail className="h-5 w-5 shrink-0 text-white/40" aria-hidden="true" />
                {profile.email}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-white/45">
                I&apos;m a science student in Dhaka, planning to study computer
                science or software engineering while building useful web
                tools for organizations in Bangladesh.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-signal px-6 py-3 text-xs font-bold tracking-[0.15em] text-black uppercase transition-colors duration-200 hover:bg-signal/85"
              >
                Start a conversation
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface-raised font-mono text-[10px] font-bold tracking-widest text-white"
          >
            MI
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white/90">{profile.name}</p>
            <p className="font-mono text-[10px] tracking-[0.15em] text-white/55 uppercase">
              Creative Web Builder
            </p>
          </div>
        </div>

        <p className="font-mono text-[10px] tracking-[0.15em] text-white/55 uppercase">
          Built keyboard-first · WCAG-minded · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
