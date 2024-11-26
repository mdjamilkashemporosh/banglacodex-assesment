import { useState, ChangeEvent } from 'react';
import { Tabs } from 'antd';
import { TeamOutlined, PictureOutlined } from '@ant-design/icons';
import Modal from './components/modal';
import Button from './components/button';
import Input from './components/input';
import Title from './components/title';
import UserCard from './components/UserCard';
import { useUserContext } from './userContext';
import { UserType } from './types/user';
import UserAddCard from './components/userAddCard';

const { TabPane } = Tabs;

export default function App() {
  const { users, allUsers, setUsers } = useUserContext();
  const [open, setOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ searchInput: string }>({ searchInput: '' });

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const filteredMembers = allUsers
    .filter((user) => !users.some((u) => u.id === user.id))
    .filter((user) => user.name.toLowerCase().includes(formData.searchInput.toLowerCase()));

  const addMember = (member: UserType) => {
    setUsers((prev) => [...prev, member]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <Button onClick={openModal} className="bg-black text-white w-60" ariaLabel="Open Modal">Open Group Info Modal</Button>
      <Modal isOpen={open} className="w-[600px] h-[550px] bg-white p-6 rounded-2xl" onClose={closeModal} title="Group info">
        <Tabs centered defaultActiveKey="1">
          <TabPane tab={<span className='flex gap-2 text-base'><TeamOutlined />Group Details</span>} key="1">
            <div className="p-4">
              <h2 className="text-lg font-semibold">Group Details</h2>
              <p>This section contains group information, objectives, and other details.</p>
            </div>
          </TabPane>
          <TabPane tab={<span className='flex gap-2 text-base'><TeamOutlined />Group Members</span>} key="2">
            {/* Members section */}
            <div>
              <Input className="mb-6" id="searchInput" placeholder="Search by name" value={formData.searchInput} onChange={handleChange} />
              <Title>{formData.searchInput ? 'Search Results' : 'All Members'}</Title>
              <div className="max-h-[250px] overflow-y-scroll hide-scrollbar">
                {formData.searchInput
                  ? filteredMembers.length > 0
                    ? filteredMembers.map((data) => (
                      <UserAddCard key={data.id} member={data} onAdd={addMember} />
                    ))
                    : <p>No search results found</p>
                  : users.map((data) => (
                    <UserCard key={data.id} id={data.id} name={data.name} role={data.role} />
                  ))}
              </div>
            </div>
          </TabPane>
          <TabPane tab={<span className='flex gap-2 text-base'><PictureOutlined />Media</span>} key="3">
            {/* Media content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">Media</h2>
              <p>Media-related information and resources will appear here.</p>
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
}
