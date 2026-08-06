import { ArrowRight, Award, ChevronDown, GraduationCap, Globe2, ShieldCheck } from "lucide-react";
import cseLogo from "@/assets/baust-cse.jpeg.asset.json";
import { ParticleField } from "./ParticleField";
import { useTypingEffect } from "@/hooks/use-animations";

const PHRASES = [
  "Producing Tomorrow's Computer Specialists",
  "Building the Digital Future of Bangladesh",
  "Where Discipline Meets Tech Innovation",
];

const BADGES = [
  { icon: ShieldCheck, label: "IEB-BAETE Accredited" },
  { icon: Globe2, label: "Washington Accord" },
  { icon: Award, label: "Army Welfare Trust" },
  { icon: GraduationCap, label: "Est. 2015 · BSc in CSE" },
];

export function Hero() {
  const { text } = useTypingEffect(PHRASES);

  return (
    <section id="home" className="relative isolate overflow-hidden hero-surface pt-28">
      <ParticleField />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 size-[420px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 grid-dots opacity-40"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1200px] flex-col items-center justify-center px-5 pb-16 text-center lg:px-8">
        <img
          src={cseLogo.url}
          alt="Department of Computer Science and Engineering, BAUST Saidpur"
          className="mb-8 h-24 w-auto rounded-2xl object-cover shadow-soft ring-1 ring-border sm:h-28"
          loading="eager"
        />
        <p className="label-caps text-primary">Established 2015 · Saidpur Cantonment</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
          <span>{text}</span>
          <span aria-hidden="true" className="ml-1 animate-caret text-primary">
            |
          </span>
        </h1>
        <p
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground reveal sm:text-lg"
          data-reveal
        >
          The first technical university under the Bangladesh Armed Forces — IEB-BAETE accredited and
          Washington Accord recognized.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#program"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-1 reveal"
            data-reveal
          >
            Explore Programs
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#achievements"
            className="inline-flex items-center rounded-full border border-primary/40 px-7 py-3.5 font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary/8 reveal"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            Meet Our Achievers
          </a>
        </div>

        <ul className="mt-14 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map((badge, i) => (
            <li
              key={badge.label}
              className="glass-card animate-shimmer-badge flex items-center justify-center gap-2 px-4 py-3.5 reveal"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
            >
              <badge.icon className="size-4 shrink-0 text-gold" />
              <span className="text-sm font-medium text-foreground">{badge.label}</span>
            </li>
          ))}
        </ul>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="mt-12 grid min-h-11 min-w-11 place-items-center text-primary"
        >
          <ChevronDown className="size-6 animate-bounce-chevron" />
        </a>
      </div>
    </section>
  );
}
