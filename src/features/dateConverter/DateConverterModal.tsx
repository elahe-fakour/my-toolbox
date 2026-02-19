import { useState } from "react";
import { BaseModal } from "../../modals/BaseModal";
import { Button } from "../../components/atoms/Button";
import {
  shamsiToGregorian,
  gregorianToShamsi,
} from "./utils";

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

  const handleConvert = () => {
    if (!inputDate) return;

    const result =
      mode === "shamsi-gregorian"
        ? shamsiToGregorian(inputDate)
        : gregorianToShamsi(inputDate);

    setResultDate(result);
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="تبدیل تاریخ شمسی و میلادی"
    >
      <div className="space-y-5">
        {/* Mode Switch */}
        <div className="flex gap-2">
          <Button
            variant={mode === "shamsi-gregorian" ? "primary" : "secondary"}
            onClick={() => {
              setMode("shamsi-gregorian");
              setInputDate("");
              setResultDate("");
            }}
          >
            شمسی → میلادی
          </Button>

          <Button
            variant={mode === "gregorian-shamsi" ? "primary" : "secondary"}
            onClick={() => {
              setMode("gregorian-shamsi");
              setInputDate("");
              setResultDate("");
            }}
          >
            میلادی → شمسی
          </Button>
        </div>

        {/* Input */}
        <input
          type="date"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
          className="w-full rounded-xl p-3 bg-white/60 border border-white/30 backdrop-blur-md"
        />

        {/* Output */}
        <input
          readOnly
          value={resultDate}
          placeholder="تاریخ تبدیل‌شده"
          className="w-full rounded-xl p-3 bg-white/80 border border-white/30 backdrop-blur-md"
        />

        <Button onClick={handleConvert}>تبدیل تاریخ</Button>
      </div>
    </BaseModal>
  );
}
