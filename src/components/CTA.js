export default function CTA() {
  return (
    <section id="download" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500/15 to-indigo-500/15 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Ready to play?
        </h2>
        <p className="mt-4 text-slate-400">
          Join Rovicu and bring your scores, your squad and your community
          into one app.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
          >
            <PlayIcon />
            Get it on Google Play
          </a>
          <span className="rounded-full border border-white/10 px-6 py-3 text-sm text-slate-400">
            iOS — coming soon
          </span>
        </div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.6.4-1 1-1 .2 0 .3 0 .5.1l14 8.5c.5.3.7 1 .4 1.4-.1.2-.2.3-.4.4l-14 8.5c-.5.3-1.1.1-1.4-.4-.1-.1-.1-.3-.1-.5z" />
    </svg>
  );
}
