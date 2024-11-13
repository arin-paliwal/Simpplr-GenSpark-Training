import { cmyk, hsl, hsv, rgb } from 'color-convert';

type ColorState = {
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
  if (action.type === 'update-hex-color') {
    const hexColor = action.payload;
    return {
      ...state,
      hexColor,
    };
  } else if (action.type === 'update-rgb-color') {
    const hexColorFromRGB = `#${rgb.hex(action.payload.rgb)}`;
    return {
      ...state,
      hexColor: hexColorFromRGB,
    };
  } else if (action.type === 'update-hsl-color') {
    const hexColorFromHSL = `#${hsl.hex(action.payload.hsl)}`;
    return {
      ...state,
      hexColor: hexColorFromHSL,
    };
  } else if (action.type === 'update-hsv-color') {
    const hexColorFromHSV = `#${hsv.hex(action.payload.hsv)}`;
    return {
      ...state,
      hexColor: hexColorFromHSV,
    };
  } else if (action.type === 'update-cmyk-color') {
    const hexColorFromCMYK = `#${cmyk.hex(action.payload.cmyk)}`;
    return {
      ...state,
      hexColor: hexColorFromCMYK,
    };
  }
  return state;
};
