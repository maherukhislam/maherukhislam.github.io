"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"
import {
  Atom,
  Braces,
  Cloud,
  Code,
  Code2,
  Database,
  FileCode2,
  Flame,
  GitBranch,
  Github,
  HardDrive,
  Palette,
  Terminal,
  Triangle,
  Wind,
  Zap,
} from "lucide-react"
import { techStack } from "./data"

const iconMap = {
  atom: Atom,
  filecode: FileCode2,
  triangle: Triangle,
  wind: Wind,
  braces: Braces,
  code: Code,
  palette: Palette,
  database: Database,
  zap: Zap,
  terminal: Terminal,
  harddrive: HardDrive,
  cloud: Cloud,
  gitbranch: GitBranch,
  github: Github,
  flame: Flame,
}

const SCENE = 420
const TILE = 72
const RADIUS = 160

/* Static accessible grid fallback (reduced motion / no-JS-anim) */
function TechGridStatic() {
  return (
    <ul className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
      {techStack.map((tech) => {
        const Icon = iconMap[tech.icon] ?? Code2
        return (
          <li
            key={tech.name}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-white/80">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium text-white/80">{tech.name}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default function TechSphere() {
  const reduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const itemEls = useRef<HTMLDivElement[]>([])
  const rotX = useRef(0.3)
  const rotY = useRef(0)
  const velX = useRef(0)
  const velY = useRef(0.004)
  const isDragging = useRef(false)
  const lastMX = useRef(0)
  const lastMY = useRef(0)
  const dragVX = useRef(0)
  const dragVY = useRef(0)
  const rafId = useRef<number | undefined>(undefined)

  const n = techStack.length

  // Fibonacci sphere positions
  const positions = useRef<{ x: number; y: number; z: number }[]>([])
  useEffect(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5))
    positions.current = Array.from({ length: n }, (_, i) => {
      const y = 1 - (i / (n - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = goldenAngle * i
      return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r }
    })
  }, [n])

  function project(
    pos: { x: number; y: number; z: number },
    rx: number,
    ry: number
  ) {
    const cosY = Math.cos(ry),
      sinY = Math.sin(ry)
    const x1 = pos.x * cosY - pos.z * sinY
    const z1 = pos.x * sinY + pos.z * cosY
    const cosX = Math.cos(rx),
      sinX = Math.sin(rx)
    const y2 = pos.y * cosX - z1 * sinX
    const z2 = pos.y * sinX + z1 * cosX
    return { x: x1, y: y2, z: z2 }
  }

  useEffect(() => {
    if (reduceMotion) return
    const els = itemEls.current

    function render() {
      if (!isDragging.current) {
        rotY.current += velY.current
        rotX.current += velX.current
        velX.current *= 0.97
        velY.current = velY.current * 0.99 + 0.004 * 0.01
        if (rotX.current > 0.6) velX.current -= 0.0005
        if (rotX.current < -0.1) velX.current += 0.0005
      }

      const projected = positions.current.map((pos, i) => ({
        el: els[i],
        p: project(pos, rotX.current, rotY.current),
      }))

      projected
        .slice()
        .sort((a, b) => a.p.z - b.p.z)
        .forEach(({ el, p }, idx) => {
          if (!el) return
          const x = p.x * RADIUS + SCENE / 2 - TILE / 2
          const y = p.y * RADIUS + SCENE / 2 - TILE / 2
          const depth = (p.z + 1) / 2
          const opacity = 0.25 + depth * 0.75
          const scale = 0.55 + depth * 0.55
          el.style.cssText = `position:absolute;left:${x}px;top:${y}px;opacity:${opacity};transform:scale(${scale});z-index:${idx};width:${TILE}px;height:${TILE}px;`
        })

      rafId.current = requestAnimationFrame(render)
    }

    rafId.current = requestAnimationFrame(render)
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [reduceMotion])

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    lastMX.current = e.clientX
    lastMY.current = e.clientY
    dragVX.current = 0
    dragVY.current = 0
  }

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      const dx = e.clientX - lastMX.current
      const dy = e.clientY - lastMY.current
      dragVX.current = dy * 0.005
      dragVY.current = dx * 0.005
      rotX.current += dragVX.current
      rotY.current += dragVY.current
      lastMX.current = e.clientX
      lastMY.current = e.clientY
    }
    const onMouseUp = () => {
      if (isDragging.current) {
        velX.current = dragVX.current
        velY.current = dragVY.current || 0.004
        isDragging.current = false
      }
    }
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [])

  // Touch drag
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true
    lastMX.current = e.touches[0].clientX
    lastMY.current = e.touches[0].clientY
    dragVX.current = 0
    dragVY.current = 0
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return
    const dx = e.touches[0].clientX - lastMX.current
    const dy = e.touches[0].clientY - lastMY.current
    dragVX.current = dy * 0.005
    dragVY.current = dx * 0.005
    rotX.current += dragVX.current
    rotY.current += dragVY.current
    lastMX.current = e.touches[0].clientX
    lastMY.current = e.touches[0].clientY
  }
  const onTouchEnd = () => {
    velX.current = dragVX.current
    velY.current = dragVY.current || 0.004
    isDragging.current = false
  }

  if (reduceMotion) {
    return <TechGridStatic />
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-3 text-white/40">
        <div aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-transparent to-white/30" />
        <span className="font-mono text-[10px] uppercase tracking-[0.4em]">
          {techStack.length} technologies · drag to spin
        </span>
        <div aria-hidden="true" className="h-px w-10 bg-gradient-to-l from-transparent to-white/30" />
      </div>

      <div
        ref={containerRef}
        className="relative flex w-full select-none items-center justify-center"
        style={{ height: "460px", cursor: "grab", touchAction: "none" }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="img"
        aria-label={`Interactive rotating sphere of technologies: ${techStack
          .map((t) => t.name)
          .join(", ")}`}
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
          }}
        />

        {/* Scene */}
        <div className="relative" style={{ width: SCENE, height: SCENE }}>
          {techStack.map((tech, i) => {
            const Icon = iconMap[tech.icon] ?? Code2
            return (
              <div
                key={tech.name}
                ref={(el) => {
                  if (el) itemEls.current[i] = el
                }}
                style={{ position: "absolute", width: TILE, height: TILE }}
              >
                <div
                  className="flex h-full w-full flex-col items-center justify-center gap-[5px] rounded-[18px] transition-[border-color] duration-200 hover:scale-110"
                  style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 0 20px -8px rgba(255,255,255,0.18)",
                    transition: "transform 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(255,255,255,0.4)"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(255,255,255,0.12)"
                  }}
                >
                  <Icon
                    size={26}
                    color="rgba(255,255,255,0.85)"
                    aria-hidden="true"
                    style={{ width: 26, height: 26 }}
                  />
                  <span
                    style={{
                      fontSize: 9,
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    {tech.name}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Fade edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{ boxShadow: "inset 0 0 80px 40px rgba(0,0,0,0.7)" }}
        />
      </div>

      <ul className="sr-only">
        {techStack.map((tech) => (
          <li key={tech.name}>{tech.name}</li>
        ))}
      </ul>
    </div>
  )
}
