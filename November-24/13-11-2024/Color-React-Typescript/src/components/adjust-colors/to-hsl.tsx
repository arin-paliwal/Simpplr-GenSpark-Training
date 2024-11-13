import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { ColorAction } from '../../color-reducer';

type HexToHSLProps = {
  hexColor: string;
  dispatch: React.Dispatch<ColorAction>;
};

const HexToHSL = ({ hexColor, dispatch }: HexToHSLProps) => {
  const color = hex.hsl(hexColor);
  const [h, s, l] = color;

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="H"
        type="number"
        min={0}
        max={360}
        value={h}
        onChange={(e) => {
          const h = e.target.valueAsNumber;
          dispatch({
            type: 'update-hsl-color',
            payload: { hsl: [h, s, l] },
          });
        }}
      />
      <LabeledInput
        label="S"
        min={0}
        max={100}
        type="number"
        value={s}
        onChange={(e) => {
          const s = e.target.valueAsNumber;
          dispatch({
            type: 'update-hsl-color',
            payload: { hsl: [h, s, l] },
          });
        }}
      />
      <LabeledInput
        label="L"
        min={0}
        max={100}
        type="number"
        value={l}
        onChange={(e) => {
          const l = e.target.valueAsNumber;
          dispatch({
            type: 'update-hsl-color',
            payload: { hsl: [h, s, l] },
          });
        }}
      />
    </section>
  );
};

export default HexToHSL;
