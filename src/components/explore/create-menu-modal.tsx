import { Dispatch, SetStateAction } from 'react';
import { NewItem } from '../../containers/use-modal';

type CreateMenuModalProps = {
  food?: boolean;
  placeId: string;
  onClickCancelModal: (modalId: string) => void;
  onClickSaveCreateModal: (placeId: string, food: boolean) => void;
  newItem: NewItem | undefined;
  setNewItem: Dispatch<SetStateAction<NewItem | undefined>>;
};

export function CreateMenuModal({
  food,
  placeId,
  onClickCancelModal,
  onClickSaveCreateModal,
  newItem,
  setNewItem,
}: CreateMenuModalProps) {
  return (
    <dialog id="new_item_modal" className="modal">
      <div className="modal-box p-8">
        {food ? (
          <h3 className="font-bold text-lg">Inclua uma nova comida</h3>
        ) : (
          <h3 className="font-bold text-lg">Inclua uma nova bebida</h3>
        )}
        <div className="flex flex-col mb-3 mt-6 gap-2">
          <label>Defina o nome item</label>
          <input
            type="text"
            placeholder="Item"
            className="input input-bordered"
            value={newItem?.name}
            onChange={(e) =>
              setNewItem({ name: e.target.value, price: newItem?.price })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Defina o preço</label>
          <input
            type="text"
            placeholder="Preço"
            className="input input-bordered"
            value={newItem?.price}
            onChange={(e) =>
              setNewItem({ name: newItem?.name, price: Number(e.target.value) })
            }
          />
        </div>
        <div className="modal-action flex justify-center">
          <button
            className="btn"
            onClick={() => onClickSaveCreateModal(placeId, false)}
          >
            Salvar
          </button>
          <button
            className="btn btn-outline btn-error"
            onClick={() => onClickCancelModal('new_item_modal')}
          >
            Cancelar
          </button>
        </div>
      </div>
    </dialog>
  );
}
