import { FC } from 'react';
import { ButtonProps } from '../types/buttonProps';

const Button: FC<ButtonProps> = ({ onClick, children, className = '', type = 'button', disabled = false, ariaLabel }) => {
  return (
    <button
      onClick={onClick} type={type} disabled={disabled} aria-label={ariaLabel} className={`rounded-xl py-4 text-sm font-medium ${className}`}>
      {children}
    </button>
  );
};

export default Button;
