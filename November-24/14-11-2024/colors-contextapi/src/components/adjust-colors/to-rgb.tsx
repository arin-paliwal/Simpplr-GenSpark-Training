import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { ColorAction } from '../../color-reducer';
import { useContext } from 'react';
import { ColorContext } from '../../context/color-context';

const HexToRGB = () => {
  const { state, dispatch } = useContext(ColorContext);
  const color = hex.rgb(state.hexColor);
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
          const r = e.target.valueAsNumber;
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
          const g = e.target.valueAsNumber;
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
          const b = e.target.valueAsNumber;
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
