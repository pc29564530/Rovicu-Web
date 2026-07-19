import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Logo size={22} />
              <span className="text-lg font-semibold">Rovicu</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">
              The sports social platform.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#sports" className="hover:text-white">Sports</a></li>
              <li><a href="#download" className="hover:text-white">Launch Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="mailto:hello@rovicu.com" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <p className="text-center text-xs text-slate-500">
          © {year} Rovicu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
