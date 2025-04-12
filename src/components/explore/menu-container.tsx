import MenuDrinks from './menu-drinks';
import MenuFoods from './menu-foods';
import { MenuDTO } from '../../domain/models/menu-dto';
import { Menu } from '../../domain/models/menu';

type MenuContainerProps = {
  drinks: Menu[];
  foods: Menu[];
  placeId: string;
  onClickDisplayModal: (modalId: string) => void;
  onClickEditMenuItem: (itemId: string) => void;
  onClickDeleteMenuItem: (itemId: string) => void;
  onClickCancelModal: (modalId: string) => void;
  onClickSaveModal: (item: MenuDTO, modalId: string) => void;
};
export default function MenuContainer({
  drinks,
  foods,
  placeId,
  onClickDeleteMenuItem,
  onClickDisplayModal,
  onClickEditMenuItem,
  onClickCancelModal,
  onClickSaveModal,
}: MenuContainerProps) {
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
