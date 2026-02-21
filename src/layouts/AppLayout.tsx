import type { ReactNode } from "react";
import Header from "../components/organisms/Header";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      dir="rtl"
      className="
        min-h-screen transition-colors duration-300
        bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(900px_circle_at_80%_20%,rgba(139,92,246,0.10),transparent_55%),linear-gradient(135deg,var(--bg-start),var(--bg-middle),var(--bg-end))]
      "
    >
      <Header />
      <main className="mx-auto max-w-7xl p-4 sm:p-6">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
