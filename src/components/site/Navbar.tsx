import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import cseLogo from "@/assets/baust-cse.jpeg.asset.json";
import baustLogo from "@/assets/baust.jpeg.asset.json";
import { NAV_LINKS } from "@/data/site";
import { useActiveSection, useScrollProgress } from "@/hooks/use-animations";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/85 shadow-soft backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div
        aria-hidden="true"
        className="h-0.5 origin-left bg-[image:var(--gradient-accent)] transition-transform duration-150"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8"
      >
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={baustLogo.url}
            alt="BAUST university crest"
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-border"
            loading="eager"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-bold tracking-tight text-foreground sm:text-base">
              BAUST <span className="text-primary">CSE</span>
            </span>
            <span className="hidden truncate text-[11px] text-muted-foreground sm:block">
              Computer Science &amp; Engineering, Saidpur
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    active === link.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-[image:var(--gradient-accent)] transition-transform duration-300 ${
                      active === link.id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid min-h-11 min-w-11 place-items-center rounded-md text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col bg-background/98 px-6 pt-24 backdrop-blur-xl lg:hidden">
          <img
            src={cseLogo.url}
            alt="Department of Computer Science and Engineering logo"
            className="mb-6 h-20 w-full rounded-xl object-cover object-center"
          />
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.id}
                className="reveal"
                data-revealed="true"
                style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 font-display text-2xl font-semibold text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
