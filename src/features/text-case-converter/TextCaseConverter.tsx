import { useState } from "react";

export function TextCaseConverter() {
  const [text, setText] = useState("");

  const toUppercase = () => setText(text.toUpperCase());
  const toLowercase = () => setText(text.toLowerCase());
  const toTitleCase = () =>
    setText(
      text
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase())
    );
  const clearText = () => setText("");

  return (
    <div className="flex flex-col gap-5 w-full">

      {/* Textarea */}
      <textarea
        dir="auto"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="متن خود را وارد کنید"
        className="
          w-full h-40 p-4 rounded-xl
          bg-gray-800/60 border border-gray-700
          text-white resize-none
          focus:ring-2 focus:ring-blue-500
          outline-none transition-all
          text-center
        "
      />

      {/* Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

        <button
          onClick={toUppercase}
          className="py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition"
        >
          حروف بزرگ (UPPERCASE)
        </button>

        <button
          onClick={toLowercase}
          className="py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition"
        >
          حروف کوچک (lowercase)
        </button>

        <button
          onClick={toTitleCase}
          className="py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white transition"
        >
          حروف اول بزرگ (Title Case)
        </button>

      </div>

      {/* Clear */}
      <button
        onClick={clearText}
        className="py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 transition"
      >
        پاک کردن متن
      </button>

    </div>
  );
}
