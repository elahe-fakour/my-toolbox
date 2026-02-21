import { useState } from "react";
import AppLayout from "./layouts/AppLayout";

import { ToolCard } from "./components/molecules/ToolCard";
import { NumberConverterModal } from "./features/numberConverter/NumberConverterModal";
import { DateConverterModal } from "./features/dateConverter/DateConverterModal";

const App = () => {
  const [numberOpen, setNumberOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);

  return (
    <AppLayout>
      <section
        className="
          relative overflow-hidden
          rounded-2xl p-6 sm:p-8 mb-8
          bg-[color:var(--glass-bg)]
          border border-[color:var(--glass-border)]
          backdrop-blur-2xl
          shadow-[0_20px_45px_-25px_rgba(0,0,0,0.35)]
        "
      >
        <div className="flex flex-col items-center text-center gap-3">
          <h1
            className="
              text-3xl sm:text-4xl font-black tracking-tight
              bg-gradient-to-l from-sky-500 via-indigo-500 to-violet-500
              text-transparent bg-clip-text
            "
          >
            Toolbox
          </h1>
        </div>

        <div
          className="
            mt-6 h-[2px] w-32 mx-auto
            bg-gradient-to-l from-sky-400 via-indigo-400 to-violet-400
            rounded-full
          "
        />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ToolCard
          title="تبدیل اعداد فارسی و انگلیسی"
          icon="🔢"
          onClick={() => setNumberOpen(true)}
        />

        <ToolCard
          title="تبدیل تاریخ شمسی و میلادی"
          icon="📅"
          onClick={() => setDateOpen(true)}
        />
      </section>

      <NumberConverterModal
        isOpen={numberOpen}
        onClose={() => setNumberOpen(false)}
      />

      <DateConverterModal
        isOpen={dateOpen}
        onClose={() => setDateOpen(false)}
      />
    </AppLayout>
  );
};

export default App;
