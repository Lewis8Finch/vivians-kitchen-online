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
    price: "Ksh 900",
    tag: "Popular",
    category: "From the grill",
    description: "Slow-roasted goat and beef served with kachumbari and fresh ugali.",
    image: menuNyamaChoma,
    alt: "Charred nyama choma skewers served on a banana leaf",
  },
  {
    name: "Githeri",
    price: "Ksh 300",
    tag: null,
    category: "Local classics",
    description: "Beans and maize slow-cooked soft with onion, tomato and a touch of chilli.",
    image: menuGitheri,
    alt: "Bowl of githeri beans and maize",
  },
  {
    name: "Chapati & Ndengu",
    price: "Ksh 350",
    tag: "Popular",
    category: "Everyday plates",
    description: "Fluffy layered chapati with rich green-gram stew and fresh greens.",
    image: menuChapatiNdengu,
    alt: "Chapati with ndengu stew",
  },
  {
    name: "Grilled Tilapia",
    price: "Ksh 850",
    tag: null,
    category: "From the lake",
    description: "Whole tilapia grilled to order with kachumbari, fries and lemon.",
    image: menuTilapia,
    alt: "Grilled tilapia with kachumbari and chips",
  },
];

const facts = [
  { title: "Open daily", body: "Hot food served until 10 pm, seven days a week." },
  { title: "Cooked to order", body: "Nothing sits under a lamp — every plate is made fresh." },
  { title: "Easy to find", body: "Gacharage Junction on Red Hill Road, Ruaka." },
  { title: "Fair prices", body: "Ksh 300–900 covers a full, satisfying meal." },
];

function Index() {
  return (
    <main className="pb-24 md:pb-0">
      {/* Hero */}
      <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden">
        <img
          src={heroPlatter}
          alt="Overhead shot of a hot Kenyan platter with nyama choma and githeri steaming on a banana leaf"
          width={1200}
          height={900}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/30"></div>
        <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-28">
          <div className="inline-flex items-center gap-3 rounded-full bg-background/15 px-4 py-2 backdrop-blur">
            <span className="text-sm tracking-widest text-accent">★★★★★</span>
            <span className="text-sm font-medium text-background">5.0 from Google reviews</span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-5xl uppercase leading-[0.95] text-background text-balance md:text-7xl">
            Ruaka's home-style <span className="text-accent">Kenyan kitchen</span> at Gacharage Junction
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-background/80 text-pretty">
            Vivian's Kitchen cooks generous, honestly-priced local meals — nyama choma, githeri, chapati and fresh
            tilapia. Order for takeaway or delivery, or call ahead and we'll have it ready.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
            >
              View the menu
            </a>
            <a
              href="tel:0704587546"
              className="inline-flex items-center rounded-full border border-background/40 px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-background/10"
            >
              Call 0704 587546
            </a>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px px-5 py-6 sm:grid-cols-3">
          {[
            { label: "Open daily", value: "Until 10 pm" },
            { label: "Avg. spend", value: "Ksh 300–900" },
            { label: "Location", value: "Gacharage Jct, Ruaka" },
          ].map((s) => (
            <div key={s.label} className="py-2 sm:px-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
              <p className="mt-1 text-lg font-semibold text-foreground">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Menu highlights</p>
        <h2 className="mt-2 max-w-2xl font-display text-4xl uppercase leading-tight text-foreground md:text-5xl">
          The plates our regulars keep coming back for
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Cooked fresh to order, served fast, and priced for everyday eating. Most guests spend between{" "}
          <strong className="font-semibold text-foreground">Ksh 300 and Ksh 900</strong> per person. Prices shown are
          samples.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{item.category}</p>
                <div className="mt-2 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl uppercase text-foreground">{item.name}</h3>
                  <span className="shrink-0 font-semibold text-primary">{item.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/menu"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            See the full menu
          </Link>
          <p className="text-sm text-muted-foreground">Vegetarian and lighter plates served all day.</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <div className="overflow-hidden rounded-xl">
            <img
              src={aboutCook}
              alt="Warm portrait of Vivian in her kitchen apron with natural light"
              width={900}
              height={1125}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Our place in Ruaka</p>
            <h2 className="mt-2 font-display text-4xl uppercase leading-tight text-foreground md:text-5xl">
              A small kitchen that knows your name
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Vivian's Kitchen has fed the Gacharage Junction neighbourhood with home-style cooking — office workers
              grabbing lunch, families ordering a grill platter, neighbours picking up dinner on the way home.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We cook with fresh produce, keep the prices honest, and treat every guest like a regular. That's the whole
              commitment.
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.title}>
                  <dt className="font-display text-xl uppercase text-foreground">{f.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">What diners say</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl uppercase text-foreground md:text-5xl">Rated 5.0★ by our guests</h2>
          <div className="flex items-center gap-3">
            <span className="font-display text-5xl text-primary">5.0</span>
            <span className="text-sm text-muted-foreground">2 Google reviews</span>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[
            { quote: "Simply amazing. Great taste, great customer service & delivery on time.", name: "Lilian Inyanji" },
            { quote: "Great food, excellent service. Order type — delivery.", name: "Hesbon Magara" },
          ].map((r) => (
            <figure key={r.name} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="text-sm tracking-widest text-accent">★★★★★</div>
              <blockquote className="mt-3 leading-relaxed text-foreground">"{r.quote}"</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-muted-foreground">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact / footer */}
      <footer id="contact" className="bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="font-display text-3xl uppercase tracking-wide">Vivian's Kitchen</p>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              Gacharage Junction, Red Hill Road, Ruaka
              <br />
              Plus code QQX6+6F Ruaka
            </p>
            <p className="mt-4 text-sm text-background/70">Open daily · closes 10 pm</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:0704587546"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Call 0704 587546
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Vivian%27s+Kitchen+Ruaka"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-background/30 px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-background/10"
              >
                Get directions
              </a>
            </div>
          </div>
          <nav className="grid grid-cols-2 gap-4 text-sm md:justify-items-end">
            <Link to="/menu" className="text-background/70 transition-colors hover:text-background">Menu</Link>
            <Link to="/about" className="text-background/70 transition-colors hover:text-background">About</Link>
            <Link to="/reviews" className="text-background/70 transition-colors hover:text-background">Reviews</Link>
            <Link to="/contact" className="text-background/70 transition-colors hover:text-background">Contact</Link>
          </nav>
        </div>
        <div className="border-t border-background/10 py-6 text-center text-xs text-background/50">
          © {new Date().getFullYear()} Vivian's Kitchen · Ruaka, Kenya · Menu prices shown are samples
        </div>
      </footer>
    </main>
  );
}
