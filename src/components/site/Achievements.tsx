import { Bot, Lightbulb, Sparkles, Trophy } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ACHIEVEMENTS } from "@/data/site";

const ICONS = { Bot, Trophy, Lightbulb, Sparkles } as const;

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative isolate scroll-mt-24 overflow-hidden px-5 py-20 lg:px-8 lg:py-[100px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 size-[560px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeader
          label="Student Success"
          title="Champions Across Disciplines"
          subtitle="Our students consistently prove their excellence on the national stage."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = ICONS[a.icon];
            const featured = i === 1;
            return (
              <article
                key={a.event}
                className={`glass-card lift-hover group relative overflow-hidden p-7 reveal ${
                  featured ? "md:col-span-2" : ""
                }`}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gold/70 opacity-70"
                />
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gold/15 text-gold-foreground transition-transform duration-500 group-hover:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <span className="animate-shimmer-badge rounded-full bg-gold/20 px-3 py-1 font-mono text-[11px] font-semibold text-gold-foreground">
                    {a.year === "—" ? "Champion" : a.year}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.event}</p>
                <p className="mt-4 font-mono text-xs text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Read story →
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
