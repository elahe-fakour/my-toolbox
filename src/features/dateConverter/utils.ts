import * as jalaali from 'jalaali-js'

export function shamsiToGregorian(date: string): string {
  const [jy, jm, jd] = date.split('-').map(Number)
  const { gy, gm, gd } = jalaali.toGregorian(jy, jm, jd)
  return `${gy}-${String(gm).padStart(2, '0')}-${String(gd).padStart(2, '0')}`
}

export function gregorianToShamsi(date: string): string {
  const [gy, gm, gd] = date.split('-').map(Number)
  const { jy, jm, jd } = jalaali.toJalaali(gy, gm, gd)
  return `${jy}-${String(jm).padStart(2, '0')}-${String(jd).padStart(2, '0')}`
}
