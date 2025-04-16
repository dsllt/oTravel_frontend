import React, { useEffect, useState } from 'react';
import { Pencil, Trash } from 'lucide-react';
import { Menu } from '../../domain/models/menu';
import { DeleteMenuModal } from './delete-menu-modal';
import { EditMenuModal } from './edit-menu-modal';

type MenuListProps = {
  itens: Menu[];
  canEdit: boolean;
  activeModal: string | null;
  selectedItem: Menu | null;
  onClickConfirmDelete: (food: Menu) => void;
  onClickConfirmEdit: (food: Menu) => void;
  onClickOpenEditModal: (modalId: string, item: Menu) => void;
  onClickCloseEditModal: () => void;
};

export function MenuList({
  itens,
  canEdit,
  activeModal,
  selectedItem,
  onClickConfirmDelete,
  onClickConfirmEdit,
  onClickOpenEditModal,
  onClickCloseEditModal,
}: MenuListProps) {
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
                        onClick={() =>
                          onClickOpenEditModal('edit_item_modal', item)
                        }
                      />
                    </td>
                    <td className="rounded-r-md w-3">
                      <Trash
                        className="size-4 text-red-300 hover:bg-gray-600 rounded-md cursor-pointer"
                        onClick={() =>
                          onClickOpenEditModal('delete_item_modal', item)
                        }
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
          onClickCancel={onClickCloseEditModal}
          onClickConfirmDelete={onClickConfirmDelete}
        />
      )}
      {activeModal === 'edit_item_modal' && selectedItem && (
        <EditMenuModal
          id="edit_item_modal"
          item={selectedItem}
          onClickCancel={onClickCloseEditModal}
          onClickConfirmEdit={onClickConfirmEdit}
        />
      )}
    </>
  );
}
