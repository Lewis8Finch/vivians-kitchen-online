import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vivian's Kitchen" },
      { name: "description", content: "Find Vivian's Kitchen at Gacharage Junction, Red Hill Road, Ruaka. Open till 10pm. Call 0704 587546 for takeaway and delivery orders." },
      { property: "og:title", content: "Contact — Vivian's Kitchen" },
      { property: "og:description", content: "Vivian's Kitchen at Gacharage Junction, Red Hill Road, Ruaka. Open till 10pm. Call 0704 587546 for orders." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-8 md:pb-10 md:pt-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="font-mono-brand text-[11px] uppercase tracking-[0.22em] text-brand-accent-ink">Find us</p>
          <h1 className="font-display mt-1 text-5xl uppercase tracking-tight text-ink md:text-6xl">Visit Vivian's</h1>
        </div>
        <Link to="/" className="hidden text-xs font-bold uppercase tracking-wide text-ink border-b-2 border-brand-accent pb-0.5 sm:inline-block">
          Back home
        </Link>
      </div>

      <div className="rounded-2xl bg-ink p-6 text-cream md:p-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl uppercase tracking-tight">Gacharage Junction, Ruaka</h2>
            <p className="mt-2 text-cream/85">Red Hill Road, Ruaka, Nairobi · QQX6+6F</p>
            <div className="mt-6 space-y-3 font-mono-brand text-sm uppercase tracking-wide text-cream/90">
              <p className="flex items-center gap-2">
                <span className="text-butter">◆</span>Open daily · Closes 10pm
              </p>
              <p className="flex items-center gap-2">
                <span className="text-butter">◆</span>Takeaway, delivery & dine-in
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:0704587546"
                className="group inline-flex items-center gap-3 bg-butter px-6 py-4 text-base font-extrabold uppercase tracking-wide text-ink"
              >
                <span className="h-3 w-3 rounded-full bg-ink transition-transform group-hover:rotate-90"></span>
                Call 0704 587546
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Vivian's+Kitchen+Gacharage+Junction+Red+Hill+Road+Ruaka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-cream/40 px-6 py-4 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-cream/10"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="space-y-4 rounded-xl border border-cream/15 bg-cream/5 p-5">
            <h3 className="font-display text-xl uppercase tracking-tight text-butter">Order by phone</h3>
            <p className="text-sm leading-relaxed text-cream/90">
              The quickest way to order is to call ahead. Let us know what you'd like, and we'll have it ready for pickup or send it out for delivery across Ruaka.
            </p>
            <a href="tel:0704587546" className="block font-mono-brand text-2xl font-medium text-cream hover:text-butter">
              0704 587546
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-16 border-t-2 border-ink pt-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-3xl uppercase tracking-tight text-ink">
              Vivian's <span className="text-brand-accent">Kitchen</span>
            </p>
            <p className="mt-2 text-sm text-brand-muted">Gacharage Junction, Red Hill Road, Ruaka · QQX6+6F</p>
          </div>
        </div>
        <p className="mt-6 font-mono-brand text-[11px] text-brand-muted/80">© Vivian's Kitchen · Ruaka, Kenya</p>
      </footer>
    </main>
  );
}
