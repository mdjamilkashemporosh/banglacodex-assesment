import { FC } from 'react';
import { InputProps } from '../types/inputProps';
import { RiSearchLine } from "react-icons/ri";

const Input: FC<InputProps> = ({id, type = 'search', placeholder = '', value, onChange, className = ''}) => {
  return (
    <div className={`flex items-center w-full rounded-xl border p-2 ${className}`}>
      <div className='pr-2 text-black/50'><RiSearchLine size={20}/></div>
      <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} className="w-full outline-none" />
    </div>
  );
};

export default Input;
