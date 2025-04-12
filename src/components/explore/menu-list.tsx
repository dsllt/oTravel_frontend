import React from 'react';
import { DeleteMenuModal } from './delete-menu-modal';
import { MenuModal } from './menu-modal';
import { Pencil, Trash } from 'lucide-react';
import { Menu } from '../../domain/models/menu';

type MenuListProps = {
  itens: Menu[];
  canEdit: boolean;
  onEdit: (food: Menu) => void;
  onDelete: (food: Menu) => void;
};

export function MenuList({ itens, canEdit, onDelete, onEdit }: MenuListProps) {
  return (
    <table className="table">
      <tbody>
        {itens.map((item) => (
          <React.Fragment key={item.id}>
            <tr className="hover:bg-base-100" key={item.id}>
              <td className="rounded-l-md capitalize">{item.name}</td>
              <td className="rounded-r-md">
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
                      onClick={() => onEdit(item)}
                    />
                  </td>
                  <td className="rounded-r-md w-3">
                    <Trash
                      className="size-4 text-red-300 hover:bg-gray-600 rounded-md cursor-pointer"
                      onClick={() => {
                        onDelete(item);
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
  );
}
