'use client';
import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { LoginModalButton } from './login-modal-button';
import LoginModalInputs from './loginModalInputs';
import RegisterModalInputs from './registerModalInputs';
import { UserDTO } from '../../domain/models/user';

type LoginModalProps = {
  onClickCloseModal: () => void;
  onClickRegister: (formData: any) => Promise<UserDTO>;
  onClickLogin: (formData: any) => Promise<void>;
  loginError: string;
};

export function LoginModal({
  onClickCloseModal,
  onClickRegister,
  onClickLogin,
  loginError,
}: LoginModalProps) {
  const [displayLoginInputs, setDisplayLoginInputs] = useState(false);
  const [displayRegisterInputs, setDisplayRegisterInputs] = useState(false);

  async function handleRegister(formData: any) {
    const response = await onClickRegister(formData);
    if (response.firstName) {
      setDisplayRegisterInputs(false);
      setDisplayLoginInputs(true);
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/60 flex items-center justify-end z-50 h-full">
        <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5 h-full">
          <div className="w-full flex justify-end items-end">
            <button onClick={onClickCloseModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <div className="flex flex-col gap-8 w-80">
            <h1 className="text-3xl text-center">Olá!</h1>
            <p>Faça seu login ou acesse como visitante.</p>

            {!displayLoginInputs && !displayRegisterInputs && (
              <div className="space-y-5">
                <LoginModalButton
                  onClickFn={() => setDisplayLoginInputs(true)}
                  text="Entrar com email"
                  imgSrc="assets/icons/email-icon.svg"
                  imgAlt="Email Logo"
                />
                {/* <LoginModalButton
                  onClickFn={() => setDisplayLoginInputs(true)}
                  text="Entrar com o Google"
                  imgSrc="assets/icons/google-icon.svg"
                  imgAlt="Google Logo"
                /> */}
                <LoginModalButton
                  onClickFn={() => setDisplayRegisterInputs(true)}
                  text="Criar nova conta"
                  icon={<Plus className="text-orange-300" />}
                />

                <LoginModalButton
                  onClickFn={onClickCloseModal}
                  text="Continuar como visitante"
                  imgSrc="assets/icons/visitor-icon.svg"
                  imgAlt="Visitor Logo"
                />
              </div>
            )}

            {displayLoginInputs && (
              <LoginModalInputs
                onClickLogin={onClickLogin}
                onClickVoltar={() => setDisplayLoginInputs(false)}
                loginError={loginError}
              />
            )}
            {displayRegisterInputs && (
              <RegisterModalInputs
                onClickRegister={handleRegister}
                onClickVoltar={() => setDisplayRegisterInputs(false)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
