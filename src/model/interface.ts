export interface PalleteType {
  paletteName: string;
  id: string;
  emoji: string;
  colors: Color[];
}

export interface ColorPalette extends Omit<PalleteType, 'colors'> {
  colors: Record<string, GeneratedColor[]>;
}

export interface Color {
  name: string;
  color: string;
}
export interface GeneratedColor extends Omit<Color, 'color'> {
  id: string;
  hex: string;
  rgb: string;
  [T: string]: string;
}
