const features = [
  {
    title: "Live Scoring",
    desc: "Ball-by-ball cricket scoring, live football match events, and real-time badminton updates — follow every point as it happens.",
    color: "from-sky-400 to-sky-600",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Tournaments",
    desc: "Create tournaments, track standings, and follow knockout brackets from group stage to final, all inside the app.",
    color: "from-indigo-400 to-indigo-600",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v4H4zM4 12h16v8H4z" />
        <path d="M9 12v8M15 12v8" />
      </svg>
    ),
  },
  {
    title: "Clubs & Teams",
    desc: "Build your club, manage your squad, and keep every player's profile, stats and history organized in one place.",
    color: "from-cyan-400 to-cyan-600",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Threads & Communities",
    desc: "Start conversations, join sport-specific communities, and share your take on the matches that matter to you.",
    color: "from-purple-400 to-purple-600",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Direct Messaging",
    desc: "Chat one-on-one or in groups — coordinate a match, talk strategy, or just catch up with your team.",
    color: "from-teal-400 to-teal-600",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4z" />
      </svg>
    ),
  },
  {
    title: "Player Profiles",
    desc: "Your stats, your matches, your career — a living profile that grows with every game you play or follow.",
    color: "from-amber-400 to-amber-600",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-sky-400">
          Everything in one place
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Manage the game. Live the community.
        </h2>
        <p className="mt-4 text-slate-400">
          Rovicu isn&apos;t just a scoring app or just a social app — it&apos;s both, woven together.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
          >
            <div
              className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-slate-950`}
            >
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
