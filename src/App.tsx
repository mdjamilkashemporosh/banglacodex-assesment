import { useState } from 'react';
import Modal from './components/modal/modal';
import Button from './components/button/button';
import Input from './components/input/input';

export default function MyApp() {
  const [activeModal, setActiveModal] = useState<null | 'first' | 'second'>(null);
  const [formData, setFormData] = useState<{ [key: string]: string }>({ searchInput: '' });

  const openModal = (modal: 'first' | 'second') => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <>
        <Button
          onClick={() => openModal('first')}
          className="bg-black m-2 w-60"
          ariaLabel="Open First Modal"
        >
          Open First Modal
        </Button>
        <Button
          onClick={() => openModal('second')}
          className="bg-blue-500 m-2 w-60"
          ariaLabel="Open Second Modal"
        >
          Open Second Modal
        </Button>
      </>

      {/* First Modal */}
      <Modal isOpen={activeModal === 'first'} className="w-[550px]" onClose={closeModal} title="Create new group">
        <div>
          <p className='text-base font-medium mb-2 text-black/50'>Add members</p>
          <Input id="searchInput" placeholder="Search by name" value={formData.searchInput} onChange={handleChange} />
        </div>
      </Modal>

      {/* Second Modal */}
      <Modal isOpen={activeModal === 'second'} onClose={closeModal} title="Second Modal">
        <p className="mt-2 text-sm/6 text-white/50">
          This is the second modal content. Feel free to customize this modal too!
        </p>
        <div className="mt-4">
          <Button
            onClick={closeModal}
            className="bg-gray-700 hover:bg-gray-600 shadow-inner shadow-white/10"
            ariaLabel="Close Second Modal"
          >
            Close Second Modal
          </Button>
        </div>
      </Modal>
    </div>
  );
}
