import React from 'react';
import { useToggleContext } from './Toggle';

export const ToggleButton: React.FC = () => {
  const { toggle } = useToggleContext();
  return (
    <button
      onClick={toggle}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300"
    >
      Toggle
    </button>
  );
};
