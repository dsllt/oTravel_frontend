import { MenuDTO } from '../../domain/models/menu-dto';
import { Menu } from '../../domain/models/menu';
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
  onClickDisplayModal: (modalId: string) => void;
  onClickCancelModal: (modalId: string) => void;
  onClickSaveCreateModal: (placeId: string, food: boolean) => void;
  onClickConfirmDelete: (food: Menu) => void;
  onClickConfirmEdit: (food: Menu) => void;
  onClickOpenEditModal: (modalId: string, item: Menu) => void;
  onClickCloseEditModal: () => void;
};

export default function MenuFoods({
  foods,
  placeId,
  newItem,
  setNewItem,
  activeModal,
  selectedItem,
  onClickDisplayModal,
  onClickCancelModal,
  onClickConfirmDelete,
  onClickConfirmEdit,
  onClickSaveCreateModal,
  onClickCloseEditModal,
  onClickOpenEditModal,
}: MenuFoodsProps) {
  const canEdit = Boolean(localStorage.getItem('token'));

  return (
    <div className="bg-base-300 p-4 rounded-lg w-1/2">
      <MenuHeader
        title="Comidas"
        placeId={placeId}
        canEdit={canEdit}
        newItem={newItem}
        setNewItem={setNewItem}
        onClickDisplayModal={onClickDisplayModal}
        onClickSaveCreateModal={onClickSaveCreateModal}
        onClickCancelModal={onClickCancelModal}
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
            onClickConfirmEdit={onClickConfirmEdit}
          />
        </>
      ) : (
        <div className="mt-3">Sem comidas registradas</div>
      )}
    </div>
  );
}
