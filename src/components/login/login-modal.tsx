"use client";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { X } from "lucide-react";
import { LoginModalButton } from "./login-modal-button";

export function LoginModal() {
  const { displayLogin, setDisplayLogin } = useContext(UserContext);
  const [displayLoginInputs, setDisplayLoginInputs] = useState(false);

  return (
    <>
      {displayLogin && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-end z-50 h-full">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5 h-full">
            <div className="w-full flex justify-end items-end">
              <button onClick={() => setDisplayLogin(false)}>
                <X className="size-5 text-zinc-400" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              <h1 className="text-3xl text-center">Olá!</h1>
              <p>Faça seu login ou acesse como visitante.</p>

              {!displayLoginInputs && (
                <div className="space-y-5">
                  <LoginModalButton
                    onClickFn={() => setDisplayLoginInputs(true)}
                    text="Entrar com email"
                    imgSrc="/assets/icons/email-icon.svg"
                    imgAlt="Email Logo"
                  />
                  <LoginModalButton
                    onClickFn={() => setDisplayLoginInputs(true)}
                    text="Entrar com o Google"
                    imgSrc="/assets/icons/google-icon.svg"
                    imgAlt="Google Logo"
                  />
                  <LoginModalButton
                    onClickFn={() => setDisplayLogin(false)}
                    text="Continuar como visitante"
                    imgSrc="/assets/icons/visitor-icon.svg"
                    imgAlt="Visitor Logo"
                  />
                </div>
              )}

              {displayLoginInputs && (
                <div className="space-y-4 flex flex-col">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-primary"
                  />
                  <input
                    type="password"
                    placeholder="Senha"
                    className="input input-primary"
                  />
                  <button className="btn btn-primary">Entrar</button>
                  <button
                    className="btn btn-ghost"
                    onClick={() => setDisplayLoginInputs(false)}
                  >
                    Voltar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
