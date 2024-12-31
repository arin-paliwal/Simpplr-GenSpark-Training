import { FC } from 'react';
import './Button.css';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}
declare const Button: FC<ButtonProps>;
export default Button;
