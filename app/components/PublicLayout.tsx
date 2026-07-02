import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieConsent } from "./CookieConsent";
import { ScrollProgress } from "./ScrollProgress";

interface PublicLayoutProps {
  children: React.ReactNode;
  activeNav?:
    | "home"
    | "about"
    | "membership"
    | "directory"
    | "events"
    | "contact"
    | "none";
}

export function PublicLayout({ children, activeNav = "none" }: PublicLayoutProps) {
  return (
    <>
      <ScrollProgress />
      <Header variant="public" activeNav={activeNav} />
      <main className="pt-[72px]">{children}</main>
      <Footer />
      <CookieConsent />
    </>
  );
}
