export default function CTA() {
  return (
    <section id="download" className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500/15 to-indigo-500/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Rovicu is Launching Soon
        </h2>

        <p className="mt-4 text-lg text-slate-400">
          We're putting the finishing touches on Rovicu and completing the final
          verification process before our official launch. Stay tuned—we can't
          wait to welcome you.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Android */}
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-300">
            <AndroidIcon />
            Android • Launching Soon
          </span>

          {/* iOS */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-300">
            <AppleIcon />
            iOS • In Development
          </span>
        </div>
      </div>
    </section>
  );
}

function AndroidIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.6 9.48l1.43-2.48a.5.5 0 10-.87-.5l-1.46 2.53A7.3 7.3 0 0012 8c-1.67 0-3.2.39-4.7 1.03L5.84 6.5a.5.5 0 00-.87.5L6.4 9.48A5.5 5.5 0 003 14v5a1 1 0 001 1h1v2a1 1 0 102 0v-2h10v2a1 1 0 102 0v-2h1a1 1 0 001-1v-5a5.5 5.5 0 00-3.4-4.52zM8.5 12.5a.75.75 0 110-1.5.75.75 0 010 1.5zm7 0a.75.75 0 110-1.5.75.75 0 010 1.5z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.37 1.43c0 1.14-.42 2.2-1.16 2.98-.77.82-2.04 1.45-3.15 1.36-.14-1.08.38-2.2 1.11-2.97.8-.84 2.12-1.43 3.2-1.37zM20.5 17.2c-.44 1.02-.96 1.95-1.6 2.84-.88 1.2-1.8 2.4-3.23 2.42-1.28.03-1.7-.83-3.17-.83-1.47 0-1.94.8-3.15.86-1.37.05-2.42-1.3-3.3-2.5C4.2 17.5 2.8 13.3 4.8 10.1c1-1.6 2.8-2.6 4.74-2.63 1.25-.03 2.42.86 3.17.86.75 0 2.16-1.06 3.64-.9.62.02 2.36.25 3.48 1.9-.09.05-2.08 1.2-2.06 3.58.02 2.83 2.48 3.77 2.73 3.87z" />
    </svg>
  );
}