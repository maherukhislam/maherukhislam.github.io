"use client"

import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { Code2, User, Globe } from "lucide-react"
import { useEffect } from "react"

export default function WelcomeScreen({
  onDone,
  duration = 5000,
}: {
  onDone: () => void
  duration?: number
}) {
  const reduceMotion = useReducedMotion()
  const icons = [Code2, User, Globe]

  useEffect(() => {
    // Lock scroll while intro is visible
    document.body.style.overflow = "hidden"
    const timer = setTimeout(onDone, duration)
    return () => {
      document.body.style.overflow = ""
      clearTimeout(timer)
    }
  }, [onDone, duration])

  // Reduced motion: static, short intro
  if (reduceMotion) {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black p-5"
      >
        <div className="text-center text-white">
          <div className="flex justify-center gap-4">
            {icons.map((Icon, i) => (
              <span
                key={i}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5"
              >
                <Icon size={20} />
              </span>
            ))}
          </div>
          <h1 className="mt-6 text-2xl font-black tracking-tight">
            Md. Maherukh Islam
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Creative Web Builder · Portfolio
          </p>
          <button
            type="button"
            onClick={onDone}
            className="mt-8 rounded-full border border-white/30 px-6 py-2 text-xs uppercase tracking-[0.25em] text-white/80 hover:bg-white hover:text-black"
          >
            Enter
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
      }}
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-black p-5"
      role="dialog"
      aria-label="Welcome — portfolio introduction"
    >
      {/* Background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
        <div className="absolute bottom-[-150px] right-[-80px] h-[300px] w-[300px] rounded-full bg-white/5 blur-[100px]" />
      </div>

      {/* Skip button */}
      <button
        type="button"
        onClick={onDone}
        className="absolute right-6 top-6 z-10 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-white/60 backdrop-blur-md transition-colors hover:border-white/30 hover:text-white"
      >
        Skip intro
      </button>

      <div className="relative flex w-full max-w-[340px] flex-col items-center gap-5 text-center text-white">
        {/* Icons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
          className="flex items-center justify-center gap-4"
        >
          {icons.map((Icon, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.3, rotate: -140, y: 60 },
                visible: { opacity: 1, scale: 1, rotate: 0, y: 0 },
              }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.08 }}
              className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_25px_rgba(255,255,255,0.05)] backdrop-blur-md"
            >
              <Icon size={20} color="white" aria-hidden="true" />
            </motion.div>
          ))}
        </motion.div>

        {/* Text */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <motion.span
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(22px,5vw,34px)] font-black tracking-tight"
            >
              Welcome
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(22px,5vw,34px)] font-black tracking-tight"
            >
              to my
            </motion.span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-[clamp(24px,6vw,38px)] font-black leading-tight tracking-tight"
          >
            Portfolio
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="text-sm tracking-wide text-white/60"
        >
          Building systems that just work.
        </motion.p>

        {/* Badge with typed URL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-white/70 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-md"
        >
          <motion.span
            initial={{ width: "0ch" }}
            animate={{ width: "16ch" }}
            transition={{ delay: 2.2, duration: 1.8, ease: "easeInOut" }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            maherukh.dev
          </motion.span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="ml-[2px]"
          >
            |
          </motion.span>
        </motion.div>

        {/* Loading line */}
        <div
          aria-hidden="true"
          className="mt-10 h-[2px] w-[240px] overflow-hidden rounded-full bg-white/20"
        >
          <motion.div
            initial={{ width: "10%" }}
            animate={{ width: "100%" }}
            transition={{ duration: duration / 1000 + 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-white"
          />
        </div>
      </div>
    </motion.div>
  )
}

export { AnimatePresence }
