import { MenuDTO } from '../../domain/models/menu-dto';
import { Menu } from '../../domain/models/menu';
import React from 'react';
import { MenuList } from './menu-list';
import MenuHeader from './menu-header';

type MenuFoodsProps = {
  onClickDisplayModal: (modalId: string) => void;
  onClickSaveModal: (item: MenuDTO) => void;
  onClickCancelModal: (modalId: string) => void;
  onClickConfirmDelete: (food: Menu) => void;
  onClickConfirmEdit: (food: Menu) => void;
  foods: Menu[];
  placeId: string;
};

export default function MenuFoods({
  foods,
  onClickDisplayModal,
  onClickCancelModal,
  onClickSaveModal,
  onClickConfirmDelete,
  onClickConfirmEdit,
  placeId,
}: MenuFoodsProps) {
  const canEdit = Boolean(localStorage.getItem('token'));

  return (
    <div className="bg-base-300 p-4 rounded-lg w-1/2">
      <MenuHeader
        title="Comidas"
        placeId={placeId}
        canEdit={canEdit}
        onClickCancelModal={onClickCancelModal}
        onClickDisplayModal={onClickDisplayModal}
        onClickSaveModal={onClickSaveModal}
      />
      {foods.length > 0 ? (
        <>
          <MenuList
            itens={foods}
            canEdit={canEdit}
            onClickDisplayModal={onClickDisplayModal}
            onClickCancelModal={onClickCancelModal}
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
