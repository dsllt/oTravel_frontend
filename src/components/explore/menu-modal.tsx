import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { Menu } from '../../domain/models/place';

type ModalProps = {
  drink?: boolean;
  food?: boolean;
  placeId: string;
  currentItem: string;
  currentPrice?: number;
  id: string;
};

export function MenuModal({
  id,
  drink,
  food,
  placeId,
  currentItem,
  currentPrice,
}: ModalProps) {
  const { setMenu, menu } = useContext(UserContext);

  const [item, setItem] = useState(currentItem);
  const [price, setPrice] = useState(currentPrice !== 0 ? currentPrice : '');
  const elementId = id;

  function handleUpdateMenu() {
    if (item !== '' || price !== '') {
      const menuItem = menu.find((item) => item.id === id);
      let newItem: Menu = {
        id: id,
        item: item,
        price: Number(price),
        menu_type: drink ? 'drink' : 'food',
        place_id: placeId,
      };
      if (menuItem) {
        newItem = {
          id: id,
          item: item,
          price: Number(price),
          menu_type: menuItem.menu_type,
          place_id: menuItem.place_id,
        };
        setMenu((prevState) =>
          prevState.map((item) => (item.id === id ? newItem : item)),
        );
      } else {
        setMenu((prevState) => [...prevState, newItem]);

        setItem('');
        setPrice('');
      }
    }

    const dialog = document.getElementById(elementId) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  }

  const handleCancel = () => {
    const dialog = document.getElementById(elementId) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
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
            value={item}
            onChange={(e) => setItem(e.target.value)}
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
          <button className="btn" onClick={handleUpdateMenu}>
            Salvar
          </button>
          <button className="btn btn-outline btn-error" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </dialog>
  );
}
