const faNums = '۰۱۲۳۴۵۶۷۸۹'
const enNums = '0123456789'

export function faToEn(input: string): string {
  return input.replace(/[۰-۹]/g, d => enNums[faNums.indexOf(d)])
}

export function enToFa(input: string): string {
  return input.replace(/[0-9]/g, d => faNums[enNums.indexOf(d)])
}
