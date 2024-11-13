import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { ColorAction } from '../../color-reducer';

type HexToRGBProps = {
  hexColor: string;
  dispatch: React.Dispatch<ColorAction>;
};

const HexToRGB = ({ hexColor, dispatch }: HexToRGBProps) => {
  const color = hex.rgb(hexColor);
  const [r, g, b] = color;

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="R"
        type="number"
        value={r}
        min={0}
        max={255}
        onChange={(e) => {
          const r = parseInt(e.target.value, 10);
          dispatch({
            type: 'update-rgb-color',
            payload: { rgb: [r, g, b] },
          });
        }}
      />
      <LabeledInput
        label="G"
        type="number"
        value={g}
        min={0}
        max={255}
        onChange={(e) => {
          const g = parseInt(e.target.value, 10);
          dispatch({
            type: 'update-rgb-color',
            payload: { rgb: [r, g, b] },
          });
        }}
      />
      <LabeledInput
        label="B"
        type="number"
        value={b}
        min={0}
        max={255}
        onChange={(e) => {
          const b = parseInt(e.target.value, 10);
          dispatch({
            type: 'update-rgb-color',
            payload: { rgb: [r, g, b] },
          });
        }}
      />
    </section>
  );
};

export default HexToRGB;
