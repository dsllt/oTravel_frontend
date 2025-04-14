type DeleteMenuModalProps = {
  id: string;
  itemId: number;
  onClickCancel: (modalId: string) => void;
  onClickDeleteMenuItem: (itemId: number) => void;
};

export function DeleteMenuModal({
  id,
  onClickCancel,
  itemId,
  onClickDeleteMenuItem,
}: DeleteMenuModalProps) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box p-8">
        <h3 className="font-bold text-lg">
          Você tem certeza que quer excluir?
        </h3>

        <div className="modal-action flex justify-center">
          <button className="btn" onClick={() => onClickDeleteMenuItem(itemId)}>
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
