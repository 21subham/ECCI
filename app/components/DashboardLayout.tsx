import { Header } from "./Header";
import { Footer } from "./Footer";
import { DashboardSidebar } from "./DashboardSidebar";
import { CookieConsent } from "./CookieConsent";
import { ScrollProgress } from "./ScrollProgress";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeItem?: string;
}

export function DashboardLayout({ children, activeItem }: DashboardLayoutProps) {
  return (
    <>
      <ScrollProgress />
      <Header variant="dashboard" activeNav="none" />
      <div className="grid min-h-[calc(100vh-72px)] grid-cols-1 pt-[72px] md:grid-cols-[260px_1fr]">
        <DashboardSidebar activeItem={activeItem} />
        <main className="bg-ice-tint p-4 md:p-8">{children}</main>
      </div>
      <Footer />
      <CookieConsent />
    </>
  );
}
