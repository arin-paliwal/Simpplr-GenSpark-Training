import { ChangeEventHandler } from 'react';
import ColorSelect from './color-select';
import ColorSwatch from './color-swatch';


const ColorPicker = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <h3>Select Color</h3>
      <ColorSelect/>
      <ColorSwatch/>
    </div>
  );
};

export default ColorPicker;
