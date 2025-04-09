import { MenuModal } from './menu-modal';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Menu } from '../../domain/models/place';
import { MenuDTO } from '../../domain/models/menu-dto';

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
        <table className="table">
          <tbody>
            {foods.map((food) => (
              <>
                <tr className="hover:bg-base-100" key={food.id}>
                  <td className="rounded-l-md capitalize">{food.item}</td>
                  <td className="rounded-r-md">
                    {food.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </td>
                </tr>
                <MenuModal
                  id={food.id}
                  placeId={placeId}
                  currentPrice={Number(food.price)}
                  currentItem={food.item}
                  onClickCancel={onClickCancelModal}
                  onClickSave={onClickSaveModal}
                />
              </>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="mt-3">Sem comidas registradas</div>
      )}
    </div>
  );
}
