import { Menu } from '../../domain/models/menu';

type DeleteMenuModalProps = {
  id: string;
  item: Menu;
  onClickCancel: (modalId: string) => void;
  onClickConfirmDelete: (item: Menu) => void;
};

export function DeleteMenuModal({
  id,
  onClickCancel,
  item,
  onClickConfirmDelete,
}: DeleteMenuModalProps) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box p-8">
        <h3 className="font-bold text-lg">
          Você tem certeza que quer excluir?
        </h3>

        <div className="modal-action flex justify-center">
          <button className="btn" onClick={() => onClickConfirmDelete(item)}>
            Confirmar
          </button>
          <button
            className="btn btn-outline btn-error"
            onClick={() => onClickCancel(id)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </dialog>
  );
}
