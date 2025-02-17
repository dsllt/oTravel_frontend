type LoginModalInputs = {
  onClickLogin: (formData: any) => void;
  onClickVoltar: () => void;
  loginError: string;
};
export default function LoginModalInputs({
  onClickLogin,
  onClickVoltar,
  loginError,
}: LoginModalInputs) {
  return (
    <div>
      <form className="space-y-4 flex flex-col" action={onClickLogin}>
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
        <p>{loginError}</p>
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
