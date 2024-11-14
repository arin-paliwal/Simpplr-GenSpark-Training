import clsx from 'clsx';
import { ChangeEventHandler, useId } from 'react';

type LabeledInputProps = {
  id?: string;
  label: string;
  value: string | number;
  type?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  min?: number;
  max?: number;
};

const LabeledInput = ({
  label,
  value,
  id,
  className,
  type = 'text',
  onChange,
  min,
  max,
}: LabeledInputProps) => {
  id = useId() + id;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        type={type}
        className={clsx('w-full', className)}
        readOnly={!onChange}
      />
    </div>
  );
};

export default LabeledInput;
