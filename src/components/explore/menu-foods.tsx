import { FoodType, Menu } from '../../domain/models/menu';
import React, { Dispatch, SetStateAction } from 'react';
import { MenuList } from './menu-list';
import MenuHeader from './menu-header';
import { NewItem } from '../../containers/use-modal';

type MenuFoodsProps = {
  foods: Menu[];
  placeId: string;
  newItem: NewItem | undefined;
  setNewItem: Dispatch<SetStateAction<NewItem | undefined>>;
  activeModal: string | null;
  selectedItem: Menu | null;
  onClickDisplayCreateModal: (modalId: string) => void;
  onClickCancelCreateModal: (modalId: string) => void;
  onClickSaveCreateModal: (placeId: string, type: FoodType) => void;
  onClickConfirmDelete: (food: Menu) => void;
  onClickSaveEditModal: () => void;
  onClickOpenEditModal: (modalId: string, item: Menu) => void;
  onClickCloseEditModal: () => void;
  setSelectedItem: Dispatch<SetStateAction<Menu | null>>;
};

export default function MenuFoods({
  foods,
  placeId,
  newItem,
  setNewItem,
  activeModal,
  selectedItem,
  setSelectedItem,
  onClickDisplayCreateModal,
  onClickCancelCreateModal,
  onClickConfirmDelete,
  onClickSaveEditModal,
  onClickSaveCreateModal,
  onClickCloseEditModal,
  onClickOpenEditModal,
}: MenuFoodsProps) {
  const canEdit = Boolean(localStorage.getItem('token'));

  return (
    <div className="bg-base-300 p-4 rounded-lg w-1/2">
      <MenuHeader
        title="Comidas"
        type={FoodType.FOOD}
        placeId={placeId}
        canEdit={canEdit}
        newItem={newItem}
        setNewItem={setNewItem}
        onClickDisplayCreateModal={onClickDisplayCreateModal}
        onClickSaveCreateModal={onClickSaveCreateModal}
        onClickCancelCreateModal={onClickCancelCreateModal}
      />
      {foods.length > 0 ? (
        <>
          <MenuList
            itens={foods}
            canEdit={canEdit}
            activeModal={activeModal}
            selectedItem={selectedItem}
            onClickCloseEditModal={onClickCloseEditModal}
            onClickOpenEditModal={onClickOpenEditModal}
            onClickConfirmDelete={onClickConfirmDelete}
            onClickSaveEditModal={onClickSaveEditModal}
            setSelectedItem={setSelectedItem}
          />
        </>
      ) : (
        <div className="mt-3">Sem comidas registradas</div>
      )}
    </div>
  );
}
