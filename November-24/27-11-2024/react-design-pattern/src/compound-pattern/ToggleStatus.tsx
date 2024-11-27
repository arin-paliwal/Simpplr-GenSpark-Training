import React from 'react';
import { useToggleContext } from './Toggle';

export const ToggleStatus: React.FC = () => {
  const { isOn } = useToggleContext();
  return <p>Status: {isOn ? 'On' : 'Off'}</p>;
};
