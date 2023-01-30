function generateColorPalette(hexCode, interval) {
  const hslArray = [];
  const color = allColors[hexCode].toHsl();

  for (let i = 0; i <= 100; i += interval) {
    hslArray.push({
      h: color.h,
      s: color.s,
      l: i,
    });
  }
  return hslArray;
}

let hexCode = "FF0000";
let interval = 10;
let colorPalette = generateColorPalette(hexCode, interval);
console.log(colorPalette);
