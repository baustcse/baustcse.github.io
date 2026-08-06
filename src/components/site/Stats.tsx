import { STATS } from "@/data/site";
import { useCountUp, useInView } from "@/hooks/use-animations";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const count = useCountUp(value, inView);
  const pct = inView ? 100 : 0;

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
        {count}
        {suffix}
      </p>
      <div
        aria-hidden="true"
        className="mx-auto mt-3 h-1 w-16 overflow-hidden rounded-full bg-primary-foreground/25"
      >
        <span
          className="block h-full origin-left bg-gold transition-transform duration-[1600ms] ease-out"
          style={{ transform: `scaleX(${pct / 100})` }}
        />
      </div>
      <p className="mt-3 text-sm text-primary-foreground/80">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="bg-primary px-5 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <p className="label-caps text-center text-primary-foreground/70">By the Numbers</p>
        <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((s) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
