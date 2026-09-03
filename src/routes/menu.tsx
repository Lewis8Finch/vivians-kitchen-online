import { createFileRoute, Link } from "@tanstack/react-router";

import menuNyamaChoma from "../assets/menu-nyama-choma.jpg";
import menuGitheri from "../assets/menu-githeri.jpg";
import menuChapatiNdengu from "../assets/menu-chapati-ndengu.jpg";
import menuTilapia from "../assets/menu-tilapia.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Vivian's Kitchen" },
      { name: "description", content: "See what's cooking at Vivian's Kitchen in Ruaka. Nyama choma, githeri, chapati, grilled tilapia and more home-style Kenyan plates. Call 0704 587546 to order." },
      { property: "og:title", content: "Menu — Vivian's Kitchen" },
      { property: "og:description", content: "Home-style Kenyan dishes at Vivian's Kitchen, Ruaka. Nyama choma, githeri, chapati & ndengu, grilled tilapia." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

const menuItems = [
  {
    name: "Nyama Choma",
    description: "Slow-roasted goat & beef, kachumbari, fresh ugali.",
    image: menuNyamaChoma,
    alt: "Charred nyama choma skewers served on a banana leaf",
    tag: "Grilled",
  },
  {
    name: "Githeri",
    description: "Beans & maize, soft-cooked, onion & chilli.",
    image: menuGitheri,
    alt: "Bowl of githeri beans and maize",
    tag: "Stew",
  },
  {
    name: "Chapati & Ndengu",
    description: "Fluffy flatbread, peanut stew, fresh greens.",
    image: menuChapatiNdengu,
    alt: "Chapati with ndengu stew",
    tag: "Sharing",
  },
  {
    name: "Grilled Tilapia",
    description: "River fish, kachumbari, fries & lemon.",
    image: menuTilapia,
    alt: "Grilled tilapia with kachumbari and chips",
    tag: "Signature",
  },
];

function MenuPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-8 md:pb-10 md:pt-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="font-mono-brand text-[11px] uppercase tracking-[0.22em] text-brand-accent-ink">Menu & highlights</p>
          <h1 className="font-anton mt-1 text-5xl uppercase tracking-tight text-ink md:text-6xl">On the menu</h1>
        </div>
        <Link to="/" className="hidden text-xs font-bold uppercase tracking-wide text-ink border-b-2 border-brand-accent pb-0.5 sm:inline-block">
          Back home
        </Link>
      </div>
      <p className="max-w-[60ch] text-ink/80 text-pretty">
        A few regulars call these the reason they come back. Portions are generous, flavours are honest, and everything leaves the kitchen hot. Prices shown are sample placeholders — call to confirm today's menu and pricing.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
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
                <h2 className="text-lg font-bold leading-tight text-ink">{item.name}</h2>
                <span className="font-mono-brand text-[11px] text-brand-accent-ink shrink-0">Sample</span>
              </div>
              <p className="mt-1 text-sm leading-snug text-brand-muted">{item.description}</p>
              <span className="mt-3 inline-block border border-olive/30 bg-olive/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-olive">
                {item.tag}
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
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
    </main>
  );
}
