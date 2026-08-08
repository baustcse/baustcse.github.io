import { Facebook, Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeader } from "./SectionHeader";
import { CONTACT } from "@/data/site";

const ITEMS = [
  { icon: MapPin, label: "Address", value: CONTACT.address, href: undefined },
  { icon: Phone, label: "Admission", value: CONTACT.admission, href: `tel:${CONTACT.admission}` },
  { icon: Phone, label: "General", value: CONTACT.general, href: `tel:${CONTACT.general}` },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: CONTACT.facebook },
  { icon: Mail, label: "Email the department", href: `mailto:${CONTACT.email}` },
  { icon: Globe, label: "Official BAUST CSE website", href: CONTACT.official },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-surface px-5 py-20 lg:px-8 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          align="left"
          label="Contact"
          title="Get in Touch"
          subtitle="Admission queries, collaborations and campus visits."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal-left" data-reveal>
            <ul className="space-y-3">
              {ITEMS.map((item, i) => (
                <li
                  key={item.label}
                  className="glass-card lift-hover flex items-center gap-4 px-5 py-4 reveal-left"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="label-caps text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-foreground hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={s.label}
                    className="grid min-h-11 min-w-11 place-items-center rounded-full border border-border bg-card text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                  >
                    <s.icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="glass-card mt-6 overflow-hidden">
              <iframe
                title="Map of Saidpur Cantonment, Bangladesh"
                loading="lazy"
                className="h-64 w-full border-0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=88.86%2C25.74%2C88.94%2C25.80&layer=mapnik&marker=25.7736%2C88.9012"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
