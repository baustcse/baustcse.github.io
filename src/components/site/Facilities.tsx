import { Check, Cpu, Database, Laptop, Network, Projector, Terminal, Wrench } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { LABS } from "@/data/site";

const ICONS = { Laptop, Terminal, Database, Cpu, Network, Wrench, Projector } as const;

export function Facilities() {
  return (
    <section id="facilities" className="scroll-mt-24 bg-surface px-5 py-20 lg:px-8 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          label="Facilities"
          title="Laboratories & Smart Classrooms"
          subtitle="Hands-on infrastructure supporting every year of the curriculum."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LABS.map((lab, i) => {
            const Icon = ICONS[lab.icon];
            return (
              <article
                key={lab.name}
                className="glass-card lift-hover group flex flex-col p-7 reveal"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:rotate-6">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">
                  {lab.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lab.desc}</p>
                <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                  {lab.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3" />
                      </span>
                      <span className="min-w-0 text-sm leading-relaxed text-muted-foreground">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
