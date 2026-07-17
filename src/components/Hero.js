export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500/20 to-indigo-500/20 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-32">
        <div>
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-sky-300">
            One app. Every game.
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Where sport meets community.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-slate-300">
            Rovicu brings live scoring, tournaments and player profiles together
            with threads, communities and messaging — built for cricket,
            football and badminton, and the people who live for them.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              <PlayIcon />
              Get it on Google Play
            </a>
            <a
              href="#features"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/5"
            >
              See what&apos;s inside
            </a>
          </div>

          <dl className="mt-12 flex gap-10">
            <div>
              <dt className="sr-only">Sports supported</dt>
              <dd className="text-2xl font-bold text-white">3</dd>
              <span className="text-sm text-slate-400">sports supported</span>
            </div>
            <div>
              <dt className="sr-only">Score and social</dt>
              <dd className="text-2xl font-bold text-white">1</dd>
              <span className="text-sm text-slate-400">app for score &amp; social</span>
            </div>
            <div>
              <dt className="sr-only">Communities</dt>
              <dd className="text-2xl font-bold text-white">∞</dd>
              <span className="text-sm text-slate-400">communities to join</span>
            </div>
          </dl>
        </div>

        <PhoneMock />
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

function PhoneMock() {
  return (
    <div className="mx-auto w-full max-w-[300px]">
      <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-900 p-3 shadow-2xl shadow-sky-500/10">
        <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-slate-700" />
        <div className="space-y-3 rounded-[1.75rem] bg-slate-950 p-4">
          <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
            <div className="flex items-center gap-2 text-xs font-medium text-rose-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-rose-400" />
              LIVE · T20
            </div>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-slate-300">IND</span>
              <strong className="text-white">184/4</strong>
            </div>
            <div className="mt-1 flex items-center justify-between text-sm text-slate-500">
              <span>AUS</span>
              <strong>—</strong>
            </div>
          </div>

          <div className="flex gap-3 rounded-xl border border-white/10 bg-slate-900 p-4">
            <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-indigo-400" />
            <div className="flex-1 space-y-2">
              <div className="h-2 w-3/4 rounded bg-slate-700" />
              <div className="h-2 w-2/5 rounded bg-slate-800" />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
            <div className="h-2 w-1/2 rounded bg-slate-700" />
            <div className="mt-3 flex items-center gap-2">
              <span className="h-8 flex-1 rounded bg-slate-800" />
              <span className="h-8 flex-1 rounded bg-slate-800" />
              <span className="h-8 flex-1 rounded bg-gradient-to-br from-sky-400 to-indigo-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
