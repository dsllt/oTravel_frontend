import { useState } from 'react';
import { MenuDTO } from '../../domain/models/menu-dto';
import { FoodType } from '../../domain/models/menu';

type MenuModalProps = {
  drink?: boolean;
  food?: boolean;
  placeId: string;
  currentItem: string;
  currentPrice?: number;
  id: string;
  onClickCancel: (modalId: string) => void;
  onClickSave: (item: MenuDTO, modalId: string) => void;
};

export function MenuModal({
  id,
  drink,
  food,
  placeId,
  currentItem,
  currentPrice,
  onClickCancel,
  onClickSave,
}: MenuModalProps) {
  const [itemName, setItemName] = useState(currentItem);
  const [price, setPrice] = useState(currentPrice !== 0 ? currentPrice : '');

  const handleClickSave = () => {
    onClickSave(
      {
        name: itemName,
        price: Number(price),
        placeId,
        type: drink ? FoodType.DRINK : FoodType.FOOD,
      },
      id,
    );
    setItemName('');
    setPrice('');
  };

  const handleClickCancel = () => {
    onClickCancel(id);
    setItemName('');
    setPrice('');
  };

  return (
    <dialog id={id} className="modal">
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
            onChange={(e) => setPrice(e.target.value)}
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
