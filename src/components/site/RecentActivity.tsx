import { Facebook, Newspaper } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { CONTACT, NEWS } from "@/data/site";

export function RecentActivity() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          label="Latest Updates"
          title="What's Happening"
          subtitle="Alumni spotlights, seminars and department events."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {NEWS.map((item, i) => (
            <article
              key={item.title}
              className="glass-card lift-hover group flex flex-col overflow-hidden reveal"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
            >
              <div className="grid h-36 place-items-center bg-[image:var(--gradient-hero)] grid-dots">
                <Newspaper className="size-8 text-primary/70" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{item.date}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 font-mono text-xs text-primary transition-transform duration-300 group-hover:translate-x-1"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center reveal" data-reveal>
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/8"
          >
            <Facebook className="size-4" />
            Follow us on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
