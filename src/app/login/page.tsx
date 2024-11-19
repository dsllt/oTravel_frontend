'use client'
import Image from 'next/image'

export default function Page() {
  function handleGoogleLogin() {
    console.log('Google login')
  }

  function handleEmailLogin() {
    console.log('Email login')
  }

  function handleVisitorLogin() {
    console.log('Visitor login')
  }

  return (
    <div className="flex gap-20 m-12 justify-center items-center h-full">
      <div
        className="h-[80vh] w-[50vw] flex rounded-lg bg-center bg-no-repeat bg-cover opacity-60"
        style={{
          backgroundImage: `url('assets/images/login-background.jpg')`,
        }}
      ></div>

      <div className="flex flex-col items-center justify-center gap-6 w-[40vw]">
        <div className="flex flex-col items-center justify-center font-dmSans">
          <h1 className="text-2xl font-bold mb-4">Boas vindas!</h1>
          <span>Faça seu login ou acesse como visitante.</span>
        </div>

        <button
          className="rounded-md flex items-center justify-center p-4 gap-8 cursor-pointer w-3/5 bg-neutral hover:opacity-50"
          onClick={handleGoogleLogin}
        >
          <Image
            src="assets/icons/google-icon.svg"
            alt="Google Logo"
            width={32}
            height={32}
          />{' '}
          Entrar com o Google
        </button>
        <button
          className="rounded-md flex items-center justify-center p-4 gap-8 cursor-pointer w-3/5 bg-neutral hover:opacity-50"
          onClick={handleEmailLogin}
        >
          <Image
            src="assets/icons/email-icon.svg"
            alt="Email Logo"
            width={32}
            height={32}
          />{' '}
          Entrar com email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <button
          className="rounded-md flex items-center justify-center p-4 gap-8 cursor-pointer w-3/5 bg-neutral hover:opacity-50"
          onClick={handleVisitorLogin}
        >
          <Image
            src="assets/icons/visitor-icon.svg"
            alt="Visitor Logo"
            width={32}
            height={32}
          />{' '}
          Entrar como visitante
        </button>
      </div>
    </div>
  )
}
