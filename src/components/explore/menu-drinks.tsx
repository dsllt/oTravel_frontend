import { MenuDTO } from '../../domain/models/menu-dto';
import { Menu } from '../../domain/models/menu';
import React from 'react';
import MenuHeader from './menu-header';
import { MenuList } from './menu-list';

type MenuDrinksProps = {
  onClickDisplayModal: (modalId: string) => void;
  onClickSaveModal: (item: MenuDTO, modalId: string) => void;
  onClickCancelModal: (modalId: string) => void;
  onClickConfirmDelete: (food: Menu) => void;
  onClickConfirmEdit: (food: Menu) => void;
  drinks: Menu[];
  placeId: string;
};

export default function MenuDrinks({
  drinks,
  onClickDisplayModal,
  onClickCancelModal,
  onClickSaveModal,
  onClickConfirmDelete,
  onClickConfirmEdit,
  placeId,
}: MenuDrinksProps) {
  const canEdit = Boolean(localStorage.getItem('token'));

  return (
    <div className="bg-base-300 p-4 rounded-lg w-1/2">
      <MenuHeader
        title="Bebidas"
        placeId={placeId}
        canEdit={canEdit}
        onClickCancelModal={onClickCancelModal}
        onClickDisplayModal={onClickDisplayModal}
        onClickSaveModal={onClickSaveModal}
      />
      {drinks.length > 0 ? (
        <>
          <MenuList
            itens={drinks}
            canEdit={canEdit}
            onClickDisplayModal={onClickDisplayModal}
            onClickCancelModal={onClickCancelModal}
            onClickConfirmDelete={onClickConfirmDelete}
            onClickConfirmEdit={onClickConfirmEdit}
          />
        </>
      ) : (
        <div className="mt-3">Sem bebidas registradas</div>
      )}
    </div>
  );
}
