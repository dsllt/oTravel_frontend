import MenuDrinks from './menu-drinks';
import MenuFoods from './menu-foods';
import { MenuDTO } from '../../domain/models/menu-dto';

type MenuContainerProps = {
  menu: {
    id: string;
    item: string;
    price: number;
    menu_type: string;
    place_id: string;
  }[];
  placeId: string;
  onClickDisplayModal: (modalId: string) => void;
  onClickEditMenuItem: (itemId: string) => void;
  onClickDeleteMenuItem: (itemId: string) => void;
  onClickCancelModal: (modalId: string) => void;
  onClickSaveModal: (item: MenuDTO, modalId: string) => void;
};
export default function MenuContainer({
  menu,
  placeId,
  onClickDeleteMenuItem,
  onClickDisplayModal,
  onClickEditMenuItem,
  onClickCancelModal,
  onClickSaveModal,
}: MenuContainerProps) {
  const drinks =
    menu != null ? menu.filter((menu) => menu.menu_type === 'drink') : [];
  const foods =
    menu != null ? menu.filter((menu) => menu.menu_type === 'food') : [];

  return (
    <div className="w-full">
      <h1 className="font-bold text-xl font-dmSans mb-4">Menu</h1>
      <div className="flex gap-10 w-full justify-between">
        <MenuDrinks
          placeId={placeId}
          drinks={drinks}
          onClickDisplayModal={onClickDisplayModal}
          onClickCancelModal={onClickCancelModal}
          onClickSaveModal={onClickSaveModal}
          onClickEditMenuItem={onClickEditMenuItem}
          onClickDeleteMenuItem={onClickDeleteMenuItem}
        />
        <MenuFoods
          placeId={placeId}
          foods={foods}
          onClickDisplayModal={onClickDisplayModal}
          onClickCancelModal={onClickCancelModal}
          onClickSaveModal={onClickSaveModal}
          onClickEditMenuItem={onClickEditMenuItem}
          onClickDeleteMenuItem={onClickDeleteMenuItem}
        />
      </div>
    </div>
  );
}
