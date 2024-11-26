import { FC } from 'react';
import { UserType } from '../types/user';
import Button from './button';
import { MdAdd } from "react-icons/md";

interface MemberCardProps {
  member: UserType;
  onAdd: (member: UserType) => void;
}

const MemberCard: FC<MemberCardProps> = ({ member, onAdd }) => {
  return (
    // <div className="mx-auto my-1 bg-white rounded-xl py-3 px-4 overflow-hidden border border-gray-200 flex items-center justify-between">
    // <div className='flex items-center'>
    //     <img 
    //         src='https://t3.ftcdn.net/jpg/07/54/87/72/360_F_754877225_0oMl9yOUGnpQQem0wWtxq8VovGufoqoQ.jpg' 
    //         alt={member?.name} 
    //         className="w-8 h-8 mr-3 rounded-full" 
    //     />
    //     <p className="text-lg font-semibold">{member?.name}</p>
    // </div>
    //   <div>
    //     <Button
    //       className="bg-blue-500 text-white px-4 rounded"
    //       onClick={() => onAdd(member)}
    //     >
    //       Add
    //     </Button>
    //   </div>
    // </div>
    <div className="mx-auto my-1 bg-white rounded-xl py-3 px-4 overflow-hidden border border-gray-200 flex items-center justify-between">
    <div className='flex items-center'>
        <img 
            src='https://t3.ftcdn.net/jpg/07/54/87/72/360_F_754877225_0oMl9yOUGnpQQem0wWtxq8VovGufoqoQ.jpg' 
            alt={member?.name} 
            className="w-8 h-8 mr-3 rounded-full" 
        />
        <p className="text-lg font-semibold">{member?.name}</p>
    </div>
    <div className="text-center flex items-center gap-6">
        {/* @ts-ignore */}
        <div className='cursor-pointer' onClick={() => onAdd(member)}>
            <MdAdd size={24}/>
        </div>
    </div>
</div>
  );
};

export default MemberCard;
