import { FC } from 'react';
import { ButtonProps } from '../../types/buttonProps';

const Button: FC<ButtonProps> = ({ onClick, children, className = '', type = 'button', disabled = false, ariaLabel }) => {
  return (
    <button
      onClick={onClick} type={type} disabled={disabled} aria-label={ariaLabel} className={`rounded-xl py-3 text-sm font-medium text-white ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
