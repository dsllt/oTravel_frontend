import { MenuDTO } from '../../domain/models/menu-dto';
import { Menu } from '../../domain/models/menu';
import React, { ReactNode } from 'react';
import MenuHeader from './menu-header';
import { MenuList } from './menu-list';

type MenuDrinksProps = {
  onClickDisplayModal: (modalId: string) => void;
  onClickSaveModal: (item: MenuDTO, modalId: string) => void;
  onClickCancelModal: (modalId: string) => void;
  onClickEditMenuItem: (item: Menu) => void;
  onClickDeleteMenuItem: (itemId: number) => void;
  renderModal: (item: Menu) => ReactNode;
  drinks: Menu[];
  placeId: string;
  isLogged: boolean;
};

export default function MenuDrinks({
  drinks,
  onClickDeleteMenuItem,
  onClickDisplayModal,
  onClickCancelModal,
  onClickSaveModal,
  onClickEditMenuItem,
  placeId,
  isLogged,
  renderModal,
}: MenuDrinksProps) {
  return (
    <div className="bg-base-300 p-4 rounded-lg w-1/2">
      <MenuHeader
        title="Bebidas"
        placeId={placeId}
        canEdit={isLogged}
        onClickCancelModal={onClickCancelModal}
        onClickDisplayModal={onClickDisplayModal}
        onClickSaveModal={onClickSaveModal}
      />
      {drinks.length > 0 ? (
        <>
          <MenuList
            itens={drinks}
            canEdit={isLogged}
            onClickEditMenuItem={onClickEditMenuItem}
            onClickDeleteMenuItem={onClickDeleteMenuItem}
            renderModal={renderModal}
          />
        </>
      ) : (
        <div className="mt-3">Sem bebidas registradas</div>
      )}
    </div>
  );
}
