import { Dispatch, SetStateAction } from 'react';
import { NewItem } from '../../containers/use-modal';
import { FoodType } from '../../domain/models/menu';

export type CreateMenuModalId = 'new_drink_modal' | 'new_food_modal';

type CreateMenuModalProps = {
  id: CreateMenuModalId;
  type: FoodType;
  placeId: string;
  onClickCancelCreateModal: (modalId: CreateMenuModalId) => void;
  onClickSaveCreateModal: (placeId: string, type: FoodType) => void;
  newItem: NewItem | undefined;
  setNewItem: Dispatch<SetStateAction<NewItem | undefined>>;
};

export function CreateMenuModal({
  id,
  type,
  placeId,
  onClickCancelCreateModal,
  onClickSaveCreateModal,
  newItem,
  setNewItem,
}: CreateMenuModalProps) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box p-8">
        {type === FoodType.FOOD ? (
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
            value={newItem?.name || ''}
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
            value={newItem?.price || ''}
            onChange={(e) =>
              setNewItem({ name: newItem?.name, price: Number(e.target.value) })
            }
          />
        </div>
        <div className="modal-action flex justify-center">
          <button
            className="btn"
            onClick={() => onClickSaveCreateModal(placeId, type)}
          >
            Salvar
          </button>
          <button
            className="btn btn-outline btn-error"
            onClick={() =>
              onClickCancelCreateModal(
                type === FoodType.FOOD ? 'new_food_modal' : 'new_drink_modal',
              )
            }
          >
            Cancelar
          </button>
        </div>
      </div>
    </dialog>
  );
}
