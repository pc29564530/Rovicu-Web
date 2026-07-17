const sports = [
  { emoji: "🏏", label: "Cricket" },
  { emoji: "⚽", label: "Football" },
  { emoji: "🏸", label: "Badminton" },
];

export default function SportsStrip() {
  return (
    <div className="border-y border-white/5 bg-white/[0.02]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-6 py-6 sm:justify-between">
        <span className="text-sm font-medium text-slate-400">Built for</span>
        <div className="flex flex-wrap gap-3">
          {sports.map((s) => (
            <span
              key={s.label}
              className="rounded-full border border-white/10 bg-slate-900 px-4 py-1.5 text-sm text-slate-200"
            >
              {s.emoji} {s.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
