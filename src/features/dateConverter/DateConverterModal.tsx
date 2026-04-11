import { useState } from "react";
import { BaseModal } from "../../modals/BaseModal";
import { Button } from "../../components/atoms/Button";
import {
  shamsiToGregorian,
  gregorianToShamsi,
} from "./utils";
import { ShamsiDatePicker } from "./ShamsiDatePicker";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function DateConverterModal({ isOpen, onClose }: Props) {
  const [mode, setMode] = useState<
    "shamsi-gregorian" | "gregorian-shamsi"
  >("shamsi-gregorian");

  const [inputDate, setInputDate] = useState("");
  const [resultDate, setResultDate] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleConvert = () => {
    if (!inputDate) return;

    const result =
      mode === "shamsi-gregorian"
        ? shamsiToGregorian(inputDate)
        : gregorianToShamsi(inputDate);

    setResultDate(result);
    setIsCopied(false); // ریست کردن وضعیت کپی هنگام تبدیل جدید
  };

  const copyToClipboard = async () => {
    if (!resultDate) return;

    try {
      await navigator.clipboard.writeText(resultDate);
      setIsCopied(true);
      
      // برگرداندن متن دکمه به حالت قبل بعد از ۲ ثانیه
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("خطا در کپی کردن:", err);
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="تبدیل تاریخ شمسی و میلادی"
    >
      <div className="space-y-5">

        <div className="flex gap-2">
          <Button
            variant={mode === "shamsi-gregorian" ? "primary" : "secondary"}
            onClick={() => {
              setMode("shamsi-gregorian");
              setInputDate("");
              setResultDate("");
              setIsCopied(false);
            }}
          >
            شمسی ← میلادی
          </Button>

          <Button
            variant={mode === "gregorian-shamsi" ? "primary" : "secondary"}
            onClick={() => {
              setMode("gregorian-shamsi");
              setInputDate("");
              setResultDate("");
              setIsCopied(false);
            }}
          >
            میلادی ← شمسی
          </Button>
        </div>

        {mode === "shamsi-gregorian" ? (
          <ShamsiDatePicker value={inputDate} onChange={setInputDate} />
        ) : (
          <input
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
            className="w-full rounded-xl p-3 bg-white/60 border border-white/30 backdrop-blur-md outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          />
        )}

        <Button onClick={handleConvert} className="w-full shadow-lg shadow-blue-500/20">
          تبدیل تاریخ
        </Button>

        {resultDate && (
          <div className="space-y-2 pt-2 border-t border-white/20">
            <label className="text-xs text-gray-500 mr-2">نتیجه تبدیل:</label>
            <div className="flex gap-2">
              <input
                readOnly
                value={resultDate}
                placeholder="تاریخ تبدیل‌شده"
                className="flex-1 rounded-xl p-3 bg-white/80 border border-white/30 backdrop-blur-md font-mono text-center text-lg outline-none"
              />
              <button
                onClick={copyToClipboard}
                className={`px-4 rounded-xl transition-all duration-300 flex items-center justify-center min-w-[100px] ${
                  isCopied 
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/30" 
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                }`}
              >
                {isCopied ? "کپی شد ✅" : "کپی"}
              </button>
            </div>
          </div>
        )}

      </div>
    </BaseModal>
  );
}
