"use client"

import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type SpotlightCardProps = HTMLAttributes<HTMLDivElement>

export const SpotlightCard = forwardRef<HTMLDivElement, SpotlightCardProps>(
  function SpotlightCard({ className, onPointerMove, children, ...props }, ref) {
    return (
      <div
        {...props}
        ref={ref}
        className={cn("spotlight-card", className)}
        onPointerMove={(event) => {
          if (event.pointerType === "mouse") {
            const bounds = event.currentTarget.getBoundingClientRect()
            event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`)
            event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`)
          }
          onPointerMove?.(event)
        }}
      >
        {children}
      </div>
    )
  },
)

SpotlightCard.displayName = "SpotlightCard"
