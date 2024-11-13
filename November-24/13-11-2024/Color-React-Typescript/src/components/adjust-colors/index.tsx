import React from 'react';
import ColorName from './color-name';
import HexToCMYK from './to-cmyk';
import HexToHSL from './to-hsl';
import HexToHSV from './to-hsv';
import HexToRGB from './to-rgb';
import { ColorAction } from '../../color-reducer';

type AdjustColorsProps = {
  hexColor: string;
  dispatch: React.Dispatch<ColorAction>;
};

const AdjustColors = ({ hexColor, dispatch }: AdjustColorsProps) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <h3>Adjust Colors</h3>
      <HexToRGB hexColor={hexColor} dispatch={dispatch} />
      <HexToHSL hexColor={hexColor} dispatch={dispatch} />
      <HexToHSV hexColor={hexColor} dispatch={dispatch} />
      <HexToCMYK hexColor={hexColor} dispatch={dispatch} />
      <ColorName hexColor={hexColor} dispatch={dispatch} />
    </div>
  );
};

export default AdjustColors;
