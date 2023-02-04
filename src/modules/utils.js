import * as convert from "../../node_modules/color-convert";
export const generatePalette = (hex) => {
  const colors = [];

  const [h, s] = convert.hex.hsl(hex);

  for (let i = 0; i <= 100; i += 10) {
    colors.push([h, s, i]);
  }

  return colors;
};

export const hexToCSSHSL = (hex) => {
  // tranforme le hex d'entrée en HSL.
  const hsl = convert.hex.hsl(hex);
  // Retourne une chaîne de caractère au format css.
  return `${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%`;
};

export const isHexColor = (hex) => /^#[0-9A-F]{6}$/i.test(hex);
