import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';
import { roles as data } from '../data/role';
import { DropdownProps } from '../types/dropDownProps';
import { useUserContext } from '../userContext';

export default function Dropdown({ onChange, defaultOption, userId }: DropdownProps) {
  const { setUsers } = useUserContext();

  const handleChange = (selectedRole: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: selectedRole } : user
      )
    );
    onChange(selectedRole);
  };

  return (
    <div className="">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-white py-1.5 px-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none">
          {defaultOption || 'Select Option'}
          <FaChevronDown className="text-gray-500" />
        </MenuButton>

        <MenuItems
          className="absolute mt-2 w-52 origin-top-right rounded-xl bg-white border border-gray-300 p-1 text-sm text-gray-700 focus:outline-none"
        >
          {data.map((item, index) => (
            <MenuItem key={index}>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } group flex w-full items-center rounded-lg py-2 px-3`}
                  onClick={() => handleChange(item)}
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
