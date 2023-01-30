// modules/utils.js
import { generatePalette } from "./modules/utils.js";
import * as convert from "color-convert";
export const generatePalette = (hex) => {
  const colors = [];

  const [h, s] = convert.hex.hsl(hex);

  for (let i = 0; i <= 100; i += 10) {
    colors.push([h, s, i]);
  }

  return colors;
};
