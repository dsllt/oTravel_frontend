import Image from "next/image"
import styles from "./page.module.css"

export default function Page() {
  return(
    <div className={styles.container}>
      <div className={styles.image}></div>
      
      <div className={styles.text}>
        <div className={styles.header}>
          <h1>Boas vindas!</h1>
          <span>Faça seu login ou acesse como visitante.</span>
        </div>

        <button>
        <Image src="/google-logo.svg" alt="Google Logo"  width={50} height={50}/> Entrar com o Google
        </button>
        <button>
        <Image src="/visitor-logo.svg" alt="Google Logo"  width={50} height={50}/> Entrar como visitante
        </button>
      </div>
    </div>
  )
}
