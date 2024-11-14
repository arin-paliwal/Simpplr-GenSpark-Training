import { useContext } from 'react';
import { ColorAction } from '../../color-reducer';
import {
  getComplementColors,
  getTriadColors,
} from '../../lib/get-related-colors';
import RelatedColorPalette from './related-color-palette';
import { ColorContext } from '../../context/color-context';

const RelatedColors = () => {
  const { state } = useContext(ColorContext);
  const triadColors = getTriadColors(state.hexColor);
  const complementColors = getComplementColors(state.hexColor);

  return (
    <>
      <RelatedColorPalette title="Triad Colors" hexColors={triadColors} />
      <RelatedColorPalette
        title="Complimentary Colors"
        hexColors={complementColors}
      />
    </>
  );
};

export default RelatedColors;
