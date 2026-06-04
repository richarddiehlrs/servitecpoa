type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  theme = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const titleColor = theme === "dark" ? "text-white" : "text-ink";
  const descColor = theme === "dark" ? "text-slate-400" : "text-slate-600";

  return (
    <header className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <div className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}>
        <span className="accent-line" aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          {label}
        </span>
        <span className={`accent-line ${isCenter ? "" : "hidden"}`} aria-hidden />
      </div>
      <h2
        className={`mt-5 font-display text-3xl font-medium leading-snug sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${descColor}`}>{description}</p>
      )}
    </header>
  );
}
