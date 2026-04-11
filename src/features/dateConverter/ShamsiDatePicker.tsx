import { useState } from "react";

type Props = {
  value: string;
  onChange: (date: string) => void;
};

const months = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

export function ShamsiDatePicker({ value, onChange }: Props) {
  const [year, setYear] = useState(1404);
  const [month, setMonth] = useState(1);

  const daysInMonth = month <= 6 ? 31 : month <= 11 ? 30 : 29;

  const prevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  const prevYear = () => {
    setYear((y) => y - 1);
  };

  const nextYear = () => {
    setYear((y) => y + 1);
  };

  const selectDay = (day: number) => {
    const m = month < 10 ? `0${month}` : month;
    const d = day < 10 ? `0${day}` : day;

    onChange(`${year}-${m}-${d}`);
  };

  return (
    <div className="w-full rounded-xl p-3 bg-white/60 border border-white/30 backdrop-blur-md">

      <div className="flex justify-between items-center mb-3">

        <button onClick={prevYear}>«</button>

        <button onClick={prevMonth}>‹</button>

        <div>
          {months[month - 1]} {year}
        </div>

        <button onClick={nextMonth}>›</button>

        <button onClick={nextYear}>»</button>

      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm">

        {["ش","ی","د","س","چ","پ","ج"].map((d) => (
          <div key={d} className="font-bold">{d}</div>
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;

          return (
            <button
              key={day}
              onClick={() => selectDay(day)}
              className="p-2 rounded hover:bg-blue-500 hover:text-white"
            >
              {day}
            </button>
          );
        })}

      </div>

      {value && (
        <div className="mt-2 text-sm text-center">
          {value}
        </div>
      )}

    </div>
  );
}
