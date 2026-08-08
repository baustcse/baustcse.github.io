import { Cpu, GraduationCap, Globe2, Medal } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const POINTS = [
  { icon: Medal, text: "Founded under the Bangladesh Armed Forces" },
  { icon: GraduationCap, text: "IEB-BAETE accredited BSc in CSE" },
  { icon: Globe2, text: "Washington Accord recognized globally" },
  { icon: Cpu, text: "5+ specialized laboratories" },
];

const TIMELINE = [
  { year: "2021", text: "Outcome-Based Education (OBE) curriculum adopted" },
  { year: "2019", text: "Syllabus revised for modern computing practice" },
  { year: "2015", text: "Department founded on 15 February at Saidpur Cantonment" },
];


export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 lg:px-8 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          align="left"
          label="About the Department"
          title="A Legacy of Excellence Since 2015"
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal-left" data-reveal>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Department of Computer Science and Engineering is one of the founding departments of
              BAUST, operating since 15 February 2015. It produces computer specialists for the thrust
              sector of the national economy, combining qualified faculty with cutting-edge lab
              infrastructure and the discipline of cantonment life.
            </p>
            <ul className="mt-8 space-y-3">
              {POINTS.map((point, i) => (
                <li
                  key={point.text}
                  className="glass-card lift-hover flex items-center gap-4 px-5 py-4 reveal"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <point.icon className="size-5" />
                  </span>
                  <span className="min-w-0 text-sm font-medium text-foreground">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-right" data-reveal>
            <div className="glass-card relative overflow-hidden p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-primary/10 blur-2xl"
              />
              <p className="label-caps text-primary">Department Timeline</p>
              <ol className="relative mt-6 space-y-7 border-l border-border pl-7">
                {TIMELINE.map((item, i) => (
                  <li
                    key={item.year}
                    className="relative reveal"
                    data-reveal
                    style={{ ["--reveal-delay" as string]: `${i * 130}ms` }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[35px] top-1 grid size-4 place-items-center rounded-full bg-primary ring-4 ring-background"
                    />
                    <p className="font-mono text-sm text-primary">{item.year}</p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
