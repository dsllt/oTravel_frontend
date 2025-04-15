import { useState } from 'react';
import { Menu } from '../../domain/models/menu';

type MenuModalProps = {
  newItem?: boolean;
  item?: Menu;
  id: string;
  onClickCancel: (modalId: string) => void;
  onClickConfirmEdit?: (item: Menu) => void;
  onClickConfirmSave?: (item: Menu) => void;
};

export function EditMenuModal({
  id,
  newItem,
  item,
  onClickCancel,
  onClickConfirmEdit,
}: MenuModalProps) {
  const [itemName, setItemName] = useState(item?.name);
  const [price, setPrice] = useState(item?.price);

  const handleClickSave = () => {
    if (item && onClickConfirmEdit) onClickConfirmEdit(item!);
    setItemName(undefined);
    setPrice(undefined);
  };

  const handleClickCancel = () => {
    onClickCancel(id);
    setItemName(undefined);
    setPrice(undefined);
  };

  return (
    <dialog id={id} className="modal">
      <div className="modal-box p-8">
        {newItem ? (
          <h3 className="font-bold text-lg">Inclua novo item</h3>
        ) : (
          <h3 className="font-bold text-lg">Edite o item</h3>
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
