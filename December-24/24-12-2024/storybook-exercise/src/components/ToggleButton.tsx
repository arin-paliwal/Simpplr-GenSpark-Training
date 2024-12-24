import { ChangeEvent } from "react";
import "./toggle-switch.css";

type ToggleSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onLabel?: string;
  offLabel?: string;
};

const ToggleSwitch = ({
  checked,
  onChange,
  onLabel = "On",
  offLabel = "Off",
}: ToggleSwitchProps) => {
  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className="toggle-switch" htmlFor="toggle-switch">
      <span
        className={`toggle-switch__label ${
          checked ? "toggle-switch__label--on" : "toggle-switch__label--off"
        }`}
      >
        {checked ? onLabel : offLabel}
      </span>
      <input
        type="checkbox"
        id="toggle-switch"
        className="toggle-switch__checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <div className="toggle-switch__slider"></div>
    </label>
  );
};

export default ToggleSwitch;