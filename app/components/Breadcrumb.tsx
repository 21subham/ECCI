import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link href={item.href} className="text-crimson transition-colors hover:text-crimson-dark">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "font-medium text-navy" : ""}>{item.label}</span>
            )}
            {!isLast && <span className="text-gray-400">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
