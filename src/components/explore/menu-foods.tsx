import { MenuModal } from './menu-modal';
import { PlusIcon } from '@heroicons/react/24/outline';
import { MenuDTO } from '../../domain/models/menu-dto';
import { Menu } from '../../domain/models/menu';
import React, { useState } from 'react';
import { Pencil, Trash } from 'lucide-react';

type MenuFoodsProps = {
  onClickDisplayModal: (modalId: string) => void;
  onClickEditMenuItem: (itemId: string) => void;
  onClickDeleteMenuItem: (itemId: string) => void;
  onClickCancelModal: (modalId: string) => void;
  onClickSaveModal: (item: MenuDTO, modalId: string) => void;
  foods: Menu[];
  placeId: string;
};
export default function MenuFoods({
  foods,
  onClickDeleteMenuItem,
  onClickDisplayModal,
  onClickEditMenuItem,
  onClickCancelModal,
  onClickSaveModal,
  placeId,
}: MenuFoodsProps) {
  const token = localStorage.getItem('token');
  const canEdit = token ? true : false;

  const [activeModal, setActiveModal] = useState<{
    id: string;
    name: string;
    price: number;
  } | null>(null);

  const handleEdit = (food: Menu) => {
    console.log('COMIDA ', food);
    setActiveModal({
      id: food.id,
      name: food.name,
      price: Number(food.price),
    });
    onClickEditMenuItem(food.id);
  };
  return (
    <div className="bg-base-300 p-4 rounded-lg w-1/2">
      <div className="flex justify-between items-center">
        <h1 className="mb-3 font-bold">Comidas</h1>
        {canEdit && (
          <button
            className="hover:bg-slate-700 p-1 rounded-lg mb-3"
            onClick={() => onClickDisplayModal('new_food_modal')}
          >
            <PlusIcon className="w-3 h-3 " />
          </button>
        )}
        <MenuModal
          food
          placeId={placeId}
          currentItem=""
          id="new_food_modal"
          onClickCancel={onClickCancelModal}
          onClickSave={onClickSaveModal}
        />
      </div>
      {foods.length > 0 ? (
        <>
          <table className="table">
            <tbody>
              {foods.map((food) => (
                <React.Fragment key={food.id}>
                  <tr className="hover:bg-base-100" key={food.id}>
                    <td className="rounded-l-md capitalize">{food.name}</td>
                    <td className="rounded-r-md">
                      {food.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </td>
                    {canEdit && (
                      <>
                        <td className="w-3">
                          <Pencil
                            className="size-4 text-blue-600 hover:bg-gray-600 rounded-md cursor-pointer"
                            onClick={() => handleEdit(food)}
                          />
                        </td>
                        <td className="rounded-r-md w-3">
                          <Trash
                            className="size-4 text-red-300 hover:bg-gray-600 rounded-md cursor-pointer"
                            onClick={() => {
                              onClickDeleteMenuItem(food.id);
                            }}
                          />
                        </td>
                      </>
                    )}
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
          {activeModal && (
            <MenuModal
              id={activeModal.id}
              placeId={placeId}
              currentPrice={activeModal.price}
              currentItem={activeModal.name}
              onClickCancel={() => setActiveModal(null)}
              onClickSave={(item, modalId) => {
                onClickSaveModal(item, modalId);
                setActiveModal(null);
              }}
            />
          )}
        </>
      ) : (
        <div className="mt-3">Sem comidas registradas</div>
      )}
    </div>
  );
}
