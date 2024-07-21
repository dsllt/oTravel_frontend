'use client'
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

type NavbarProps = {
  isLogged: boolean;
  isAdmin: boolean;
};

export function Navbar({ isLogged, isAdmin }: NavbarProps) {
  const links = [
    { name: 'Explorar', href: '/explore', display: true },
    { name: 'Mapa', href: '/map', display: true },
    { name: 'Incluir café', href: '/new-place', display: isAdmin },
  ];

  const currentPath = usePathname();
  const isPathMatch = (path: string) => {
    return currentPath === path.split('#')[0];
  };

  const { setDisplayLogin, setDisplayProfile } = useContext(UserContext);


  return (
    <div className="navbar bg-zinc-900 h-16">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl" href="/explore">OTravel</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map(link => {
            return (
              link.display && <li key={link.name}><a href={link.href} className={isPathMatch(link.href) ? 'font-bold text-zinc-50' : 'text-zinc-400'}>{link.name}</a></li>
            )
          })}
        </ul>
      </div>
      {!isLogged ? (
        <div className="navbar-end">
          <button className="btn btn-ghost" onClick={() => setDisplayLogin(true)}>Login</button>
        </div>
      ) : (
        <div className="navbar-end">
          <button className="btn btn-ghost" onClick={() => setDisplayProfile(true)}>Menu</button>
        </div>
      )}

    </div>
  )
}
