import chroma from 'chroma-js';
import { ColorPalette, PalleteType } from '../model/interface';

const numberOfColors = 10;
const levels = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
];

const generatePalette = (seedColor: PalleteType) => {
  const newPalette: ColorPalette = { ...seedColor, colors: {} };
  levels.forEach((level, index) => (newPalette.colors[level] = []));
  seedColor.colors.forEach((color, index) => {
    const scale = getScale(color.color, numberOfColors).reverse();
    scale.forEach((hex, i) => {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex,
        rgb: chroma(hex).css(),
      });
    });
  });
  return newPalette;
};

// specify the range to generate the scale. Eg: ['black', 'red', 'white']
const getRange = (hexColor: string) => [
  chroma(hexColor).darken(1.4).hex(),
  hexColor,
  chroma('white').hex(),
];

// generates the scale of colors based on the range and number of colors
const getScale = (hexColor: string, numberOfColors: number) =>
  chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
export default generatePalette;
