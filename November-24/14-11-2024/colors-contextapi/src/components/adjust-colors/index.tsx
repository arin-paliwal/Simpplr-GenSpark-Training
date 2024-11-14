import React from 'react';
import ColorName from './color-name';
import HexToCMYK from './to-cmyk';
import HexToHSL from './to-hsl';
import HexToHSV from './to-hsv';
import HexToRGB from './to-rgb';
import { ColorAction } from '../../color-reducer';

const AdjustColors = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <h3>Adjust Colors</h3>
      <HexToRGB />
      <HexToHSL />
      <HexToHSV />
      <HexToCMYK />
      <ColorName />
    </div>
  );
};

export default AdjustColors;
