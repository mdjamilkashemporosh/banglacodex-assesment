import { FC } from 'react';
import { UserType } from '../types/user';
import { RiDeleteBinLine } from "react-icons/ri";
import Dropdown from './dropDown';
import { useUserContext } from '../userContext';

const UserCard: FC<UserType> = ({ id, name, role }) => {
    const { users, setUsers } = useUserContext();

    const handleDropdownChange = (selectedItem: string) => {
        console.log('Selected:', selectedItem);
    };

    const handleDelete = () => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="mx-auto my-1 bg-white rounded-xl py-3 px-4 overflow-hidden border border-gray-200 flex items-center justify-between">
            <div className='flex items-center'>
                <img
                    src='https://t3.ftcdn.net/jpg/07/54/87/72/360_F_754877225_0oMl9yOUGnpQQem0wWtxq8VovGufoqoQ.jpg'
                    alt={name}
                    className="w-8 h-8 mr-3 rounded-full"
                />
                <p className="text-lg font-semibold">{name}</p>
            </div>
            <div className="text-center flex items-center gap-6">
                <Dropdown onChange={handleDropdownChange} defaultOption={role} userId={id} />
                <div className='cursor-pointer' onClick={handleDelete}>
                    <RiDeleteBinLine />
                </div>
            </div>
        </div>
    );
};

export default UserCard;
