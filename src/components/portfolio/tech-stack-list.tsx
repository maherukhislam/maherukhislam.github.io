"use client"

import { techStack } from "./data"

/* Flat, static tech list - replaces the 3D physics sphere (gimmick for a
   list of names; a grid is faster to scan and loads instantly) */
export function TechStackList() {
  return (
    <ul className="grid max-w-3xl grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
      {techStack.map((tech) => (
        <li
          key={tech.name}
          className="rounded-lg border border-line bg-surface-raised px-3 py-2.5 text-center text-sm text-white/70 transition-colors duration-200 hover:border-signal/40 hover:text-white"
        >
          {tech.name}
        </li>
      ))}
    </ul>
  )
}


