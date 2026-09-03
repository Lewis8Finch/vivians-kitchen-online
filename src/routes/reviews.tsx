import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Vivian's Kitchen" },
      { name: "description", content: "Read what customers say about Vivian's Kitchen in Ruaka. 5.0 rating from happy regulars. Great taste, excellent service and on-time delivery." },
      { property: "og:title", content: "Reviews — Vivian's Kitchen" },
      { property: "og:description", content: "5.0 rating from happy regulars at Vivian's Kitchen, Ruaka. Great taste, excellent service and on-time delivery." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    rating: 5,
    text: "Simply amazing. Great taste, great customer service & delivery on time.",
    author: "Lilian Inyanji",
    date: "4 months ago",
  },
  {
    rating: 5,
    text: "Great food, excellent service. Order type — delivery.",
    author: "Hesbon Magara",
    date: "2 months ago",
  },
];

function ReviewsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-8 md:pb-10 md:pt-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="font-mono-brand text-[11px] uppercase tracking-[0.22em] text-brand-accent-ink">What regulars say</p>
          <h1 className="font-display mt-1 text-5xl uppercase tracking-tight text-ink md:text-6xl">Kept warm</h1>
        </div>
        <Link to="/" className="hidden text-xs font-bold uppercase tracking-wide text-ink border-b-2 border-brand-accent pb-0.5 sm:inline-block">
          Back home
        </Link>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-ink p-6 text-cream md:p-10">
        <span className="font-display absolute -right-6 -top-8 text-[9rem] leading-none select-none text-ink opacity-10">5.0</span>
        <div className="relative">
          <div className="flex items-center gap-3">
            <span className="bg-butter px-3 py-1 text-lg font-bold text-ink">5.0</span>
            <span className="font-mono-brand text-sm uppercase tracking-wide text-cream/70">2 reviews</span>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {reviews.map((review, i) => (
              <figure
                key={review.author}
                className="animate-rise rounded-xl border border-cream/15 bg-cream/5 p-5"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="text-sm tracking-widest text-butter">{"★".repeat(review.rating)}</div>
                <blockquote className="mt-2 text-base leading-relaxed text-cream/90">"{review.text}"</blockquote>
                <figcaption className="mt-4 font-mono-brand text-[11px] uppercase tracking-wide text-cream/50">
                  {review.author} · {review.date}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="tel:0704587546"
          className="group inline-flex items-center gap-3 bg-brand-accent px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide text-cream"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-cream transition-transform group-hover:rotate-90"></span>
          Place an order · 0704 587546
        </a>
      </div>
    </main>
  );
}
