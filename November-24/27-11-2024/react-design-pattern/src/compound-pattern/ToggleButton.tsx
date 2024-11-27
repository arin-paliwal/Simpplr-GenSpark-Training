import React from 'react';
import { useToggleContext } from './Toggle';

export const ToggleButton: React.FC = () => {
  const { toggle } = useToggleContext();
  return <button onClick={toggle}>Toggle</button>;
};
