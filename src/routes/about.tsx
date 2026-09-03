import { createFileRoute, Link } from "@tanstack/react-router";

import aboutCook from "../assets/about-cook.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vivian's Kitchen" },
      { name: "description", content: "Vivian's Kitchen is a home-style Kenyan cookery at Gacharage Junction, Red Hill Road, Ruaka. Generous plates, honest food and a warm welcome." },
      { property: "og:title", content: "About — Vivian's Kitchen" },
      { property: "og:description", content: "Home-style Kenyan cookery at Gacharage Junction, Red Hill Road, Ruaka. Generous plates, honest food and a warm welcome." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-8 md:pb-10 md:pt-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="font-mono-brand text-[11px] uppercase tracking-[0.22em] text-brand-accent-ink">The kitchen</p>
          <h1 className="font-anton mt-1 text-5xl uppercase leading-[0.9] tracking-tight text-ink md:text-6xl">
            A kitchen that knows your name
          </h1>
        </div>
        <Link to="/" className="hidden text-xs font-bold uppercase tracking-wide text-ink border-b-2 border-brand-accent pb-0.5 sm:inline-block">
          Back home
        </Link>
      </div>

      <div className="grid items-center gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={aboutCook}
              alt="Warm portrait of Vivian in her kitchen apron with natural light"
              width={900}
              height={1125}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="max-w-[52ch] text-lg leading-relaxed text-ink/80 text-pretty">
            Vivian's Kitchen is a small home-style cookery at Gacharage Junction in Ruaka. There's no rush here — just generous plates, honest food, and the people who keep coming back.
          </p>
          <p className="mt-4 max-w-[52ch] leading-relaxed text-ink/80 text-pretty">
            We started with one table and a few regulars. Word spread, and now neighbours across Ruaka call ahead for takeaway and delivery. Every plate is seasoned the way a mother would: slow, careful, and made to share.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="border border-olive/30 bg-olive/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-olive">Home-style</span>
            <span className="border border-brand-accent/30 bg-brand-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-accent-ink">Takeaway & delivery</span>
            <span className="border border-butter/40 bg-butter/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">Ruaka local</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:0704587546"
              className="group inline-flex items-center gap-3 bg-brand-accent px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide text-cream"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-cream transition-transform group-hover:rotate-90"></span>
              Place an order · 0704 587546
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-ink px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Find us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
