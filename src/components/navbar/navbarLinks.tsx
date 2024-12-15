import NavbarLink from './navbarLink';

export type LinkType = {
  name: string;
  href: string;
  display: boolean;
};

type NavbarLinksProps = {
  links: LinkType[];
};

export default function NavbarLinks({ links }: NavbarLinksProps) {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {links.map(
          (link) => link.display && <NavbarLink key={link.name} link={link} />,
        )}
      </ul>
    </div>
  );
}
