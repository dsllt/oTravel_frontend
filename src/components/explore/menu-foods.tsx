import { MenuModal } from './menu-modal';
import { MenuDTO } from '../../domain/models/menu-dto';
import { Menu } from '../../domain/models/menu';
import React from 'react';
import { MenuList } from './menu-list';
import { DeleteMenuModal } from './delete-menu-modal';
import useModal from '../../containers/use-modal';
import MenuHeader from './menu-header';

type MenuFoodsProps = {
  onClickDisplayModal: (modalId: string) => void;
  onClickDeleteMenuItem: (itemId: string) => void;
  onClickCancelModal: (modalId: string) => void;
  onClickSaveModal: (item: MenuDTO, modalId: string) => void;
  foods: Menu[];
  placeId: string;
};

export default function MenuFoods({
  foods,
  onClickDeleteMenuItem,
  onClickDisplayModal,
  onClickCancelModal,
  onClickSaveModal,
  placeId,
}: MenuFoodsProps) {
  const canEdit = Boolean(localStorage.getItem('token'));

  const { modalToOpen, openModal, activeItem, setActiveItem } =
    useModal(onClickDisplayModal);

  const handleEdit = (food: Menu) => {
    setActiveItem({ id: food.id, name: food.name, price: Number(food.price) });
    openModal('edit_food_modal');
  };

  const handleDelete = (food: Menu) => {
    setActiveItem({ id: food.id, name: food.name, price: Number(food.price) });
    openModal('delete_food_modal');
  };

  const renderModal = () => {
    switch (modalToOpen) {
      case 'edit_food_modal':
        return (
          activeItem && (
            <MenuModal
              id="edit_food_modal"
              food
              placeId={placeId}
              currentItem={activeItem.name}
              currentPrice={activeItem.price}
              onClickCancel={onClickCancelModal}
              onClickSave={onClickSaveModal}
            />
          )
        );
      case 'delete_food_modal':
        return (
          activeItem && (
            <DeleteMenuModal
              id="delete_food_modal"
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
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          {renderModal()}
        </>
      ) : (
        <div className="mt-3">Sem comidas registradas</div>
      )}
    </div>
  );
}
