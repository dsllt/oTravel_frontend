import { useCallback, useEffect, useMemo, useState } from 'react';
import { MenuDTO } from '../domain/models/menu-dto';
import { FoodType, Menu } from '../domain/models/menu';
import { putFavorite } from '@lib/usecases/put-favorite';
import { putMenu } from '@lib/usecases/put-menu';
import { deleteMenu } from '@lib/usecases/delete-menu';
import { postMenu } from '@lib/usecases/post-menu';

export type NewItem = {
  name: string | undefined;
  price: number | undefined;
};
type UseModalProps = {
  loadMenu: () => Promise<void>;
};
const useModal = ({ loadMenu }: UseModalProps) => {
  const [newItem, setNewItem] = useState<NewItem | undefined>(undefined);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<Menu | null>(null);

  const displayModal = useCallback((modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }, []);

  const closeModal = useCallback((modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  }, []);

  const displayEditPlaceModal = useCallback(() => {
    displayModal('place-edit');
  }, [displayModal]);

  const onClickDeleteMenuItem = useCallback(
    (modalId: string) => {
      closeModal(modalId);
    },
    [closeModal],
  );

  const onClickConfirmDeleteMenuModal = useCallback(
    async (item: Menu) => {
      await deleteMenu(item.id);
      setActiveModal(null);
      closeModal('delete_item_modal');
      await loadMenu();
    },
    [closeModal, loadMenu],
  );

  const onClickOpenEditMenuModal = useCallback(
    (modalId: string, item: Menu) => {
      setActiveModal(modalId);
      setSelectedItem(item);
    },
    [],
  );

  const onClickConfirmEditMenuModal = useCallback(async () => {
    const item: MenuDTO = {
      name: selectedItem!.name,
      price: selectedItem!.price,
      type: selectedItem!.type,
      placeId: selectedItem!.place,
    };
    const response = await putMenu(item, selectedItem!.id);
    closeModal('edit_item_modal');
    setActiveModal(null);
    setSelectedItem(response);
    loadMenu();
  }, [loadMenu, closeModal, selectedItem]);

  const onClickCloseEditMenuModal = useCallback(() => {
    closeModal('edit_item_modal');
    setActiveModal(null);
    setSelectedItem(null);
  }, [closeModal]);

  const onClickDisplayCreateMenuModal = useCallback(
    (modalId: string) => {
      displayModal(modalId);
      setActiveModal(null);
      setNewItem(undefined);
    },
    [displayModal],
  );

  const onClickSaveCreateMenuModal = useCallback(
    async (placeId: string, type: FoodType) => {
      if (!newItem?.name || !newItem.price) return;

      const item: MenuDTO = {
        name: newItem.name,
        price: newItem.price,
        placeId,
        type,
      };
      setNewItem(undefined);
      await postMenu(item);

      closeModal(type === FoodType.FOOD ? 'new_food_modal' : 'new_drink_modal');
      await loadMenu();
    },
    [loadMenu, newItem, closeModal],
  );

  const onClickCancelCreateModal = useCallback(
    async (modalId: string) => {
      setNewItem(undefined);

      closeModal(modalId);
    },
    [closeModal],
  );

  const data = useMemo(
    () => ({
      activeModal,
      selectedItem,
      setSelectedItem,
      newItem,
      setNewItem,
    }),
    [activeModal, selectedItem, newItem],
  );

  useEffect(() => {
    if (activeModal) {
      displayModal(activeModal);
    }
  }, [activeModal, displayModal]);

  const callback = useMemo(
    () => ({
      onClickDisplayCreateModal: onClickDisplayCreateMenuModal,
      onClickCancelModal: closeModal,
      onClickDeleteMenuItem,
      onClickSaveCreateModal: onClickSaveCreateMenuModal,
      onClickConfirmDelete: onClickConfirmDeleteMenuModal,
      onClickConfirmEdit: onClickConfirmEditMenuModal,
      displayEditModal: displayEditPlaceModal,
      onClickOpenEditModal: onClickOpenEditMenuModal,
      onClickCloseEditModal: onClickCloseEditMenuModal,
      onClickCancelCreateModal,
    }),
    [
      onClickDisplayCreateMenuModal,
      closeModal,
      onClickDeleteMenuItem,
      onClickSaveCreateMenuModal,
      onClickConfirmDeleteMenuModal,
      onClickConfirmEditMenuModal,
      displayEditPlaceModal,
      onClickOpenEditMenuModal,
      onClickCloseEditMenuModal,
      onClickCancelCreateModal,
    ],
  );

  return { data, callback };
};

export default useModal;
