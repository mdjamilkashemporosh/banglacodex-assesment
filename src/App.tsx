import { useState } from 'react';
import Modal from './components/modal';
import Button from './components/button';
import Input from './components/input';
import Title from './components/title';
import ProfileCard from './components/profileCard';
import { useUserContext } from './member-context';

export default function App() {
  const { users } = useUserContext();
  const [open, setOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ searchInput: string }>({ searchInput: '' });

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Filter members from the global user list
  const filteredMembers = users
    .filter((user) => user.role === 'member')
    .filter((user) => user.name.toLowerCase().includes(formData.searchInput.toLowerCase()));

  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <Button onClick={openModal} className="bg-black m-2 w-60" ariaLabel="Open Modal">
        Open Group Info Modal
      </Button>

      <Modal isOpen={open} className="w-[500px] h-[500px]" onClose={closeModal} title="Group Info">
        <div>
          <Input
            className="mb-6"
            id="searchInput"
            placeholder="Search by name"
            value={formData.searchInput}
            onChange={handleChange}
          />
          <Title>All Members</Title>
          <div className="max-h-[250px] overflow-y-scroll hide-scrollbar">
            {filteredMembers.map((data, i) => (
              <ProfileCard key={i} name={data.name} role={data?.role} />
            ))}
            {filteredMembers.length === 0 && <p>No members found</p>}
          </div>
        </div>
      </Modal>
    </div>
  );
}
