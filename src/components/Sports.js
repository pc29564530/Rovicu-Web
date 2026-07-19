const sports = [
  {
    emoji: "🏏",
    title: "Cricket",
    desc: "Full scorecards, partnerships, and tournament-level batting & bowling stats.",
  },
  {
    emoji: "⚽",
    title: "Football",
    desc: "Lineups, live incidents, shootouts, and match-by-match team performance.",
  },
  {
    emoji: "🏸",
    title: "Badminton",
    desc: "Set-by-set scoring and head-to-head history for singles and doubles.",
  },
];

export default function Sports() {
  return (
    <section id="sports" className="bg-white/[0.02] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-400">
            Multi-sport by design
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Built around how each sport is actually played.
          </h2>
          <p className="mt-4 text-slate-400">
            Rovicu doesn&apos;t force every sport into one generic template —
            scoring, stats and match views are tailored per sport.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {sports.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-8 text-center"
            >
              <div className="text-4xl">{s.emoji}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
