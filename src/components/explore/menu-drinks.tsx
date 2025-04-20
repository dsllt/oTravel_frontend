import { FoodType, Menu } from '../../domain/models/menu';
import React, { Dispatch, SetStateAction } from 'react';
import MenuHeader from './menu-header';
import { MenuList } from './menu-list';
import { NewItem } from '../../containers/use-modal';

type MenuDrinksProps = {
  drinks: Menu[];
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

export default function MenuDrinks({
  drinks,
  placeId,
  newItem,
  setNewItem,
  activeModal,
  selectedItem,
  onClickDisplayCreateModal,
  onClickCancelCreateModal,
  onClickConfirmDelete,
  onClickSaveEditModal,
  onClickSaveCreateModal,
  onClickOpenEditModal,
  onClickCloseEditModal,
  setSelectedItem,
}: MenuDrinksProps) {
  const canEdit = Boolean(localStorage.getItem('token'));
  return (
    <div className="bg-base-300 p-4 rounded-lg w-1/2">
      <MenuHeader
        title="Bebidas"
        type={FoodType.DRINK}
        placeId={placeId}
        canEdit={canEdit}
        newItem={newItem}
        setNewItem={setNewItem}
        onClickDisplayCreateModal={onClickDisplayCreateModal}
        onClickSaveCreateModal={onClickSaveCreateModal}
        onClickCancelCreateModal={onClickCancelCreateModal}
      />
      {drinks.length > 0 ? (
        <>
          <MenuList
            itens={drinks}
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
        <div className="mt-3">Sem bebidas registradas</div>
      )}
    </div>
  );
}
