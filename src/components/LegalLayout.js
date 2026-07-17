import Header from "./Header";
import Footer from "./Footer";

export default function LegalLayout({ title, updated, children }) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>

          <div className="legal-content mt-10 space-y-8 text-slate-300">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
