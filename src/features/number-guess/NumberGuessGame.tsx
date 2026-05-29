import { useMemo, useState } from "react";

const MIN = 1;
const MAX = 20;
const MAX_TRIES = 3;

function getRandomNumber() {
  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

export function NumberGuessGame() {
  const [target, setTarget] = useState(() => getRandomNumber());
  const [guessInput, setGuessInput] = useState("");
  const [tries, setTries] = useState(0);
  const [message, setMessage] = useState("یه عدد بین ۱ تا ۲۰ حدس بزن.");
  const [isWin, setIsWin] = useState(false);

  const isGameOver = isWin || tries >= MAX_TRIES;
  const remainingTries = Math.max(MAX_TRIES - tries, 0);

  const statusClassName = useMemo(() => {
    if (isWin) return "text-emerald-400";
    if (isGameOver) return "text-rose-400";
    return "text-slate-200";
  }, [isGameOver, isWin]);

  const handleGuess = () => {
    if (isGameOver) return;

    const guess = Number(guessInput);
    if (!Number.isInteger(guess) || guess < MIN || guess > MAX) {
      setMessage("فقط عدد صحیح بین ۱ تا ۲۰ وارد کن.");
      return;
    }

    const nextTries = tries + 1;
    setTries(nextTries);

    if (guess === target) {
      setIsWin(true);
      setMessage("آفرین! درست حدس زدی و برنده شدی.");
      return;
    }

    if (nextTries >= MAX_TRIES) {
      setMessage(`باختی! عدد درست ${target} بود.`);
      return;
    }

    setMessage(guess < target ? "عددت کوچیک‌تره، یه عدد بزرگ‌تر بگو." : "عددت بزرگ‌تره، یه عدد کوچیک‌تر بگو.");
  };

  const resetGame = () => {
    setTarget(getRandomNumber());
    setGuessInput("");
    setTries(0);
    setIsWin(false);
    setMessage("یه عدد بین ۱ تا ۲۰ حدس بزن.");
  };

  return (
    <div className="flex flex-col gap-4 w-full text-center">
      <p className="text-sm text-slate-300">۳ بار فرصت داری عدد رو پیدا کنی.</p>

      <input
        type="number"
        min={MIN}
        max={MAX}
        value={guessInput}
        onChange={(e) => setGuessInput(e.target.value)}
        disabled={isGameOver}
        placeholder="مثلا 12"
        className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-center text-white outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-50"
      />

      <div className={`min-h-6 text-sm ${statusClassName}`}>{message}</div>

      <div className="text-sm text-slate-300">تلاش باقی‌مانده: {remainingTries}</div>

      <div className="flex gap-3">
        <button
          onClick={handleGuess}
          disabled={isGameOver}
          className="flex-1 rounded-xl bg-sky-500 px-4 py-2.5 font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          ثبت حدس
        </button>
        <button
          onClick={resetGame}
          className="flex-1 rounded-xl border border-slate-600 bg-slate-800/70 px-4 py-2.5 font-semibold text-slate-100 transition hover:bg-slate-700"
        >
          بازی جدید
        </button>
      </div>
    </div>
  );
}
