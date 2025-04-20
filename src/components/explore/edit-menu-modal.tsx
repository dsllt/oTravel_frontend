import { Dispatch, SetStateAction, useState } from 'react';
import { Menu } from '../../domain/models/menu';

type MenuModalProps = {
  item: Menu;
  id: string;
  onClickSaveCancelModal: () => void;
  onClickSaveEditModal: () => void;
  setSelectedItem: Dispatch<SetStateAction<Menu | null>>;
};

export function EditMenuModal({
  id,
  item,
  onClickSaveCancelModal,
  onClickSaveEditModal,
  setSelectedItem,
}: MenuModalProps) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box p-8">
        <h3 className="font-bold text-lg">Edite o item</h3>
        <div className="flex flex-col mb-3 mt-6 gap-2">
          <label>Defina o nome item</label>
          <input
            type="text"
            placeholder="Item"
            className="input input-bordered"
            value={item.name}
            onChange={(e) =>
              setSelectedItem({
                name: e.target.value,
                price: Number(item?.price),
                id: item.id,
                place: item.place,
                type: item.type,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Defina o preço</label>
          <input
            type="text"
            placeholder="Preço"
            className="input input-bordered"
            value={item.price}
            onChange={(e) =>
              setSelectedItem({
                name: item.name,
                price: Number(e.target.value),
                id: item.id,
                place: item.place,
                type: item.type,
              })
            }
          />
        </div>
        <div className="modal-action flex justify-center">
          <button className="btn" onClick={() => onClickSaveEditModal()}>
            Salvar
          </button>
          <button
            className="btn btn-outline btn-error"
            onClick={() => onClickSaveCancelModal()}
          >
            Cancelar
          </button>
        </div>
      </div>
    </dialog>
  );
}
