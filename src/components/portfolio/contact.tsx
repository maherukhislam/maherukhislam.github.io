"use client"

import { ArrowUpRight, Facebook, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { profile, socials } from "./data"

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook: Facebook,
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-4">
      <span className="relative overflow-hidden" aria-hidden="true">
        <span className="block h-px w-10 bg-white/20" />
        <span className="absolute inset-0 block animate-[lineMove_2s_linear_infinite] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/35">
        {text}
      </span>
      <span className="relative overflow-hidden" aria-hidden="true">
        <span className="block h-px w-10 bg-white/20" />
        <span className="absolute inset-0 block animate-[lineMove_2s_linear_infinite] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </span>
    </div>
  )
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full overflow-hidden bg-black px-4 py-24 text-white sm:px-8 md:px-16 lg:px-24"
    >
      {/* Grid + glow backdrop (from template) */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 opacity-20 blur-[140px]" />
        <div className="absolute bottom-[-220px] right-[-120px] h-[350px] w-[350px] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute left-[-120px] top-[30%] h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 space-y-5 text-center">
          <SectionLabel text="Contact" />
          <h2
            id="contact-heading"
            className="font-black leading-none tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            style={{ fontSize: "clamp(42px,7vw,92px)" }}
          >
            <span className="inline-block bg-gradient-to-b from-white via-white to-white/45 bg-clip-text text-transparent">
              Let&apos;s Build Together
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: pitch */}
          <div className="flex flex-col items-center justify-center gap-8 text-center lg:items-start lg:text-left">
            <p className="text-shine max-w-md text-sm font-medium leading-relaxed tracking-wide sm:text-base lg:text-lg">
              Still running your club or business on paper forms and
              spreadsheets? I build web systems that replace them, and I&apos;m
              open for select web &amp; product work right now. I read every
              email myself.
            </p>

            {/* Social icons */}
            <ul className="mt-2 flex items-center justify-center gap-5 lg:justify-start">
              {socials.map((social) => {
                const Icon = socialIcons[social.name as keyof typeof socialIcons]
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.name}: ${social.handle} (opens in new tab)`}
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>

            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.location}
            </p>
          </div>

          {/* Right: email CTA card */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 animate-pulse rounded-full bg-white/10 opacity-30 blur-[120px]" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.05] p-8 backdrop-blur-xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                Direct line
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 flex min-h-11 items-center gap-3 text-lg font-semibold break-all text-white transition-colors hover:text-white/80 sm:text-xl"
              >
                <Mail className="h-5 w-5 shrink-0 text-white/50" aria-hidden="true" />
                {profile.email}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                Currently a science student (HSC 2026) in Dhaka — planning to
                study CS or software engineering, and building useful web tools
                in Bangladesh along the way.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
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
    <footer className="border-t border-white/10 bg-black px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 font-mono text-[10px] font-bold tracking-widest text-white"
          >
            MI
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white/90">{profile.name}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              Creative Web Builder
            </p>
          </div>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          Built keyboard-first · WCAG-minded · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
