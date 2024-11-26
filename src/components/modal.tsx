import { Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ModalProps } from '../types/modalProps';

export default function CustomModal({ isOpen, onClose, title, children, className }: ModalProps) {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null} 
      closeIcon={<CloseOutlined className='text-black' />} 
      title={<p className='text-2xl'>{title}</p>}
      className={`${className || ''}`}
      centered 
    >
      <div className='mt-8 '>
      {children}
      </div>
    </Modal>
  );
}
