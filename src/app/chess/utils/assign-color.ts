import { COLOR } from '../interfaces/color';

type ColorCouple = ["white", "black"] | ["black", "white"];

export function assignColorToCouple(): ColorCouple {
  return Math.random() < 0.5
    ? [COLOR.WHITE, COLOR.BLACK]
    : [COLOR.BLACK, COLOR.WHITE];
}