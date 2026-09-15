import Link from "next/link";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { navLinks, site } from "@/lib/content";

// The brief's footer nav omits Home
const footerLinks = navLinks.filter((link) => link.href !== "/");

export function Footer() {
  return (
    <footer className="bg-ink text-foreground">
      <div className="h-px w-full bg-gold-hairline opacity-60" />

      <div className="shell grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-16 lg:py-16">
        <div>
          <Link href="/" aria-label={`${site.name} — Home`}>
            <BrandWordmark size="md" />
          </Link>
          <p className="mt-6 max-w-sm text-[13px] leading-relaxed text-muted">
            {site.tagline}
          </p>
          <p className="mt-4 text-[12px] uppercase tracking-[0.18em] text-gold">
            {site.country}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/50">
            Navigate
          </h2>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13.5px] text-white/90 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/50">
            Enquiries
          </h2>
          <ul className="mt-5 space-y-3 text-[13.5px]">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-white/90 transition-colors hover:text-gold"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.url}
                className="text-white/90 transition-colors hover:text-gold"
              >
                {site.website}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-[11.5px] tracking-wide text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.name}. All Rights Reserved.</p>
          <p>{site.country}</p>
        </div>
      </div>
    </footer>
  );
}
