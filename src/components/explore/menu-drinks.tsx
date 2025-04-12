import { MenuModal } from './menu-modal';
import { Pencil, Trash } from 'lucide-react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { MenuDTO } from '../../domain/models/menu-dto';
import { Menu } from '../../domain/models/menu';
import React from 'react';
import useModal from '../../containers/use-modal';
import MenuHeader from './menu-header';
import { MenuList } from './menu-list';
import { DeleteMenuModal } from './delete-menu-modal';

type MenuDrinksProps = {
  onClickDisplayModal: (modalId: string) => void;
  onClickCancelModal: (modalId: string) => void;
  onClickDeleteMenuItem: (itemId: string) => void;
  onClickSaveModal: (item: MenuDTO, modalId: string) => void;
  drinks: Menu[];
  placeId: string;
};

export default function MenuDrinks({
  drinks,
  onClickDeleteMenuItem,
  onClickCancelModal,
  onClickDisplayModal,
  onClickSaveModal,
  placeId,
}: MenuDrinksProps) {
  const canEdit = Boolean(localStorage.getItem('token'));

  const { modalToOpen, openModal, activeItem, setActiveItem } =
    useModal(onClickDisplayModal);

  const handleEdit = (drink: Menu) => {
    setActiveItem({
      id: drink.id,
      name: drink.name,
      price: Number(drink.price),
    });
    openModal('edit_drink_modal');
  };

  const handleDelete = (drink: Menu) => {
    setActiveItem({
      id: drink.id,
      name: drink.name,
      price: Number(drink.price),
    });
    openModal('delete_drink_modal');
  };

  const renderModal = () => {
    switch (modalToOpen) {
      case 'edit_drink_modal':
        return (
          activeItem && (
            <MenuModal
              id="edit_drink_modal"
              drink
              placeId={placeId}
              currentItem={activeItem.name}
              currentPrice={activeItem.price}
              onClickCancel={onClickCancelModal}
              onClickSave={onClickSaveModal}
            />
          )
        );
      case 'delete_drink_modal':
        return (
          activeItem && (
            <DeleteMenuModal
              id="delete_drink_modal"
              itemId={activeItem.id}
              onClickCancel={onClickCancelModal}
              onClickDeleteMenuItem={onClickDeleteMenuItem}
            />
          )
        );
      default:
        return null;
    }
  };

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
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          {renderModal()}
        </>
      ) : (
        <div className="mt-3">Sem bebidas registradas</div>
      )}
    </div>
  );
}
