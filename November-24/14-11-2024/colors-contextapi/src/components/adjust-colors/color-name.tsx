import colorNames from 'color-name-list';
import { useContext } from 'react';
import { ColorContext } from '../../context/color-context';


const ColorName = () => {
  const { state, dispatch } = useContext(ColorContext);
  const color = colorNames.find((color) => {
    return color.hex === state.hexColor.toLowerCase();
  });

  if (!color) return null;

  return (
    <p className="information">
      This color is called{' '}
      <span style={{ color: color.hex }}>{color.name}</span>.
    </p>
  );
};

export default ColorName;
