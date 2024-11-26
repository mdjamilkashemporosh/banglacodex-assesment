import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';
import { roles as data } from '../data/role';
import { DropdownProps } from '../types/dropDownProps';

export default function Dropdown({ onChange, defaultOption }: DropdownProps) {
  return (
    <div className="">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 hover:bg-gray-700 focus:outline-none">
          {defaultOption || 'Select Option'}
          <FaChevronDown className="text-white/60" />
        </MenuButton>

        <MenuItems
          className="absolute mt-2 w-52 origin-top-right rounded-xl bg-gray-800 border border-gray-700 p-1 text-sm text-white shadow-lg focus:outline-none"
        >
          {data.map((item, index) => (
            <MenuItem key={index}>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-700' : ''
                  } group flex w-full items-center rounded-lg py-2 px-3`}
                  onClick={() => onChange(item)}
                >
                  {item}
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
