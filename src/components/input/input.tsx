import { FC } from 'react';
import { InputProps } from '../../types/inputProps';

const Input: FC<InputProps> = ({id, type = 'text', placeholder = '', value, onChange, className = ''}) => {
  return (
    <div className={`w-full ${className}`}>
      <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} className="w-full outline-none p-2 rounded-xl border" />
    </div>
  );
};

export default Input;
