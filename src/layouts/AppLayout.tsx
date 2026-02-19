import type { ReactNode } from "react";
import Header from "../components/organisms/Header";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      dir="rtl"
      className="
        min-h-screen transition-colors duration-300
        bg-[linear-gradient(135deg,var(--bg-start),var(--bg-middle),var(--bg-end))]
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
