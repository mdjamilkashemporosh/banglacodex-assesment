import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ModalProps } from '../types/modalProps';
import { LiaTimesSolid } from "react-icons/lia";

export default function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
    return (
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
            <div className="fixed inset-0 bg-black/50" aria-hidden="true"></div>
            <DialogPanel className="fixed inset-0 z-20 flex items-center justify-center p-4">
                <div className={`rounded-xl bg-white p-6 shadow-lg ${className || ''}`}>
                    <div className="flex items-center justify-between mb-12">
                        {title && (<DialogTitle as="h1" className="text-3xl font-medium text-black">{title}</DialogTitle>)}
                        <button onClick={onClose}><LiaTimesSolid size={20} /></button>
                    </div>
                    <div>{children}</div>
                </div>
            </DialogPanel>
        </Dialog>
    );
}
