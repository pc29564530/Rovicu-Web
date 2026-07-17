export default function Logo({ size = 28 }) {
  const id = "rovicu-logo-gradient";
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="13" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M14 4 L14 24 M4 14 L24 14" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="28" y2="28">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
