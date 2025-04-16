import MenuDrinks from './menu-drinks';
import MenuFoods from './menu-foods';
import { MenuDTO } from '../../domain/models/menu-dto';
import { Menu } from '../../domain/models/menu';
import useModal from '../../containers/use-modal';

type MenuContainerProps = {
  drinks: Menu[];
  foods: Menu[];
  placeId: string;
};
export default function MenuContainer({
  drinks,
  foods,
  placeId,
}: MenuContainerProps) {
  const { data, callback } = useModal();

  return (
    <div className="w-full">
      <h1 className="font-bold text-xl font-dmSans mb-4">Menu</h1>
      <div className="flex gap-10 w-full justify-between">
        <MenuDrinks
          placeId={placeId}
          drinks={drinks}
          newItem={data.newItem}
          setNewItem={data.setNewItem}
          activeModal={data.activeModal}
          selectedItem={data.selectedItem}
          onClickDisplayModal={callback.onClickDisplayModal}
          onClickCancelModal={callback.onClickCancelModal}
          onClickSaveCreateModal={callback.onClickSaveCreateModal}
          onClickConfirmDelete={callback.onClickConfirmDelete}
          onClickConfirmEdit={callback.onClickConfirmEdit}
          onClickCloseEditModal={callback.onClickCloseEditModal}
          onClickOpenEditModal={callback.onClickOpenEditModal}
        />
        <MenuFoods
          placeId={placeId}
          foods={foods}
          newItem={data.newItem}
          setNewItem={data.setNewItem}
          activeModal={data.activeModal}
          selectedItem={data.selectedItem}
          onClickDisplayModal={callback.onClickDisplayModal}
          onClickCancelModal={callback.onClickCancelModal}
          onClickSaveCreateModal={callback.onClickSaveCreateModal}
          onClickConfirmDelete={callback.onClickConfirmDelete}
          onClickConfirmEdit={callback.onClickConfirmEdit}
          onClickCloseEditModal={callback.onClickCloseEditModal}
          onClickOpenEditModal={callback.onClickOpenEditModal}
        />
      </div>
    </div>
  );
}
