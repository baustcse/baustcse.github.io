import { Handshake, Lightbulb, Rocket, Search, Share2, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const MISSIONS = [
  {
    no: "01",
    icon: Lightbulb,
    title: "Innovative Problem-Solving",
    text: "Preparing students for evolving challenges in CS & IT through innovative approaches.",
  },
  {
    no: "02",
    icon: Share2,
    title: "Research & Knowledge Sharing",
    text: "Generating and sharing knowledge through basic and applied research.",
  },
  {
    no: "03",
    icon: Users,
    title: "Skilled Human Resources",
    text: "Contributing competent professionals to society in a sustainable way.",
  },
];

const PEO = [
  { icon: Rocket, label: "Career Progression" },
  { icon: Handshake, label: "Ethics, Professionalism & Teamwork" },
  { icon: Lightbulb, label: "Applying Evolving Technologies" },
];

export function VisionMission() {
  return (
    <section id="vision" className="scroll-mt-24 bg-surface px-5 py-20 lg:px-8 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          label="Vision & Mission"
          title="Competence, Research, Sustainable Impact"
          subtitle="What the department stands for, and how it delivers on that promise every semester."
        />

        <div
          className="glass-card reveal-scale relative mx-auto mt-12 max-w-3xl overflow-hidden p-8 text-center sm:p-12"
          data-reveal
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-[image:var(--gradient-accent)]"
          />
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
            <Search className="size-6" />
          </span>
          <h3 className="mt-5 text-2xl font-bold text-foreground">Our Vision</h3>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            “To produce highly competent, skilled graduates who excel in research and innovation for
            sustainable development.”
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {MISSIONS.map((m, i) => (
            <article
              key={m.no}
              className="glass-card lift-hover p-7 reveal"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 130}ms` }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <m.icon className="size-5" />
                </span>
                <span className="font-mono text-sm text-gold">{m.no}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <p className="label-caps text-center text-muted-foreground">
            Program Educational Objectives
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-4">
            {PEO.map((p, i) => (
              <li
                key={p.label}
                className="glass-card lift-hover flex items-center gap-3 px-5 py-3.5 reveal-left"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
              >
                <p.icon className="size-4 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
