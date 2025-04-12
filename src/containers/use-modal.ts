import { useEffect, useState } from 'react';

type ModalType =
  | 'edit_food_modal'
  | 'delete_food_modal'
  | 'new_food_modal'
  | 'edit_drink_modal'
  | 'delete_drink_modal'
  | 'new_drink_modal'
  | null;

type ModalItem = {
  id: string;
  name: string;
  price: number;
};

const useModal = (onDisplay: (modalId: string) => void) => {
  const [modalToOpen, setModalToOpen] = useState<ModalType>(null);
  const [activeItem, setActiveItem] = useState<ModalItem | null>(null);

  const openModal = (modalId: ModalType) => {
    setModalToOpen(modalId);
  };

  useEffect(() => {
    if (modalToOpen) {
      onDisplay(modalToOpen);
    }
  }, [modalToOpen, onDisplay]);

  return { modalToOpen, activeItem, openModal, setActiveItem };
};

export default useModal;
