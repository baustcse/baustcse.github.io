import { Facebook, Globe, Mail } from "lucide-react";
import baustLogo from "@/assets/baust.jpeg.asset.json";
import syllabus from "@/assets/syllabus.pdf.asset.json";
import { CONTACT, NAV_LINKS } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-14 text-silver lg:px-8">
      <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={baustLogo.url}
              alt="BAUST crest"
              className="size-11 shrink-0 rounded-full object-cover"
              loading="lazy"
            />
            <span className="font-display text-base font-bold text-primary-foreground">
              BAUST CSE
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Department of Computer Science &amp; Engineering — producing tomorrow's computer
            specialists since 2015.
          </p>
          <ul className="mt-5 flex gap-3">
            {[
              { icon: Facebook, label: "Facebook", href: CONTACT.facebook },
              { icon: Mail, label: "Email", href: `mailto:${CONTACT.email}` },
              { icon: Globe, label: "Official website", href: CONTACT.official },
            ].map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                  className="grid min-h-11 min-w-11 place-items-center rounded-full border border-silver/20 transition-colors hover:border-gold hover:text-gold"
                >
                  <s.icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links">
          <h2 className="label-caps text-gold">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#home" className="transition-colors hover:text-gold">
                Home
              </a>
            </li>
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label-caps text-gold">Resources</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={syllabus.url}
                target="_blank"
                rel="noopener"
                className="transition-colors hover:text-gold"
              >
                Syllabus (PDF)
              </a>
            </li>
            <li>
              <a href="#facilities" className="transition-colors hover:text-gold">
                Lab Information
              </a>
            </li>
            <li>
              <a
                href={CONTACT.official}
                target="_blank"
                rel="noopener"
                className="transition-colors hover:text-gold"
              >
                Faculty Directory
              </a>
            </li>
            <li>
              <a
                href={CONTACT.portfolio}
                target="_blank"
                rel="noopener"
                className="transition-colors hover:text-gold"
              >
                Department Portfolio
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="label-caps text-gold">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{CONTACT.address}</li>
            <li>
              <a href={`tel:${CONTACT.admission}`} className="hover:text-gold">
                {CONTACT.admission}
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT.general}`} className="hover:text-gold">
                {CONTACT.general}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1200px] border-t border-silver/15 pt-6 text-xs">
        <p>© 2025 Department of CSE, BAUST, Saidpur. All rights reserved.</p>
      </div>

    </footer>
  );
}
