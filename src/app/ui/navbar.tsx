import Image from "next/image";

import styles from "./navbar.module.css";
import Link from "next/link";

export function Navbar() {

  return (
    <div className={styles.container}>
      <Image src="/logo.svg" alt="" width={120} height={30} />
      <div className={styles['centered-container']}>
        <Link href={'/'} className={styles.link}>Explorar</Link>
        <Link href={'/map'} className={styles.link}>Mapa</Link>
        <Link href={'/profile'} className={styles.link}>Perfil</Link>
        <Link href={'/new-coffee'} className={styles.link}>Incluir café</Link>
      </div>
      <Link href={'/login'}>Login</Link>
    </div>
  )
}
