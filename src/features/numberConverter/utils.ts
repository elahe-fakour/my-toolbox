const faNums = "۰۱۲۳۴۵۶۷۸۹";
const enNums = "0123456789";

/**
 * تبدیل اعداد فارسی به انگلیسی (برای دکمه تبدیل)
 */
export function faToEn(input: string): string {
  return input.replace(/[۰-۹]/g, (d) => enNums[faNums.indexOf(d)]);
}

/**
 * تبدیل اعداد انگلیسی به فارسی (برای دکمه تبدیل)
 */
export function enToFa(input: string): string {
  return input.replace(/[0-9]/g, (d) => faNums[enNums.indexOf(d)]);
}

/**
 * ✅ نرمال‌سازی ورودی:
 * اگر کاربر با کیبورد فارسی یا عربی عدد وارد کرد،
 * همان لحظه به عدد انگلیسی تبدیل می‌شود
 * (قبل از زدن دکمه تبدیل)
 */
export function normalizeToEnglishNumbers(value: string): string {
  const fa = "۰۱۲۳۴۵۶۷۸۹";
  const ar = "٠١٢٣٤٥٦٧٨٩";

  return value.replace(/[۰-۹٠-٩]/g, (char) => {
    if (fa.includes(char)) return fa.indexOf(char).toString();
    if (ar.includes(char)) return ar.indexOf(char).toString();
    return char;
  });
}
