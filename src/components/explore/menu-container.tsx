import { PlusIcon } from "@heroicons/react/24/outline";
import { Pencil, Trash } from "lucide-react";
import { MenuModal } from "./menu-modal";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

type MenuContainerProps = {
  menu: {
    id: string;
    item: string;
    price: number;
    menu_type: string;
    place_id: string;
  }[];
  placeId: string;
};
export default function MenuContainer({ menu, placeId }: MenuContainerProps) {
  const { setMenu } = useContext(UserContext);

  const drinks =
    menu != null ? menu.filter((menu) => menu.menu_type === "drink") : [];
  const foods =
    menu != null ? menu.filter((menu) => menu.menu_type === "food") : [];

  function handleDisplayModal(id: string) {
    const modal = document.getElementById(id) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }

  function handleEditMenu(id: string) {
    const modal = document.getElementById(id) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }

  function handleDeleteMenu(id: string) {
    setMenu((prevState) => prevState.filter((item) => item.id !== id));
  }

  return (
    <div className="flex gap-10 w-full justify-between">
      <div className="bg-base-300 p-4 rounded-lg w-1/2">
        <div className="flex justify-between items-center">
          <h1 className="mb-3 font-bold">Bebidas</h1>
          <button
            className="hover:bg-slate-700 p-1 rounded-lg mb-3"
            onClick={() => handleDisplayModal("new_drink_modal")}
          >
            <PlusIcon className="w-3 h-3 " />
          </button>
          <MenuModal
            drink
            placeId={placeId}
            currentItem=""
            id="new_drink_modal"
          />
        </div>
        {drinks.length > 0 ? (
          <table className="table">
            <tbody>
              {drinks.map((drink) => (
                <>
                  <tr className="hover:bg-base-100" key={drink.id}>
                    <td className="rounded-l-md capitalize">{drink.item}</td>
                    <td className="">
                      {drink.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td className="w-3">
                      <Pencil
                        className="size-4 text-blue-600 hover:bg-gray-600 rounded-md cursor-pointer"
                        onClick={() => {
                          handleEditMenu(drink.id);
                        }}
                      />
                    </td>
                    <td className="rounded-r-md w-3">
                      <Trash
                        className="size-4 text-red-300 hover:bg-gray-600 rounded-md cursor-pointer"
                        onClick={() => {
                          handleDeleteMenu(drink.id);
                        }}
                      />
                    </td>
                  </tr>
                  <MenuModal
                    id={drink.id}
                    placeId={placeId}
                    currentPrice={Number(drink.price)}
                    currentItem={drink.item}
                  />
                </>
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
            onClick={() => handleDisplayModal("new_food_modal")}
          >
            <PlusIcon className="w-3 h-3 " />
          </button>
          <MenuModal
            food
            placeId={placeId}
            currentItem=""
            id="new_food_modal"
          />
        </div>
        {foods.length > 0 ? (
          <table className="table">
            <tbody>
              {foods.map((food) => (
                <>
                  <tr className="hover:bg-base-100" key={food.id}>
                    <td className="rounded-l-md capitalize">{food.item}</td>
                    <td className="rounded-r-md">
                      {food.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  </tr>
                  <MenuModal
                    id={food.id}
                    placeId={placeId}
                    currentPrice={Number(food.price)}
                    currentItem={food.item}
                  />
                </>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="mt-3">Sem comidas resgistradas</div>
        )}
      </div>
    </div>
  );
}
