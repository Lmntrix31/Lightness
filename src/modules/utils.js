import * as convert from "../../node_modules/color-convert";
export const generatePalette = (hex) => {
  const colors = [];

  const [h, s] = convert.hex.hsl(hex);

  for (let i = 0; i <= 100; i += 10) {
    colors.push([h, s, i]);
  }

  return colors;
};

export const isHexColor = (hex) => /^#[0-9A-F]{6}$/i.test(hex);
