'use client';

import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';
// Usar clsx para mostrar opções de administrador e usuário logado?
import clsx from 'clsx';


export function Navbar({ isLogged, isAdmin}: {isLogged: boolean, isAdmin: boolean}) {
  const links = [
    { name: 'Explorar', href: '/explore',display: true},
    { name: 'Mapa', href: '/map',display: true},
    { name: 'Perfil', href: '/profile',display: isLogged},
    { name: 'Incluir café', href: '/new-place', display: isAdmin},
  ];

  console.log(isAdmin, isLogged);
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        oTravel
      </div>
      <div className={styles['centered-container']}>
        {links.map(link => {
          return (
            <Link 
              key={link.name}
              href={link.href} 
              className={clsx({
                [styles.link]: true,
                [styles.active]: pathname === link.href,
                [styles.hidden]: link.display === false
              })}
            >{link.name}</Link>
          )
        })}
      </div>
      {isLogged ? (
        <Link className={styles['link-logout']} href={'/login'}>Sair
          <svg width="32" height="32" viewBox="0 0 256 256"><path d="M141.66,133.66l-40,40a8,8,0,0,1-11.32-11.32L116.69,136H24a8,8,0,0,1,0-16h92.69L90.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,141.66,133.66ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"></path></svg>
        </Link>
      ) : (
        <Link className={styles.link} href={'/login'}>Acesse seu perfil
        <svg width="32" height="32" viewBox="0 0 256 256"><path d="M141.66,133.66l-40,40a8,8,0,0,1-11.32-11.32L116.69,136H24a8,8,0,0,1,0-16h92.69L90.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,141.66,133.66ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"></path></svg>
      </Link>
      )}

    </div>
  )
}
