import { useState } from "react";
import { BaseModal } from "../../modals/BaseModal";
import { Button } from "../../components/atoms/Button";
import {
  faToEn,
  enToFa,
  normalizeToEnglishNumbers,
} from "./utils";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function NumberConverterModal({ isOpen, onClose }: Props) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"fa-en" | "en-fa">("fa-en");

  const handleConvert = () => {
    if (!input.trim()) return;

    const result = mode === "fa-en" ? faToEn(input) : enToFa(input);
    setOutput(result);
  };

  const changeMode = (newMode: "fa-en" | "en-fa") => {
    setMode(newMode);
    setInput("");
    setOutput("");
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="تبدیل اعداد فارسی و انگلیسی"
    >
      <div className="space-y-5">
        {/* Mode Switch */}
        <div className="flex gap-2">
          <Button
            variant={mode === "fa-en" ? "primary" : "secondary"}
            onClick={() => changeMode("fa-en")}
          >            English → فارسی

          </Button>

          <Button
            variant={mode === "en-fa" ? "primary" : "secondary"}
            onClick={() => changeMode("en-fa")}
          >            فارسی → English

          </Button>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <label className="text-sm text-slate-600">
            {mode === "fa-en"
              ? "عدد فارسی را وارد کنید"
              : "Enter English number"}
          </label>

          <input
            type="text"
            value={input}
            onChange={(e) => {
              const value = e.target.value;

              // ✅ فقط در حالت English → فارسی
              // اعداد فارسی/عربی همان لحظه انگلیسی می‌شوند
              if (mode === "en-fa") {
                setInput(normalizeToEnglishNumbers(value));
              } else {
                setInput(value);
              }
            }}
            placeholder={mode === "fa-en" ? "مثلاً ۱۲۳۴۵" : "e.g. 12345"}
            className="
              w-full rounded-xl p-3
              bg-white/60 border border-white/30
              outline-none
              focus:ring-2 focus:ring-sky-400/40
            "
          />
        </div>

        {/* Convert Button */}
        <Button onClick={handleConvert} className="w-full">
          تبدیل
        </Button>

        {/* Output */}
        <div className="space-y-2">
          <label className="text-sm text-slate-600">نتیجه</label>

          <input
            type="text"
            readOnly
            value={output}
            placeholder=""
            className="
              w-full rounded-xl p-3
              bg-white/80 border border-white/30
              text-slate-700
            "
          />
        </div>
      </div>
    </BaseModal>
  );
}
