import { Download, FileText } from "lucide-react";
import { useState } from "react";
import syllabus from "@/assets/syllabus.pdf.asset.json";
import { SectionHeader } from "./SectionHeader";

const NODES = [
  {
    year: "2015",
    title: "Foundation Syllabus",
    text: "The founding curriculum for the department's first batches, built on core computing fundamentals.",
    current: false,
  },
  {
    year: "2019",
    title: "Revised Syllabus",
    text: "Updated course structure aligning electives with modern software and networking practice.",
    current: false,
  },
  {
    year: "2021",
    title: "Outcome-Based Education (OBE)",
    text: "The current OBE curriculum, mapped to programme outcomes required for BAETE accreditation.",
    current: true,
  },
];

export function AcademicProgram() {
  const [activeIdx, setActiveIdx] = useState(2);
  const active = NODES[activeIdx]!;

  return (
    <section id="program" className="scroll-mt-24 px-5 py-20 lg:px-8 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          align="left"
          label="Academics"
          title="Academic Program"
          subtitle="BSc in Computer Science and Engineering — 160 credits · 8 semesters."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="reveal-left" data-reveal>
            <p className="text-base leading-relaxed text-muted-foreground">
              The four-year BSc in CSE programme blends theory, laboratory practice and capstone
              research. Students progress from programming fundamentals and digital logic through
              databases, networks, embedded systems and machine learning, finishing with a supervised
              final-year project. The programme is IEB-BAETE accredited and recognized under the
              Washington Accord, so graduates carry internationally comparable credentials.
            </p>

            <div className="glass-card mt-8 p-6">
              <p className="label-caps text-primary">Syllabus</p>
              <p className="mt-2 text-sm text-muted-foreground">
                View the official department syllabus in your browser, or download a copy.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={syllabus.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <FileText className="size-4" />
                  View Syllabus PDF
                </a>
                <a
                  href={syllabus.url}
                  download="BAUST_CSE_Syllabus.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/8"
                >
                  <Download className="size-4" />
                  Download
                </a>
              </div>
            </div>
          </div>

          <div className="reveal-right" data-reveal>
            <p className="label-caps text-muted-foreground">Curriculum Timeline</p>
            <div className="relative mt-6">
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-5 h-0.5 bg-[image:var(--gradient-accent)] opacity-40"
              />
              <ul className="relative grid grid-cols-3 gap-3">
                {NODES.map((node, i) => (
                  <li key={node.year}>
                    <button
                      type="button"
                      onClick={() => setActiveIdx(i)}
                      aria-pressed={activeIdx === i}
                      className="group flex w-full flex-col items-center gap-3 text-center"
                    >
                      <span
                        className={`grid size-10 place-items-center rounded-full border-2 font-mono text-[11px] transition-all duration-300 ${
                          activeIdx === i
                            ? "border-primary bg-primary text-primary-foreground shadow-glow"
                            : "border-border bg-card text-muted-foreground group-hover:border-primary"
                        }`}
                      >
                        {node.year.slice(2)}
                      </span>
                      <span
                        className={`font-mono text-xs ${
                          activeIdx === i ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {node.year}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card mt-8 p-7">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-foreground">{active.title}</h3>
                {active.current && (
                  <span className="rounded-full bg-gold/20 px-3 py-1 text-[11px] font-semibold text-gold-foreground">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.text}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-muted px-4 py-3">
                  <dt className="text-xs text-muted-foreground">Credits</dt>
                  <dd className="font-display text-lg font-bold text-foreground">160</dd>
                </div>
                <div className="rounded-xl bg-muted px-4 py-3">
                  <dt className="text-xs text-muted-foreground">Semesters</dt>
                  <dd className="font-display text-lg font-bold text-foreground">8</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
