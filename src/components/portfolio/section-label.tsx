/* Shared section eyebrow: static hairline + mono label (replaces the 3
   duplicated animated-line versions from the template) */
export function SectionLabel({ text }: { text: string }) {
  return (
    <p className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
      <span aria-hidden="true" className="h-px w-8 bg-signal/60" />
      {text}
    </p>
  )
}