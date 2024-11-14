import { cmyk, hsl, hsv, rgb } from 'color-convert';

export type ColorState = {
  hexColor: string;
};

type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: string;
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: {
    rgb: [r: number, g: number, b: number];
  };
};

type UpdateHSLColorAction = {
  type: 'update-hsl-color';
  payload: {
    hsl: [h: number, s: number, l: number];
  };
};

type UpdateHSVColorAction = {
  type: 'update-hsv-color';
  payload: {
    hsv: [h: number, s: number, v: number];
  };
};

type UpdateCMYKColorAction = {
  type: 'update-cmyk-color';
  payload: {
    cmyk: [c: number, m: number, y: number, k: number];
  };
};

export type ColorAction =
  | UpdateHexColorAction
  | UpdateRGBColorAction
  | UpdateHSLColorAction
  | UpdateHSVColorAction
  | UpdateCMYKColorAction;

export const initialState: ColorState = {
  hexColor: '#e37926',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: ColorAction,
): ColorState => {
  switch (action.type) {
    case 'update-hex-color':
      return { ...state, hexColor: action.payload };
    case 'update-rgb-color':
      return { ...state, hexColor: `#${rgb.hex(action.payload.rgb)}` };
    case 'update-hsl-color':
      return { ...state, hexColor: `#${hsl.hex(action.payload.hsl)}` };
    case 'update-hsv-color':
      return { ...state, hexColor: `#${hsv.hex(action.payload.hsv)}` };
    case 'update-cmyk-color':
      return { ...state, hexColor: `#${cmyk.hex(action.payload.cmyk)}` };
    default:
      return state;
  }
};
