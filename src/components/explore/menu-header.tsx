import { PlusIcon } from '@heroicons/react/24/outline';
import { CreateMenuModal } from './create-menu-modal';
import { Dispatch, SetStateAction } from 'react';
import { NewItem } from '../../containers/use-modal';
import { FoodType } from '../../domain/models/menu';

type MenuHeaderProps = {
  title: string;
  canEdit: boolean;
  placeId: string;
  type: FoodType;
  onClickCancelCreateModal: (modalId: string) => void;
  onClickSaveCreateModal: (placeId: string, type: FoodType) => void;
  newItem: NewItem | undefined;
  setNewItem: Dispatch<SetStateAction<NewItem | undefined>>;
  onClickDisplayCreateModal: (modalId: string) => void;
};

const MenuHeader = ({
  title,
  canEdit,
  placeId,
  type,
  onClickDisplayCreateModal,
  onClickCancelCreateModal,
  onClickSaveCreateModal,
  newItem,
  setNewItem,
}: MenuHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="mb-3 font-bold">{title}</h1>
      {canEdit && (
        <button
          className="hover:bg-slate-700 p-1 rounded-lg mb-3"
          onClick={() =>
            onClickDisplayCreateModal(
              type === FoodType.FOOD ? 'new_food_modal' : 'new_drink_modal',
            )
          }
        >
          <PlusIcon className="w-3 h-3 " />
        </button>
      )}
      <CreateMenuModal
        id={type === FoodType.FOOD ? 'new_food_modal' : 'new_drink_modal'}
        type={type}
        placeId={placeId}
        onClickCancelCreateModal={onClickCancelCreateModal}
        onClickSaveCreateModal={onClickSaveCreateModal}
        newItem={newItem}
        setNewItem={setNewItem}
      />
    </div>
  );
};

export default MenuHeader;
