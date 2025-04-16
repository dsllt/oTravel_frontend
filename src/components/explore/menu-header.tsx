import { PlusIcon } from '@heroicons/react/24/outline';
import { CreateMenuModal } from './create-menu-modal';
import { Dispatch, SetStateAction } from 'react';
import { NewItem } from '../../containers/use-modal';

type MenuHeaderProps = {
  title: string;
  canEdit: boolean;
  placeId: string;
  onClickCancelModal: (modalId: string) => void;
  onClickSaveCreateModal: (placeId: string, food: boolean) => void;
  newItem: NewItem | undefined;
  setNewItem: Dispatch<SetStateAction<NewItem | undefined>>;
  onClickDisplayModal: (modalId: string) => void;
};

const MenuHeader = ({
  title,
  canEdit,
  placeId,
  onClickDisplayModal,
  onClickCancelModal,
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
          onClick={() => onClickDisplayModal('new_item_modal')}
        >
          <PlusIcon className="w-3 h-3 " />
        </button>
      )}
      <CreateMenuModal
        placeId={placeId}
        onClickCancelModal={onClickCancelModal}
        onClickSaveCreateModal={onClickSaveCreateModal}
        newItem={newItem}
        setNewItem={setNewItem}
      />
    </div>
  );
};

export default MenuHeader;
