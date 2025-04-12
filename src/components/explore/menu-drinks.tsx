import { MenuModal } from './menu-modal';
import { Pencil, Trash } from 'lucide-react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { MenuDTO } from '../../domain/models/menu-dto';
import { Menu } from '../../domain/models/menu';
import React from 'react';

type MenuDrinksProps = {
  onClickDisplayModal: (modalId: string) => void;
  onClickCancelModal: (modalId: string) => void;
  onClickEditMenuItem: (itemId: string) => void;
  onClickDeleteMenuItem: (itemId: string) => void;
  onClickSaveModal: (item: MenuDTO, modalId: string) => void;
  drinks: Menu[];
  placeId: string;
};

export default function MenuDrinks({
  drinks,
  onClickDeleteMenuItem,
  onClickCancelModal,
  onClickDisplayModal,
  onClickEditMenuItem,
  onClickSaveModal,
  placeId,
}: MenuDrinksProps) {
  const token = localStorage.getItem('token');
  const canEdit = token ? true : false;
  return (
    <div className="bg-base-300 p-4 rounded-lg w-1/2">
      <div className="flex justify-between items-center">
        <h1 className="mb-3 font-bold">Bebidas</h1>
        {canEdit && (
          <button
            className="hover:bg-slate-700 p-1 rounded-lg mb-3"
            onClick={() => onClickDisplayModal('new_drink_modal')}
          >
            <PlusIcon className="w-3 h-3 " />
          </button>
        )}
        <MenuModal
          drink
          placeId={placeId}
          currentItem=""
          id="new_drink_modal"
          onClickCancel={onClickCancelModal}
          onClickSave={onClickSaveModal}
        />
      </div>
      {drinks.length > 0 ? (
        <table className="table">
          <tbody>
            {drinks.map((drink) => (
              <React.Fragment key={drink.id}>
                <tr className="hover:bg-base-100" key={drink.id}>
                  <td className="rounded-l-md capitalize">{drink.name}</td>
                  <td className="">
                    {drink.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </td>
                  {canEdit && (
                    <>
                      <td className="w-3">
                        <Pencil
                          className="size-4 text-blue-600 hover:bg-gray-600 rounded-md cursor-pointer"
                          onClick={() => {
                            onClickEditMenuItem(drink.id);
                          }}
                        />
                      </td>
                      <td className="rounded-r-md w-3">
                        <Trash
                          className="size-4 text-red-300 hover:bg-gray-600 rounded-md cursor-pointer"
                          onClick={() => {
                            onClickDeleteMenuItem(drink.id);
                          }}
                        />
                      </td>
                    </>
                  )}
                </tr>
                <MenuModal
                  id={drink.id}
                  placeId={placeId}
                  currentPrice={Number(drink.price)}
                  currentItem={drink.name}
                  onClickCancel={onClickCancelModal}
                  onClickSave={onClickSaveModal}
                />
              </React.Fragment>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="mt-3">Sem bebidas registradas</div>
      )}
    </div>
  );
}
