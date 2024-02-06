'use client'
import Image from "next/image"
import styles from "./page.module.css"

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
  
  return(
    <div className={styles.container}>
      <div className={styles.image}></div>
      
      <div className={styles.text}>
        <div className={styles.header}>
          <h1>Boas vindas!</h1>
          <span>Faça seu login ou acesse como visitante.</span>
        </div>

        <button className={styles['login-button']} onClick={handleGoogleLogin}>
          <Image src="/google-logo.svg" alt="Google Logo"  width={32} height={32}/> Entrar com o Google
        </button>
        <button className={styles['login-button']} onClick={handleEmailLogin}>
          <Image src="/email-icon.svg" alt="Email Logo"  width={32} height={32}/>    Entrar com email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <button className={styles['login-button']} onClick={handleVisitorLogin}>
          <Image src="/visitor-logo.svg" alt="Visitor Logo"  width={32} height={32}/> Entrar como visitante
        </button>
      </div>
    </div>
  )
}
