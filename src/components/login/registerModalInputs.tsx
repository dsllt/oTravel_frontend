type RegisterModalInputsProps = {
  onClickRegister: (formData: any) => void;
  onClickVoltar: () => void;
};
export default function RegisterModalInputs({
  onClickRegister,
  onClickVoltar,
}: RegisterModalInputsProps) {
  return (
    <div>
      <form className="space-y-4 flex flex-col" action={onClickRegister}>
        <input
          type="firstName"
          name="firstName"
          placeholder="Nome"
          className="input input-primary"
        />
        <input
          type="lastName"
          name="lastName"
          placeholder="Sobrenome"
          className="input input-primary"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-primary"
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="input input-primary"
        />
        <button className="btn btn-primary" type="submit">
          Entrar
        </button>
        <button className="btn btn-ghost" type="button" onClick={onClickVoltar}>
          Voltar
        </button>
      </form>
    </div>
  );
}
