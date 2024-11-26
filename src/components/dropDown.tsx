import { Select } from 'antd';
import { roles as data } from '../data/role';
import { DropdownProps } from '../types/dropDownProps';
import { useUserContext } from '../userContext';

const { Option } = Select;

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
    <Select
      defaultValue={defaultOption || 'Select Option'}
      onChange={handleChange}
      style={{ width: 100 }}
    >
      {data.map((item, index) => (
        <Option  key={index} value={item}>
          {item}
        </Option>
      ))}
    </Select>
  );
}
