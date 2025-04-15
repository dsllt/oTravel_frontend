import { useState } from 'react';
import { FoodType, Menu } from '../../domain/models/menu';
import { MenuDTO } from '../../domain/models/menu-dto';

type CreateMenuModalProps = {
  food?: boolean;
  modalId: string;
  placeId: string;
  onClickCancel: (modalId: string) => void;
  onClickConfirmSave: (item: MenuDTO) => void;
};

export function CreateMenuModal({
  food,
  modalId,
  placeId,
  onClickCancel,
  onClickConfirmSave,
}: CreateMenuModalProps) {
  const [itemName, setItemName] = useState<string | undefined>('');
  const [price, setPrice] = useState<number | undefined>(undefined);

  const handleClickSave = () => {
    if (!itemName || !price) return;
    const item: MenuDTO = {
      name: itemName,
      price,
      placeId,
      type: food ? FoodType.FOOD : FoodType.DRINK,
    };
    onClickConfirmSave(item);
    setItemName(undefined);
    setPrice(undefined);
  };

  const handleClickCancel = () => {
    onClickCancel(modalId);
    setItemName(undefined);
    setPrice(undefined);
  };

  return (
    <dialog id={modalId} className="modal">
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
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Defina o preço</label>
          <input
            type="text"
            placeholder="Preço"
            className="input input-bordered"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div className="modal-action flex justify-center">
          <button className="btn" onClick={() => handleClickSave()}>
            Salvar
          </button>
          <button
            className="btn btn-outline btn-error"
            onClick={() => handleClickCancel()}
          >
            Cancelar
          </button>
        </div>
      </div>
    </dialog>
  );
}
