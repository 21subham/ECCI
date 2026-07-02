import { PublicLayout } from "./PublicLayout";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <PublicLayout activeNav="home">
      <div className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-ice-tint px-4 py-8">
        {children}
      </div>
    </PublicLayout>
  );
}
