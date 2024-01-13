'use client';

import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';
// Usar clsx para mostrar opções de administrador e usuário logado?
import clsx from 'clsx';

const links = [
  { name: 'Explorar', href: '/',},
  { name: 'Mapa', href: '/map',},
  { name: 'Incluir café', href: '/new-coffee' },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <Image src="/logo.svg" alt="" width={120} height={30} />
      <div className={styles['centered-container']}>
        {links.map(link => {
          return (
            <Link 
              key={link.name}
              href={link.href} 
              className={clsx({
                [styles.link]: true,
                [styles.active]: pathname === link.href
              })}
            >{link.name}</Link>
          )
        })}
      </div>
      <Link href={'/login'}>Login</Link>
    </div>
  )
}
