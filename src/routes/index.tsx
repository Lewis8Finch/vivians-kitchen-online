import { createFileRoute, Link } from "@tanstack/react-router";

import heroPlatter from "../assets/hero-platter.jpg";
import menuNyamaChoma from "../assets/menu-nyama-choma.jpg";
import menuGitheri from "../assets/menu-githeri.jpg";
import menuChapatiNdengu from "../assets/menu-chapati-ndengu.jpg";
import menuTilapia from "../assets/menu-tilapia.jpg";
import aboutCook from "../assets/about-cook.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vivian's Kitchen — Home-style Kenyan food in Ruaka" },
      { name: "description", content: "Vivian's Kitchen serves home-style Kenyan food at Gacharage Junction, Red Hill Road, Ruaka. Takeaway, delivery and dine-in. Open till 10pm. Call 0704 587546 to order." },
      { property: "og:title", content: "Vivian's Kitchen — Home-style Kenyan food in Ruaka" },
      { property: "og:description", content: "Vivian's Kitchen serves home-style Kenyan food at Gacharage Junction, Red Hill Road, Ruaka. Takeaway, delivery and dine-in. Open till 10pm." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const menuItems = [
  {
    name: "Nyama Choma",
    description: "Slow-roasted goat & beef, kachumbari, fresh ugali.",
    image: menuNyamaChoma,
    alt: "Charred nyama choma skewers served on a banana leaf",
  },
  {
    name: "Githeri",
    description: "Beans & maize, soft-cooked, onion & chilli.",
    image: menuGitheri,
    alt: "Bowl of githeri beans and maize",
  },
  {
    name: "Chapati & Ndengu",
    description: "Fluffy flatbread, peanut stew, fresh greens.",
    image: menuChapatiNdengu,
    alt: "Chapati with ndengu stew",
  },
  {
    name: "Grilled Tilapia",
    description: "River fish, kachumbari, fries & lemon.",
    image: menuTilapia,
    alt: "Grilled tilapia with kachumbari and chips",
  },
];

function Index() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 md:pb-10">
      {/* Hero */}
      <section className="grid items-center gap-6 pb-10 pt-8 md:grid-cols-12 md:pt-12">
        <div className="relative order-2 md:order-1 md:col-span-7">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_30%_20%,var(--color-butter)/45%,transparent),radial-gradient(50%_50%_at_80%_90%,var(--color-teal-brand)/25%,transparent)] blur-2xl"></div>
          <div className="animate-rise relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-ink/10" style={{ animationDelay: "80ms" }}>
            <img
              src={heroPlatter}
              alt="Overhead shot of a hot Kenyan platter with nyama choma and githeri steaming on a banana leaf"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
            <span className="steam-puff" style={{ left: "44%", top: "24%", animationDelay: "0s" }}></span>
            <span className="steam-puff" style={{ left: "52%", top: "22%", animationDelay: "1.1s" }}></span>
            <span className="steam-puff" style={{ left: "60%", top: "26%", animationDelay: "2.2s" }}></span>
            <div className="absolute bottom-4 left-4 -rotate-6 bg-brand-accent px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-cream">
              Served hot
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 md:col-span-5">
          <p className="animate-rise font-mono-brand text-[11px] uppercase tracking-[0.22em] text-brand-accent-ink" style={{ animationDelay: "0ms" }}>
            Ruaka · Takeaway & delivery
          </p>
          <h1 className="animate-rise font-display text-[15vw] uppercase leading-[0.9] tracking-tight text-ink text-balance md:text-[6rem]" style={{ animationDelay: "90ms" }}>
            Cooked <span className="bg-gradient-to-r from-brand-accent via-plum to-teal-brand bg-clip-text text-transparent">like</span> you're family
          </h1>
          <p className="animate-rise mt-5 max-w-[40ch] leading-relaxed text-ink/80 text-pretty" style={{ animationDelay: "180ms" }}>
            Nyama choma, githeri and home-style plates from Gacharage Junction. Call ahead — we've got your order ready.
          </p>
          <div className="animate-rise mt-6 flex flex-wrap gap-3" style={{ animationDelay: "270ms" }}>
            <a
              href="tel:0704587546"
              className="group inline-flex items-center gap-3 rounded-full bg-brand-accent px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-cream shadow-lg shadow-brand-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-accent/40"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-cream transition-transform group-hover:rotate-90"></span>
              Place an order
              <span className="font-mono-brand font-normal normal-case">0704 587546</span>
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center rounded-full border-2 border-ink px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              See the menu
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="-rotate-1 scale-x-[1.02] overflow-hidden border-y-2 border-ink bg-brand-accent py-3 text-cream">
        <div className="animate-marquee flex whitespace-nowrap font-display text-lg tracking-wide">
          <span className="mx-6">Takeaway</span>
          <span className="mx-6 text-ink">✦</span>
          <span className="mx-6">Delivery across Ruaka</span>
          <span className="mx-6 text-ink">✦</span>
          <span className="mx-6">Open till 10pm</span>
          <span className="mx-6 text-ink">✦</span>
          <span className="mx-6">Call to order</span>
          <span className="mx-6 text-ink">✦</span>
          <span className="mx-6">Nyama Choma</span>
          <span className="mx-6 text-ink">✦</span>
          <span className="mx-6">Githeri</span>
          <span className="mx-6 text-ink">✦</span>
          <span className="mx-6">Takeaway</span>
          <span className="mx-6 text-ink">✦</span>
          <span className="mx-6">Delivery across Ruaka</span>
          <span className="mx-6 text-ink">✦</span>
          <span className="mx-6">Open till 10pm</span>
          <span className="mx-6 text-ink">✦</span>
          <span className="mx-6">Call to order</span>
          <span className="mx-6 text-ink">✦</span>
          <span className="mx-6">Nyama Choma</span>
          <span className="mx-6 text-ink">✦</span>
          <span className="mx-6">Githeri</span>
          <span className="mx-6 text-ink">✦</span>
        </div>
      </div>

      {/* Info bar */}
      <section className="mt-10 grid grid-cols-3 gap-px border-2 border-ink bg-ink">
        <div className="bg-background p-4">
          <p className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-brand-muted">Hours</p>
          <p className="mt-1 text-sm font-bold text-ink">Open · till 10pm</p>
        </div>
        <div className="bg-background p-4">
          <p className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-brand-muted">Find us</p>
          <p className="mt-1 text-sm font-bold text-ink">Gacharage Jct, Ruaka</p>
        </div>
        <div className="bg-background p-4">
          <p className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-brand-muted">Call</p>
          <a href="tel:0704587546" className="mt-1 inline-block text-sm font-bold text-ink hover:text-brand-accent">
            0704 587546
          </a>
        </div>
      </section>

      {/* Menu highlights */}
      <section id="menu" className="mt-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="font-mono-brand text-[11px] uppercase tracking-[0.22em] text-brand-accent-ink">Menu & highlights</p>
            <h2 className="font-display mt-1 text-5xl uppercase tracking-tight text-ink md:text-6xl">On the menu</h2>
          </div>
          <Link to="/menu" className="hidden text-xs font-bold uppercase tracking-wide text-ink border-b-2 border-brand-accent pb-0.5 sm:inline-block">
            Full menu
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {menuItems.map((item, i) => (
            <article
              key={item.name}
              className="animate-rise flex items-start gap-4 border-2 border-ink bg-cream p-5"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <img
                src={item.image}
                alt={item.alt}
                width={96}
                height={96}
                loading="lazy"
                className="h-24 w-24 shrink-0 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-bold leading-tight text-ink">{item.name}</h3>
                  <span className="font-mono-brand text-[11px] text-brand-accent-ink shrink-0">Sample</span>
                </div>
                <p className="mt-1 text-sm leading-snug text-brand-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="relative mt-16 overflow-hidden rounded-2xl bg-ink p-6 text-cream md:p-10">
        <span className="font-display absolute -right-6 -top-8 text-[9rem] leading-none select-none text-ink opacity-10">5.0</span>
        <div className="relative max-w-2xl">
          <p className="font-mono-brand text-[11px] uppercase tracking-[0.22em] text-butter">What regulars say</p>
          <h2 className="font-display mt-1 text-4xl uppercase tracking-tight md:text-5xl">Kept warm</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <figure className="animate-rise rounded-xl border border-cream/15 bg-cream/5 p-5" style={{ animationDelay: "0ms" }}>
              <div className="text-sm tracking-widest text-butter">★★★★★</div>
              <blockquote className="mt-2 text-sm leading-relaxed text-cream/90">
                "Simply amazing. Great taste, great customer service & delivery on time."
              </blockquote>
              <figcaption className="mt-3 font-mono-brand text-[11px] uppercase tracking-wide text-cream/50">Lilian Inyanji</figcaption>
            </figure>
            <figure className="animate-rise rounded-xl border border-cream/15 bg-cream/5 p-5" style={{ animationDelay: "120ms" }}>
              <div className="text-sm tracking-widest text-butter">★★★★★</div>
              <blockquote className="mt-2 text-sm leading-relaxed text-cream/90">
                "Great food, excellent service. Order type — delivery."
              </blockquote>
              <figcaption className="mt-3 font-mono-brand text-[11px] uppercase tracking-wide text-cream/50">Hesbon Magara</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mt-16 grid items-center gap-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="animate-rise relative aspect-[4/5] overflow-hidden rounded-2xl" style={{ animationDelay: "0ms" }}>
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
          <p className="font-mono-brand text-[11px] uppercase tracking-[0.22em] text-brand-accent-ink">About</p>
          <h2 className="animate-rise font-display mt-1 text-4xl uppercase leading-[0.9] tracking-tight text-ink md:text-5xl" style={{ animationDelay: "90ms" }}>
            A kitchen that knows your name
          </h2>
          <p className="animate-rise mt-4 max-w-[52ch] leading-relaxed text-ink/80 text-pretty" style={{ animationDelay: "180ms" }}>
            Vivian's Kitchen is a small home-style cookery at Gacharage Junction in Ruaka. There's no rush here — just generous plates, honest food, and the people who keep coming back.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="border border-olive/30 bg-olive/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-olive">Home-style</span>
            <span className="border border-brand-accent/30 bg-brand-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-accent-ink">Takeaway & delivery</span>
            <span className="border border-butter/40 bg-butter/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">Ruaka local</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="mt-16 border-t-2 border-ink pt-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-3xl uppercase tracking-tight text-ink">
              Vivian's <span className="text-brand-accent">Kitchen</span>
            </p>
            <p className="mt-2 text-sm text-brand-muted">Gacharage Junction, Red Hill Road, Ruaka · QQX6+6F</p>
          </div>
          <a
            href="tel:0704587546"
            className="group inline-flex items-center gap-3 bg-ink px-6 py-4 text-base font-extrabold uppercase tracking-wide text-cream"
          >
            <span className="h-3 w-3 rounded-full bg-butter transition-transform group-hover:rotate-90"></span>
            Call 0704 587546
          </a>
        </div>
        <p className="mt-6 font-mono-brand text-[11px] text-brand-muted/80">© Vivian's Kitchen · Ruaka, Kenya · Menu prices shown are samples</p>
      </footer>
    </main>
  );
}
