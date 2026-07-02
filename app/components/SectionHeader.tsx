interface SectionHeaderProps {
  overline: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  overline,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <span
        className={`mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] ${
          light ? "text-gray-300" : "text-crimson"
        }`}
      >
        {overline}
      </span>
      <h2
        className={`mb-3 font-heading text-3xl md:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg ${
            light ? "text-gray-400" : "text-gray-600"
          } ${centered ? "mx-auto max-w-xl" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
