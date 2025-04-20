import MenuDrinks from './menu-drinks';
import MenuFoods from './menu-foods';
import { FoodType, Menu } from '../../domain/models/menu';
import useModal, { NewItem } from '../../containers/use-modal';
import { Dispatch, SetStateAction } from 'react';

type MenuContainerProps = {
  drinks: Menu[];
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
export default function MenuContainer({
  drinks,
  foods,
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
}: MenuContainerProps) {
  return (
    <div className="w-full">
      <h1 className="font-bold text-xl font-dmSans mb-4">Menu</h1>
      <div className="flex gap-10 w-full justify-between">
        <MenuDrinks
          placeId={placeId}
          drinks={drinks}
          newItem={newItem}
          setNewItem={setNewItem}
          activeModal={activeModal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          onClickDisplayCreateModal={onClickDisplayCreateModal}
          onClickCancelCreateModal={onClickCancelCreateModal}
          onClickSaveCreateModal={onClickSaveCreateModal}
          onClickConfirmDelete={onClickConfirmDelete}
          onClickSaveEditModal={onClickSaveEditModal}
          onClickCloseEditModal={onClickCloseEditModal}
          onClickOpenEditModal={onClickOpenEditModal}
        />
        <MenuFoods
          placeId={placeId}
          foods={foods}
          newItem={newItem}
          setNewItem={setNewItem}
          activeModal={activeModal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          onClickDisplayCreateModal={onClickDisplayCreateModal}
          onClickCancelCreateModal={onClickCancelCreateModal}
          onClickSaveCreateModal={onClickSaveCreateModal}
          onClickConfirmDelete={onClickConfirmDelete}
          onClickSaveEditModal={onClickSaveEditModal}
          onClickCloseEditModal={onClickCloseEditModal}
          onClickOpenEditModal={onClickOpenEditModal}
        />
      </div>
    </div>
  );
}
