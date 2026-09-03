import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-ink px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-ink/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-ink px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-ink/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border-2 border-ink bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-ink hover:text-cream"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vivian's Kitchen — Home-style Kenyan food in Ruaka" },
      { name: "description", content: "Vivian's Kitchen serves home-style Kenyan food at Gacharage Junction, Red Hill Road, Ruaka. Takeaway, delivery and dine-in. Open till 10pm. Call 0704 587546 to order." },
      { name: "author", content: "Vivian's Kitchen" },
      { property: "og:title", content: "Vivian's Kitchen — Home-style Kenyan food in Ruaka" },
      { property: "og:description", content: "Vivian's Kitchen serves home-style Kenyan food at Gacharage Junction, Red Hill Road, Ruaka. Takeaway, delivery and dine-in. Open till 10pm." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vivian's Kitchen" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ViviansKitchenRuaka" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-background/95">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="font-display text-xl leading-none tracking-tight text-ink uppercase">
          Vivian's <span className="text-brand-accent">Kitchen</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[13px] font-semibold uppercase tracking-wide text-ink md:flex">
          <Link to="/menu" activeProps={{ className: "text-brand-accent" }} className="transition-colors hover:text-brand-accent">
            Menu
          </Link>
          <Link to="/reviews" activeProps={{ className: "text-brand-accent" }} className="transition-colors hover:text-brand-accent">
            Reviews
          </Link>
          <Link to="/about" activeProps={{ className: "text-brand-accent" }} className="transition-colors hover:text-brand-accent">
            About
          </Link>
          <Link to="/contact" activeProps={{ className: "text-brand-accent" }} className="transition-colors hover:text-brand-accent">
            Contact
          </Link>
        </nav>
        <a
          href="tel:0704587546"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-bold uppercase tracking-wide text-cream shadow-md shadow-ink/20 transition-transform hover:-translate-y-0.5"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-butter"></span>
          Call to order
        </a>
      </div>
    </header>
  );
}

function MobileOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-ink bg-background/95 p-3 md:hidden">
      <a
        href="tel:0704587546"
        className="flex items-center justify-center gap-3 rounded-full bg-brand-accent py-4 text-base font-extrabold uppercase tracking-wide text-cream shadow-lg shadow-brand-accent/30"
      >
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cream"></span>
        Place an order · 0704 587546
      </a>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
      <MobileOrderBar />
    </QueryClientProvider>
  );
}
