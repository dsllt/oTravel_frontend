import { useCallback, useEffect, useMemo, useState } from 'react';
import { MenuDTO } from '../domain/models/menu-dto';
import { FoodType, Menu } from '../domain/models/menu';

export type NewItem = {
  name: string | undefined;
  price: number | undefined;
};

const useModal = () => {
  // const [itemName, setItemName] = useState<string | undefined>('');
  // const [price, setPrice] = useState<number | undefined>(undefined);
  const [newItem, setNewItem] = useState<NewItem | undefined>(undefined);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<Menu | null>(null);

  const onClickCancelModal = useCallback((modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  }, []);

  const onClickDeleteMenuItem = useCallback((modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }, []);

  const onClickSaveCreateModal = useCallback(
    async (placeId: string, food: boolean) => {
      console.log('FINALMENTE CEGOU AQUI');
      if (!newItem?.name || !newItem.price) return;
      const item: MenuDTO = {
        name: newItem.name,
        price: newItem.price,
        placeId,
        type: food ? FoodType.FOOD : FoodType.DRINK,
      };
      // const response = await postMenu(item);
      // console.log(response);
      console.log(newItem, placeId, food);

      onClickCancelModal('new_item_modal');
      // setItemName(undefined);
      // setPrice(undefined);
    },
    [newItem, onClickCancelModal],
  );

  const onClickConfirmDelete = useCallback(
    async (item: Menu) => {
      console.log('confirm del', item);
      onClickCancelModal('delete_item_modal');
    },
    [onClickCancelModal],
  );

  const onClickConfirmEdit = useCallback(
    async (item: Menu) => {
      console.log('confirm edit', item);
      onClickCancelModal('edit_item_modal');
      setActiveModal(null);
      setSelectedItem(null);
    },
    [onClickCancelModal],
  );

  const displayEditModal = useCallback(() => {
    const modal = document.getElementById('place-edit') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }, []);

  const handleClickCancel = useCallback(
    (modalId: string) => {
      onClickCancelModal(modalId);
      setNewItem(undefined);
      // setItemName(undefined);
      // setPrice(undefined);
    },
    [onClickCancelModal],
  );

  const onClickOpenEditModal = useCallback((modalId: string, item: Menu) => {
    setActiveModal(modalId);
    setSelectedItem(item);
  }, []);

  const onClickCloseEditModal = useCallback(() => {
    if (activeModal) {
      onClickCancelModal(activeModal);
    }
    setActiveModal(null);
    setSelectedItem(null);
  }, [activeModal, onClickCancelModal]);

  const onClickDisplayModal = useCallback((modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }, []);

  const data = useMemo(
    () => ({
      // itemName,
      // setItemName,
      // price,
      // setPrice,
      activeModal,
      selectedItem,
      newItem,
      setNewItem,
    }),
    [activeModal, selectedItem, newItem],
  );

  useEffect(() => {
    if (activeModal) {
      onClickDisplayModal(activeModal);
    }
  }, [activeModal, onClickDisplayModal]);

  const callback = useMemo(
    () => ({
      onClickDisplayModal,
      onClickCancelModal,
      onClickDeleteMenuItem,
      onClickSaveCreateModal,
      onClickConfirmDelete,
      onClickConfirmEdit,
      handleClickCancel,
      displayEditModal,
      onClickOpenEditModal,
      onClickCloseEditModal,
    }),
    [
      onClickDisplayModal,
      onClickCancelModal,
      onClickDeleteMenuItem,
      onClickSaveCreateModal,
      onClickConfirmDelete,
      onClickConfirmEdit,
      handleClickCancel,
      displayEditModal,
      onClickOpenEditModal,
      onClickCloseEditModal,
    ],
  );

  return { data, callback };
};

export default useModal;
