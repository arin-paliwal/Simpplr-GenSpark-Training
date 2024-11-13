import colorNames from 'color-name-list';
import { ColorAction } from '../../color-reducer';

type ColorNameProps = {
  hexColor: string;
  dispatch: React.Dispatch<ColorAction>;
};

const ColorName = ({ hexColor }: ColorNameProps) => {
  const color = colorNames.find((color) => {
    return color.hex === hexColor.toLowerCase();
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
