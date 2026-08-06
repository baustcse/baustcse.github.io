import { Briefcase, Globe, Monitor, Smartphone } from "lucide-react";
import { useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { TECH } from "@/data/site";
import { useInView, useTypingEffect } from "@/hooks/use-animations";

const CATEGORY_ICON = { Desktop: Monitor, Mobile: Smartphone, Web: Globe } as const;

function TiltCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  return (
    <div style={{ perspective: "1000px" }}>
      <div
        ref={ref}
        onMouseMove={(e) => {
          const el = ref.current;
          if (!el) return;
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          setStyle({
            transform: `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`,
            transition: "transform 0.1s ease",
          });
        }}
        onMouseLeave={() => setStyle({ transform: "none", transition: "transform 0.4s ease" })}
        style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
        className="glass-card h-full p-6 reveal"
        data-reveal
      >
        {children}
      </div>
    </div>
  );
}

export function TechStack() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { text } = useTypingEffect(
    ["$ baust-cse init --stack react,flutter,electron ✓"],
    45,
    4000,
  );

  return (
    <section
      id="tech"
      className="relative isolate scroll-mt-24 overflow-hidden bg-surface px-5 py-20 lg:px-8 lg:py-[100px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-dots opacity-30" />
      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeader
          label="Current Focus"
          title="What We're Building"
          subtitle="Bridging classroom learning with industry-relevant tools."
        />

        <p
          className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground reveal"
          data-reveal
        >
          Students and faculty are actively building real-world projects across desktop, mobile and web
          platforms — the same tools our alumni use professionally in the industry.
        </p>

        <div ref={ref} className="glass-card mx-auto mt-10 max-w-2xl overflow-hidden reveal" data-reveal>
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span aria-hidden="true" className="size-3 rounded-full bg-destructive/60" />
            <span aria-hidden="true" className="size-3 rounded-full bg-gold/70" />
            <span aria-hidden="true" className="size-3 rounded-full bg-primary/60" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">terminal</span>
          </div>
          <p className="px-4 py-5 font-mono text-xs text-primary sm:text-sm">
            {inView ? text : "$"}
            <span aria-hidden="true" className="animate-caret">
              _
            </span>
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TECH.map((t, i) => {
            const Icon = CATEGORY_ICON[t.category];
            return (
              <TiltCard key={t.name} delay={i * 90}>
                <div className="flex items-center gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-lg font-bold text-foreground">
                      {t.name}
                    </h3>
                    <p className="label-caps text-primary">{t.category}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </TiltCard>
            );
          })}

          <div
            className="glass-card flex flex-col justify-center gap-3 p-6 reveal"
            data-reveal
            style={{ ["--reveal-delay" as string]: "460ms" }}
          >
            <span className="grid size-11 place-items-center rounded-xl bg-gold/15 text-gold-foreground">
              <Briefcase className="size-5" />
            </span>
            <h3 className="font-display text-lg font-bold text-foreground">
              From Classroom to Career
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A 3rd-batch graduate is now working as a Full-Stack Software Engineer, building production
              systems with React, Next.js, Node.js and TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
