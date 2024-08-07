import { PlusIcon } from "@heroicons/react/24/outline";

type MenuContainerProps = {
  menu: {
    id: string;
    item: string;
    price: number;
    menu_type: string;
    place_id: string;
  }[]
}
export default function MenuContainer({ menu }: MenuContainerProps) {
  const drinks = menu != null ? menu.filter(menu => menu.menu_type === 'drink') : [];
  const foods = menu != null ? menu.filter(menu => menu.menu_type === 'food') : [];

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
        <Modal drink />
      </div>
      {drinks.length > 0 ? (
        <table className="table">
          <tbody>
            {drinks.map((drink) => (
              <tr className="hover:bg-base-100" key={drink.id}>
                <td className="rounded-l-md">{drink.item}</td>
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
        <Modal food />
      </div>
      {foods.length > 0 ? (
        <table className="table">
          <tbody>
            {foods.map((food) => (
              <tr className="hover:bg-base-100" key={food.id}>
                <td className="rounded-l-md">{food.item}</td>
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
};
function Modal({ drink, food }: ModalProps) {
  function displayTitle() {
    if (food) {
      return <h3 className="font-bold text-lg">Inclua uma nova comida</h3>
    }
    if (drink) {
      return <h3 className="font-bold text-lg">Inclua uma nova bebida</h3>
    }
  }

  function defineId() {
    if (food) {
      return 'new_food_modal'
    }
    if (drink) {
      return 'new_drink_modal'
    }
  }

  return (
    <dialog id={defineId()} className="modal">
      <div className="modal-box">
        {displayTitle()}
        <div className="flex flex-col mb-3 mt-6">
          <label >Defina o nome item</label>
          <input type="text" placeholder="Item" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="flex flex-col">
          <label >Defina o preço</label>
          <input type="text" placeholder="Preço" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Salvar</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}