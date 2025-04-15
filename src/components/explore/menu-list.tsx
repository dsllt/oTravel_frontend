import React, { useEffect, useState } from 'react';
import { Pencil, Trash } from 'lucide-react';
import { Menu } from '../../domain/models/menu';
import { DeleteMenuModal } from './delete-menu-modal';
import { EditMenuModal } from './edit-menu-modal';

type MenuListProps = {
  itens: Menu[];
  canEdit: boolean;
  onClickDisplayModal: (modalId: string) => void;
  onClickCancelModal: (modalId: string) => void;
  onClickConfirmDelete: (food: Menu) => void;
  onClickConfirmEdit: (food: Menu) => void;
};

export function MenuList({
  itens,
  canEdit,
  onClickCancelModal,
  onClickDisplayModal,
  onClickConfirmDelete,
  onClickConfirmEdit,
}: MenuListProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<Menu | null>(null);

  const openModal = (modalId: string, item: Menu) => {
    setActiveModal(modalId);
    setSelectedItem(item);
  };

  useEffect(() => {
    if (activeModal) {
      onClickDisplayModal(activeModal);
    }
  }, [activeModal, onClickDisplayModal]);

  const closeModal = () => {
    if (activeModal) {
      onClickCancelModal(activeModal);
    }
    setActiveModal(null);
    setSelectedItem(null);
  };

  return (
    <>
      <table className="table">
        <tbody>
          {itens.map((item) => (
            <React.Fragment key={item.id}>
              <tr className="hover:bg-base-100" key={item.id}>
                <td className="rounded-l-md capitalize">{item.name}</td>
                <td>
                  {item.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </td>
                {canEdit && (
                  <>
                    <td className="w-3">
                      <Pencil
                        className="size-4 text-blue-600 hover:bg-gray-600 rounded-md cursor-pointer"
                        onClick={() => openModal('edit_item_modal', item)}
                      />
                    </td>
                    <td className="rounded-r-md w-3">
                      <Trash
                        className="size-4 text-red-300 hover:bg-gray-600 rounded-md cursor-pointer"
                        onClick={() => openModal('delete_item_modal', item)}
                      />
                    </td>
                  </>
                )}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {activeModal === 'delete_item_modal' && selectedItem && (
        <DeleteMenuModal
          id="delete_item_modal"
          item={selectedItem}
          onClickCancel={closeModal}
          onClickConfirmDelete={onClickConfirmDelete}
        />
      )}
      {activeModal === 'edit_item_modal' && selectedItem && (
        <EditMenuModal
          id="edit_item_modal"
          item={selectedItem}
          onClickCancel={closeModal}
          onClickConfirmEdit={onClickConfirmEdit}
        />
      )}
    </>
  );
}
