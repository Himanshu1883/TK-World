import { BrandLogo } from "@/components/ui/BrandLogo";
import { navLinks } from "@/lib/images";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.5z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.75 15.5v-7l6.2 3.5-6.2 3.5z" />
    </svg>
  );
}

const socials = [
  { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: YouTubeIcon, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0b0b0d] text-[#f0ebe0]">
      <div className="h-px w-full bg-gold-hairline opacity-70" />

      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-12 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <a href="#top" aria-label="TK World Investment Group — Home">
          <BrandLogo size="md" />
        </a>

        <nav className="flex flex-wrap gap-7 lg:justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#f0ebe0]/75 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#f0ebe0]/75 transition hover:border-gold hover:bg-gold hover:text-[#0b0b0d]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-6 text-[11px] tracking-wide text-[#9a958c] md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
          <p>© 2026 TK World Investment Group. All rights reserved.</p>
          <p>Dubai, UAE — info@tkworld.ae</p>
        </div>
      </div>
    </footer>
  );
}
