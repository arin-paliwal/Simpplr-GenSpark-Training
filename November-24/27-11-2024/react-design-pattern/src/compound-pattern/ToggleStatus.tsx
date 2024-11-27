import React from 'react';
import { useToggleContext } from './Toggle';

export const ToggleStatus: React.FC = () => {
  const { isOn } = useToggleContext();
  return (
    <p className="text-lg font-medium text-gray-700 mt-2">
      Status: <span className={isOn ? "text-green-500" : "text-red-500"}>{isOn ? 'On' : 'Off'}</span>
    </p>
  );
};
