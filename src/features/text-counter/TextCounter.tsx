import { useState } from "react";

export function TextCounter() {
  const [text, setText] = useState("");

  const totalChars = text.length;
  const charsWithoutSpaces = text.replace(/\s/g, "").length;
  const words =
    text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="flex flex-col gap-6 w-full">

      {/* Text Area */}
      <textarea
        dir="auto"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="متن فارسی یا انگلیسی خود را وارد کنید"
        className="w-full h-40 p-4 rounded-xl bg-gray-800/60 border border-gray-700
                   text-white resize-none focus:ring-2 focus:ring-blue-500
                   outline-none transition-all text-center" 
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 text-center">
          <p className="text-sm text-gray-400">تعداد حروف با فاصله</p>
          <p className="text-2xl font-semibold text-white">{totalChars}</p>
        </div>

        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 text-center">
          <p className="text-sm text-gray-400">تعداد حروف بدون فاصله</p>
          <p className="text-2xl font-semibold text-white">{charsWithoutSpaces}</p>
        </div>

        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 text-center">
          <p className="text-sm text-gray-400">تعداد کلمات</p>
          <p className="text-2xl font-semibold text-white">{words}</p>
        </div>

      </div>
    </div>
  );
}
