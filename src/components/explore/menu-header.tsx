import { PlusIcon } from '@heroicons/react/24/outline';
import { MenuModal } from './menu-modal';
import { MenuDTO } from '../../domain/models/menu-dto';

type MenuHeaderProps = {
  title: string;
  canEdit: boolean;
  placeId: string;
  onClickDisplayModal: (modalId: string) => void;
  onClickCancelModal: (modalId: string) => void;
  onClickSaveModal: (item: MenuDTO, modalId: string) => void;
};

const MenuHeader = ({
  title,
  canEdit,
  placeId,
  onClickCancelModal,
  onClickDisplayModal,
  onClickSaveModal,
}: MenuHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="mb-3 font-bold">{title}</h1>
      {canEdit && (
        <button
          className="hover:bg-slate-700 p-1 rounded-lg mb-3"
          onClick={() => onClickDisplayModal('new_food_modal')}
        >
          <PlusIcon className="w-3 h-3 " />
        </button>
      )}
      <MenuModal
        food
        placeId={placeId}
        id="new_food_modal"
        onClickCancel={onClickCancelModal}
        onClickSave={onClickSaveModal}
      />
    </div>
  );
};

export default MenuHeader;
