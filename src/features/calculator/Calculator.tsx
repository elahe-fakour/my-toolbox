import { useState } from "react";

export function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const clear = () => {
    setInput("");
    setResult("");
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const res = eval(input);
      setResult(String(res));
    } catch {
      setResult("خطا");
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* نمایشگر */}
      <div
        className="
          bg-[color:var(--glass-bg)]
          border border-[color:var(--glass-border)]
          rounded-xl p-4 mb-4
          flex flex-col items-end gap-2
          shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]
        "
      >
        <div className="text-lg text-[color:var(--text-main)] opacity-70">
          {input || "0"}
        </div>
        <div className="text-2xl font-bold text-[color:var(--text-main)]">
          {result || ""}
        </div>
      </div>

      {/* دکمه‌ها */}
      <div className="grid grid-cols-4 gap-3">
        {["7", "8", "9", "/"].map((v) => (
          <Button key={v} label={v} onClick={() => handleClick(v)} />
        ))}
        {["4", "5", "6", "*"].map((v) => (
          <Button key={v} label={v} onClick={() => handleClick(v)} />
        ))}
        {["1", "2", "3", "-"].map((v) => (
          <Button key={v} label={v} onClick={() => handleClick(v)} />
        ))}
        {["0", ".", "+", "="].map((v) =>
          v === "=" ? (
            <Button key={v} label={v} onClick={calculate} className="bg-indigo-600" />
          ) : (
            <Button key={v} label={v} onClick={() => handleClick(v)} />
          )
        )}
      </div>

      <button
        onClick={clear}
        className="
          w-full mt-4 py-3 rounded-xl font-bold
          bg-red-600 text-white hover:bg-red-700
          transition-all
        "
      >
        پاک کردن
      </button>
    </div>
  );
}

type BtnProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

function Button({ label, onClick, className }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className={`
        py-3 rounded-xl font-semibold
        text-[color:var(--text-main)]
        bg-[color:var(--glass-bg)]
        border border-[color:var(--glass-border)]
        shadow-[0_6px_18px_var(--glass-glow)]
        hover:scale-[1.05] transition-all
        ${className}
      `}
    >
      {label}
    </button>
  );
}
