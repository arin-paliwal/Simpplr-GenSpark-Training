import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { ColorAction } from '../../color-reducer';
import { useContext } from 'react';
import { ColorContext } from '../../context/color-context';


const HexToCMYK = () => {
  const { state, dispatch } = useContext(ColorContext);
  const color = hex.cmyk(state.hexColor);
  const [c, m, y, k] = color;

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="C"
        min={0}
        max={100}
        type="number"
        value={c}
        onChange={(e) => {
          const c = e.target.valueAsNumber
          dispatch({
            type: 'update-cmyk-color',
            payload: { cmyk: [c, m, y, k] },
          });
        }}
      />
      <LabeledInput
        label="M"
        min={0}
        max={100}
        type="number"
        value={m}
        onChange={(e) => {
          const m = e.target.valueAsNumber
          dispatch({
            type: 'update-cmyk-color',
            payload: { cmyk: [c, m, y, k] },
          });
        }}
      />
      <LabeledInput
        label="Y"
        min={0}
        max={100}
        type="number"
        value={y}
        onChange={(e) => {
          const y = e.target.valueAsNumber
          dispatch({
            type: 'update-cmyk-color',
            payload: { cmyk: [c, m, y, k] },
          });
        }}
      />
      <LabeledInput
        label="K"
        type="number"
        min={0}
        max={100}
        value={k}
        onChange={(e) => {
          const k = e.target.valueAsNumber
          dispatch({
            type: 'update-cmyk-color',
            payload: { cmyk: [c, m, y, k] },
          });
        }}
      />
    </section>
  );
};

export default HexToCMYK;
