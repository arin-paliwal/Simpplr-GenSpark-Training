import { ChangeEventHandler, useContext } from 'react';
import HexColor from '../hex-color';
import LabeledInput from '../shared/labeled-input';
import { ColorContext } from '../../context/color-context';

const ColorSelect = () => {
  const { state, dispatch } = useContext(ColorContext);
  return (
    <div className="flex flex-col gap-2">
      <LabeledInput
        label="Color"
        id="color-input"
        className="h-80 w-full"
        type="color"
        value={state.hexColor}
        onChange={(e) =>
          dispatch({ type: 'update-hex-color', payload: e.target.value })
        }
      />
      <HexColor hexColor={state.hexColor} />
    </div>
  );
};

export default ColorSelect;
