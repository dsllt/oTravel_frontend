'use client';

import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';
// Usar clsx para mostrar opções de administrador e usuário logado?
import clsx from 'clsx';


export function Navbar({ isLogged, isAdmin }: { isLogged: boolean, isAdmin: boolean }) {
  const links = [
    { name: 'Explorar', href: '/explore', display: true },
    { name: 'Mapa', href: '/map', display: true },
    { name: 'Perfil', href: '/profile', display: isLogged },
    { name: 'Incluir café', href: '/new-place', display: isAdmin },
  ];


  const pathname = usePathname();
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl" href="/explore">OTravel</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/explore#search">Explorar</a></li>
          <li><a href="/map">Mapa</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  )
}
