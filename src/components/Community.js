const points = [
  "Follow players and teams you care about",
  "Join or create communities for any sport",
  "Comment, like and share match threads",
  "Message teammates and opponents directly",
];

export default function Community() {
  return (
    <section id="community" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-16 md:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-400">
            More than a scoreboard
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Sport is better with people.
          </h2>
          <p className="mt-6 text-slate-400">
            Every match, tournament and club on Rovicu lives inside a social
            layer — follow players, join communities built around your
            favorite sport, drop into threads after a big win, and message
            your team directly. The score is just the start of the
            conversation.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                <CheckIcon />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-sky-500/10 to-indigo-500/10 blur-3xl"
            aria-hidden
          />
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex gap-3 rounded-2xl border border-white/10 bg-slate-900 p-5"
              >
                <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-indigo-400" />
                <div className="flex-1 space-y-2">
                  <div className="h-2 w-1/2 rounded bg-slate-700" />
                  <div className="h-2 w-4/5 rounded bg-slate-800" />
                  {i === 1 && <div className="h-2 w-1/3 rounded bg-slate-800" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="mt-0.5 shrink-0 text-sky-400"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
