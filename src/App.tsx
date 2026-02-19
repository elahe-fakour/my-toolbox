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
      <h1 className="text-xl font-semibold mb-6 text-slate-800">
        Toolbox
      </h1>

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

      {/* Modals */}
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
