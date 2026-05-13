import { useEffect, useMemo, useRef, useState } from "react";

type Mode = "box" | "five";

type Step = {
  text: string;
  duration: number;
  scale: number; // numeric scale for smoother + unified scaling
};

export function MindfulBreathing() {
  const [mode, setMode] = useState<Mode>("box");
  const [phase, setPhase] = useState("آماده برای طلوع...");
  const [scale, setScale] = useState(1); // ✅ unified scale
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef<number | null>(null);
  const stepIndexRef = useRef(0);

  const steps: Step[] = useMemo(() => {
    return mode === "box"
      ? [
          { text: "دم", duration: 4000, scale: 1.18 },
          { text: "حبس نفس", duration: 4000, scale: 1.18 },
          { text: "بازدم", duration: 4000, scale: 0.86 },
          { text: "مکث", duration: 4000, scale: 0.86 },
        ]
      : [
          { text: "دم", duration: 5000, scale: 1.18 },
          { text: "مکث", duration: 2000, scale: 1.18 },
          { text: "بازدم", duration: 6000, scale: 0.86 },
        ];
  }, [mode]);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const runStep = () => {
    if (!isRunning) return;

    const step = steps[stepIndexRef.current];
    setPhase(step.text);
    setScale(step.scale);

    clearTimer();
    timerRef.current = window.setTimeout(() => {
      stepIndexRef.current = (stepIndexRef.current + 1) % steps.length;
      runStep();
    }, step.duration);
  };

  const start = () => {
    if (isRunning) return;

    clearTimer();
    stepIndexRef.current = 0;

    // ✅ immediately set first step UI, then run loop
    setIsRunning(true);
  };

  const stop = () => {
    clearTimer();
    setIsRunning(false);
    setPhase("پایان تمرین");
    setScale(1);
  };

  // when starting, kick off the cycle
  useEffect(() => {
    if (!isRunning) return;

    // render first step immediately
    const first = steps[0];
    setPhase(first.text);
    setScale(first.scale);

    // schedule next transitions
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      stepIndexRef.current = 1 % steps.length;
      runStep();
    }, first.duration);

    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, steps]);

  // reset when mode changes
  useEffect(() => {
    clearTimer();
    setIsRunning(false);
    setPhase("در این لحظه باش…");
    setScale(1);
    stepIndexRef.current = 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  // cleanup on unmount
  useEffect(() => {
    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 w-full text-center pt-6">
      {/* Mode Switcher */}
      <div className="flex bg-gradient-to-r from-sky-300/30 to-rose-200/30 border border-sky-200 rounded-2xl p-1 shadow-md backdrop-blur-sm">
        <button
          className={`px-6 py-2 rounded-xl text-lg transition ${
            mode === "box"
              ? "bg-gradient-to-r from-sky-400 to-cyan-400 text-white font-semibold"
              : "text-sky-800/60"
          }`}
          onClick={() => setMode("box")}
          disabled={isRunning}
        >
          Box Breathing
        </button>

        <button
          className={`px-6 py-2 rounded-xl text-lg transition ${
            mode === "five"
              ? "bg-gradient-to-r from-sky-400 to-cyan-400 text-white font-semibold"
              : "text-sky-800/60"
          }`}
          onClick={() => setMode("five")}
          disabled={isRunning}
        >
          Calm Breathing
        </button>
      </div>

      {/* ✅ Sunrise over the Ocean (perfect fit circle) */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto">
        {/* Outer glow (doesn't affect circle sizing) */}
        <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(255,200,120,0.35)]" />

        {/* ✅ The ONE true circle: everything clipped inside */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden border border-white/50 shadow-2xl"
          style={{
            transform: `scale(${scale})`,
            transition: "transform 4000ms ease-in-out",
            willChange: "transform",
          }}
        >
          {/* Sky / Sun gradient (whole circle base) */}
          <div className="absolute inset-0 bg-gradient-to-t from-amber-200 via-yellow-200 to-pink-200" />

          {/* Sea (bottom half) */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-200/85 to-sky-500/70" />

          {/* Soft horizon haze */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-10 bg-white/20 blur-md" />

          {/* Subtle wave shimmer */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.25),transparent_60%)]" />
          </div>

          {/* Text - perfectly centered, never shifts */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-2xl font-semibold text-sky-900 drop-shadow-sm leading-none">
              {phase}
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-5 mt-2">
        <button
          onClick={start}
          disabled={isRunning}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-md hover:brightness-110 transition disabled:opacity-40"
        >
          ☀️ شروع
        </button>

        <button
          onClick={stop}
          disabled={!isRunning}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-sky-400 to-indigo-500 text-white shadow-md hover:brightness-110 transition disabled:opacity-40"
        >
          🌊 پایان
       </button>
      </div>

      {/* Description */}
      <p className="text-sky-700/90 leading-relaxed max-w-md mt-2">
        آرام نفس بکش
      </p>
    </div>
  );
}
