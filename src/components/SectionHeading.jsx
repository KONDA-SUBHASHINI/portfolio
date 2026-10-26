export default function SectionHeading({ eyebrow, title, highlight, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-zinc-300 sm:w-16" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </span>
        <span className="h-px w-10 bg-zinc-300 sm:w-16" />
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold text-zinc-900 sm:text-4xl">
        {title} {highlight && <span className="text-accent">{highlight}</span>}
      </h2>
      {subtitle && <p className="mt-4 leading-relaxed text-zinc-600">{subtitle}</p>}
    </div>
  );
}