import { PlusIcon } from '@heroicons/react/24/outline';
import { MenuDTO } from '../../domain/models/menu-dto';
import { CreateMenuModal } from './create-menu-modal';

type MenuHeaderProps = {
  title: string;
  canEdit: boolean;
  placeId: string;
  onClickDisplayModal: (modalId: string) => void;
  onClickCancelModal: (modalId: string) => void;
  onClickSaveModal: (item: MenuDTO) => void;
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
          onClick={() => onClickDisplayModal('new_item_modal')}
        >
          <PlusIcon className="w-3 h-3 " />
        </button>
      )}
      <CreateMenuModal
        modalId="new_item_modal"
        placeId={placeId}
        onClickCancel={onClickCancelModal}
        onClickConfirmSave={onClickSaveModal}
      />
    </div>
  );
};

export default MenuHeader;
