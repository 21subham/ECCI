import Link from "next/link";

interface CTABannerProps {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}

export function CTABanner({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-crimson to-crimson-dark py-20 text-center text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <h2 className="mb-4 font-heading text-3xl text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-white/85">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={primaryHref}
            className="rounded-md bg-white px-8 py-4 text-base font-semibold text-navy transition-all hover:-translate-y-px hover:shadow-lg"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="rounded-md border-2 border-white/40 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-white hover:text-navy"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
