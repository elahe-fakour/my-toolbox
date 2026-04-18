import { useState, useEffect } from "react";

export function HourglassTimer() {
  const [initialSeconds, setInitialSeconds] = useState(30);
  const [seconds, setSeconds] = useState(30);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(interval);
          setRunning(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const reset = () => {
    setRunning(false);
    setSeconds(initialSeconds);
  };

  const start = () => {
    setSeconds(initialSeconds);
    setRunning(true);
  };

  const topFill = seconds / initialSeconds;
  const bottomFill = 1 - topFill;

  return (
    <div className="flex flex-col items-center gap-6">

      {/* ساعت شنی مدرن */}
      <div className="p-4 rounded-xl bg-gray-800/40 backdrop-blur-md border border-white/10 shadow-xl">
        <svg width="150" height="180" viewBox="0 0 150 180">

          {/* فریم بالا و پایین */}
          <rect x="35" y="0" width="80" height="14" rx="6" className="fill-gray-300/40" />
          <rect x="35" y="166" width="80" height="14" rx="6" className="fill-gray-300/40" />

          {/* شیشه بالا */}
          <path d="M45 14 L105 14 L75 85 Z" className="fill-yellow-400/20" />

          {/* شن بالا */}
          <path
            d={`M45 14 L105 14 L75 ${14 + 71 * topFill} Z`}
            className="fill-yellow-400"
          />

          {/* گردن کوتاه */}
          <rect x="70" y="85" width="10" height="12" rx="6" className="fill-yellow-400" />

          {/* شیشه پایین */}
          <path d="M45 166 L105 166 L75 95 Z" className="fill-yellow-400/20" />

          {/* شن پایین */}
          <path
            d={`M45 166 L105 166 L75 ${166 - 71 * bottomFill} Z`}
            className="fill-yellow-400"
          />
        </svg>
      </div>

      {/* زمان باقی‌مانده */}
      <div className="text-4xl font-semibold tracking-wide text-white drop-shadow-md">
        {seconds}s
      </div>

      {/* کنترل‌ها */}
      <div className="flex gap-3">
        {!running ? (
          <button
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-md"
            onClick={start}
          >
            شروع
          </button>
        ) : (
          <button
            className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white transition-all duration-200 shadow-md"
            onClick={() => setRunning(false)}
          >
            توقف
          </button>
        )}

        <button
          className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-all duration-200 shadow-md"
          onClick={reset}
        >
          ریست
        </button>
      </div>

      {/* ورودی زمان (پایین و مدرن) */}
      <div className="flex flex-col items-center gap-2 mt-3 w-full">
        <label className="text-sm text-gray-300">زمان موردنظر (ثانیه)</label>

        <input
          type="number"
          disabled={running}
          value={initialSeconds}
          min={5}
          max={300}
          onChange={(e) => setInitialSeconds(Number(e.target.value))}
          className="px-4 py-2 w-36 text-center rounded-lg bg-gray-700 text-white border border-gray-600
                     focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        />
      </div>
    </div>
  );
}
