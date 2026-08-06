type Props = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({ label, title, subtitle, align = "center" }: Props) {
  return (
    <div
      className={`max-w-2xl reveal ${align === "center" ? "mx-auto text-center" : ""}`}
      data-reveal
    >
      <p className="label-caps text-primary">{label}</p>
      <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
