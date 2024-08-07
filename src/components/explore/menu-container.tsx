import { PlusIcon } from "@heroicons/react/24/outline";
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Menu } from '../../utils/type-definitions';

type MenuContainerProps = {
  menu: {
    id: string;
    item: string;
    price: number;
    menu_type: string;
    place_id: string;
  }[]
  setMenu: Dispatch<SetStateAction<Menu[]>>
}
export default function MenuContainer({ menu, setMenu }: MenuContainerProps) {
  const drinks = menu != null ? menu.filter(menu => menu.menu_type === 'drink') : [];
  const foods = menu != null ? menu.filter(menu => menu.menu_type === 'food') : [];

  const placeId = menu[0].place_id;

  function handleDisplayModal(id: string) {
    const modal = document.getElementById(id) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }

  return (<div className="flex gap-10 w-full justify-between">
    <div className="bg-base-300 p-4 rounded-lg w-1/2">
      <div className="flex justify-between items-center">
        <h1 className="mb-3 font-bold">Bebidas</h1>
        <button
          className="hover:bg-slate-700 p-1 rounded-lg mb-3"
          onClick={() => handleDisplayModal('new_drink_modal')}
        ><PlusIcon className="w-3 h-3 " /></button>
        <Modal drink placeId={placeId} setMenu={setMenu} />
      </div>
      {drinks.length > 0 ? (
        <table className="table">
          <tbody>
            {drinks.map((drink) => (
              <tr className="hover:bg-base-100" key={drink.id}>
                <td className="rounded-l-md capitalize">{drink.item}</td>
                <td className="rounded-r-md">
                  {drink.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="mt-3">Sem bebidas resgistradas</div>
      )}
    </div>
    <div className="bg-base-300 p-4 rounded-lg w-1/2">
      <div className="flex justify-between items-center">
        <h1 className="mb-3 font-bold">Comidas</h1>
        <button
          className="hover:bg-slate-700 p-1 rounded-lg mb-3"
          onClick={() => handleDisplayModal('new_food_modal')}
        ><PlusIcon className="w-3 h-3 " /></button>
        <Modal food placeId={placeId} setMenu={setMenu} />
      </div>
      {foods.length > 0 ? (
        <table className="table">
          <tbody>
            {foods.map((food) => (
              <tr className="hover:bg-base-100" key={food.id}>
                <td className="rounded-l-md capitalize">{food.item}</td>
                <td className="rounded-r-md">{food.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="mt-3">Sem comidas resgistradas</div>
      )}
    </div>
  </div>)
}

type ModalProps = {
  drink?: boolean;
  food?: boolean;
  setMenu: Dispatch<SetStateAction<Menu[]>>
  placeId: string;
};
function Modal({ drink, food, setMenu, placeId }: ModalProps) {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');

  function handleUpdateMenu(event: React.MouseEvent<HTMLButtonElement>) {
    console.log(item, price)
    const newItem: Menu = {
      id: "",
      item: item,
      price: Number(price),
      menu_type: drink ? 'drink' : 'food',
      place_id: placeId
    }

    setMenu(prevState => [...prevState, newItem])

    const elementId = drink ? 'new_drink_modal' : 'new_food_modal';
    const dialog = document.getElementById(elementId) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  }

  return (
    <dialog id={food ? 'new_food_modal' : 'new_drink_modal'} className="modal">
      <div className="modal-box p-8">
        {food ? (
          <h3 className="font-bold text-lg">Inclua uma nova comida</h3>
        ) : (
          <h3 className="font-bold text-lg">Inclua uma nova bebida</h3>
        )}
        <div className="flex flex-col mb-3 mt-6 gap-2">
          <label >Defina o nome item</label>
          <input
            type="text"
            placeholder="Item"
            className="input input-bordered"
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Defina o preço</label>
          <input
            type="text"
            placeholder="Preço"
            className="input input-bordered"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="modal-action flex justify-center">
          <button className="btn" onClick={handleUpdateMenu}>Salvar</button>
        </div>
      </div>
    </dialog>
  )
}