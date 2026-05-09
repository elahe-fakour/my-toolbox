import { useState, useCallback, useEffect } from "react";

export function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(generatedPassword);
    setCopied(false);
  }, [length, includeUppercase, includeNumbers, includeSymbols]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6 w-full text-right" dir="rtl">
      {/* Result Area */}
      <div className="relative group">
        <div className="w-full p-4 bg-gray-800/80 border border-gray-700 rounded-xl text-center break-all min-h-[60px] flex items-center justify-center text-xl font-mono text-blue-400">
          {password}
        </div>
        <button
          onClick={copyToClipboard}
          className="mt-2 w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all text-sm"
        >
          {copied ? "کپی شد! ✅" : "کپی رمز عبور"}
        </button>
      </div>

      {/* Settings */}
      <div className="space-y-4 bg-gray-800/40 p-4 rounded-xl border border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">طول رمز: {length}</span>
          <input
            type="range"
            min="6"
            max="32"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-1/2 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
            className="w-5 h-5 rounded border-gray-700 bg-gray-900 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-300 group-hover:text-white transition-colors">حروف بزرگ (A-Z)</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="w-5 h-5 rounded border-gray-700 bg-gray-900 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-300 group-hover:text-white transition-colors">اعداد (0-9)</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            className="w-5 h-5 rounded border-gray-700 bg-gray-900 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-300 group-hover:text-white transition-colors">کاراکترهای خاص (!@#)</span>
        </label>
      </div>

      <button
        onClick={generatePassword}
        className="py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-all font-medium border border-gray-600"
      >
        ایجاد رمز جدید 🔄
      </button>
    </div>
  );
}
