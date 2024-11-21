'use client'
import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { LoginModalButton } from './login-modal-button'
import LoginModalInputs from './loginModalInputs'
import { login, register } from '@lib/data'
import RegisterModalInputs from './registerModalInputs'
type LoginModalProps = {
  onClickCloseModal: () => void
}

export function LoginModal({ onClickCloseModal }: LoginModalProps) {
  const [displayLoginInputs, setDisplayLoginInputs] = useState(false)
  const [displayRegisterInputs, setDisplayRegisterInputs] = useState(false)

  async function handleLogin(formData: any) {
    const email = formData.get('email')
    const password = formData.get('password')
    const response = await login(email, password)
    console.log(response)
  }
  async function handleRegister(formData: any) {
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const password = formData.get('password')
    const response = await register(firstName, lastName, email, password)
    console.log(response)
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

          <div className="flex flex-col gap-8">
            <h1 className="text-3xl text-center">Olá!</h1>
            <p>Faça seu login ou acesse como visitante.</p>

            {!displayLoginInputs && (
              <div className="space-y-5">
                <LoginModalButton
                  onClickFn={() => setDisplayLoginInputs(true)}
                  text="Entrar com email"
                  imgSrc="assets/icons/email-icon.svg"
                  imgAlt="Email Logo"
                />
                <LoginModalButton
                  onClickFn={() => setDisplayLoginInputs(true)}
                  text="Entrar com o Google"
                  imgSrc="assets/icons/google-icon.svg"
                  imgAlt="Google Logo"
                />

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
                onClickLogin={handleLogin}
                onClickVoltar={() => setDisplayLoginInputs(false)}
              />
            )}
            {displayRegisterInputs && (
              <RegisterModalInputs
                onClickRegister={handleRegister}
                onClickVoltar={() => setDisplayLoginInputs(false)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
