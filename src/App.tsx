import React, { useState } from 'react';
import Modal from './components/modal';
import Button from './components/button';
import Input from './components/input';
import Title from './components/title';
import ProfileCard from './components/profileCard';
import { useUserContext } from './userContext';
import { UserType } from './types/user';
import MemberCard from './components/profile-add'
export default function App() {
  const { users, allUsers, setUsers } = useUserContext();
  const [open, setOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ searchInput: string }>({ searchInput: '' });

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const filteredMembers = allUsers
    .filter((user) => !users.some((u) => u.id === user.id))
    .filter((user) => user.name.toLowerCase().includes(formData.searchInput.toLowerCase()));


  const addMember = (member: UserType) => {
    setUsers((prev) => [...prev, member]);
    // setFormData({ searchInput: '' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <Button onClick={openModal} className="bg-black m-2 w-60" ariaLabel="Open Modal">Open Group Info Modal</Button>
      <Modal isOpen={open} className="w-[500px] h-[500px]" onClose={closeModal} title="Group Info">
        <div>
          <Input className="mb-6" id="searchInput" placeholder="Search by name" value={formData.searchInput} onChange={handleChange} />
          <Title>{formData.searchInput ? 'Search Results' : 'All Members'}</Title>
          <div className="max-h-[250px] overflow-y-scroll hide-scrollbar">
            {formData.searchInput
              ? filteredMembers.length > 0
                ? filteredMembers.map((data) => (
<MemberCard key={data.id} member={data} onAdd={addMember} />
                  ))
                : <p>No search results found</p>
              : users.map((data) => (<ProfileCard key={data.id} id={data.id} name={data.name} role={data.role} />))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
