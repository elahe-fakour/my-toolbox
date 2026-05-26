import { useState } from "react";
import AppLayout from "./layouts/AppLayout";
import { ToolCard } from "./components/molecules/ToolCard";

// Modals
import { NumberConverterModal } from "./features/numberConverter/NumberConverterModal";
import { DateConverterModal } from "./features/dateConverter/DateConverterModal";
import { CalculatorModal } from "./features/calculator/CalculatorModal";
import { HourglassModal } from "./features/hourglass/HourglassModal";
import { TextCounterModal } from "./features/text-counter/TextCounterModal";
import { PasswordGeneratorModal } from "./features/password-generator/PasswordGeneratorModal";
import { TextCaseConverterModal } from "./features/text-case-converter/TextCaseConverterModal";
import { MindfulBreathingModal } from "./features/mindful-breathing/MindfulBreathingModal";

const App = () => {
  const [numberOpen, setNumberOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const [hourglassOpen, setHourglassOpen] = useState(false);
  const [textCounterOpen, setTextCounterOpen] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [textCaseOpen, setTextCaseOpen] = useState(false);
  const [breathingOpen, setBreathingOpen] = useState(false);

  return (
    <AppLayout>
      {/* Header */}
      <section className="relative overflow-hidden rounded-2xl p-6 sm:p-8 mb-8 bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] backdrop-blur-2xl">
        <div className="flex flex-col items-center text-center gap-3">
          <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-l from-sky-500 via-indigo-500 to-violet-500 text-transparent bg-clip-text">
            Toolbox
          </h1>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ToolCard title="تبدیل اعداد فارسی و انگلیسی" icon="🔢" onClick={() => setNumberOpen(true)} />
        <ToolCard title="تبدیل تاریخ شمسی و میلادی" icon="📅" onClick={() => setDateOpen(true)} />
        <ToolCard title="ماشین حساب" icon="🧮" onClick={() => setCalcOpen(true)} />
        <ToolCard title="تایمر ساعت شنی" icon="⏳" onClick={() => setHourglassOpen(true)} />
        <ToolCard title="شمارش حروف متن" icon="✍️" onClick={() => setTextCounterOpen(true)} />
        <ToolCard title="تولید رمز عبور" icon="🔐" onClick={() => setPasswordOpen(true)} />
        <ToolCard title="مبدل متن (A/a)" icon="🔤" onClick={() => setTextCaseOpen(true)} />
        <ToolCard title="تنفس آگاهانه" icon="🧘‍♂️" onClick={() => setBreathingOpen(true)} />
      </section>

      {/* Modals Containers */}
      <NumberConverterModal isOpen={numberOpen} onClose={() => setNumberOpen(false)} />
      <DateConverterModal isOpen={dateOpen} onClose={() => setDateOpen(false)} />
      <CalculatorModal isOpen={calcOpen} onClose={() => setCalcOpen(false)} />
      <HourglassModal isOpen={hourglassOpen} onClose={() => setHourglassOpen(false)} />
      <TextCounterModal isOpen={textCounterOpen} onClose={() => setTextCounterOpen(false)} />
      <PasswordGeneratorModal isOpen={passwordOpen} onClose={() => setPasswordOpen(false)} />
      <TextCaseConverterModal isOpen={textCaseOpen} onClose={() => setTextCaseOpen(false)} />
      <MindfulBreathingModal isOpen={breathingOpen} onClose={() => setBreathingOpen(false)} />
    </AppLayout>
  );
};

export default App;
