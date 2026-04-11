import { useState, useEffect } from "react";

type Props = {
  value: string;
  onChange: (date: string) => void;
};

const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export function GregorianDatePicker({ value, onChange }: Props) {
  const today = new Date();

  const ty = today.getFullYear();
  const tm = today.getMonth() + 1;
  const td = today.getDate();

  const [year, setYear] = useState(ty);
  const [month, setMonth] = useState(tm);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  useEffect(() => {
    if (value) {
      const [y, m, d] = value.split("-").map(Number);
      setYear(y);
      setMonth(m);
      setSelectedDay(d);
    }
  }, [value]);

  const days = Array.from(
    { length: getDaysInMonth(year, month) },
    (_, i) => i + 1
  );

  const selectDay = (day: number) => {
    setSelectedDay(day);

    const formatted = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    onChange(formatted);
  };

  const nextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  const prevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const nextYear = () => setYear((y) => y + 1);
  const prevYear = () => setYear((y) => y - 1);

  return (
    <div className="bg-white/60 border border-white/30 rounded-xl p-4 backdrop-blur-md">

      <div className="flex items-center justify-between mb-3">

        <button onClick={prevYear} className="px-2 py-1 rounded hover:bg-gray-200">
          «
        </button>

        <button onClick={prevMonth} className="px-2 py-1 rounded hover:bg-gray-200">
          ‹
        </button>

        <span className="font-semibold">
          {monthNames[month - 1]} {year}
        </span>

        <button onClick={nextMonth} className="px-2 py-1 rounded hover:bg-gray-200">
          ›
        </button>

        <button onClick={nextYear} className="px-2 py-1 rounded hover:bg-gray-200">
          »
        </button>

      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {days.map((day) => {

          const isToday = year === ty && month === tm && day === td;
          const isSelected = selectedDay === day;

          return (
            <button
              key={day}
              onClick={() => selectDay(day)}
              className={`
                p-2 rounded-lg transition
                ${isSelected ? "bg-blue-600 text-white" : ""}
                ${
                  !isSelected && isToday
                    ? "border-2 border-blue-500 text-blue-600 font-bold"
                    : ""
                }
                ${
                  !isSelected && !isToday
                    ? "hover:bg-gray-200"
                    : ""
                }
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
