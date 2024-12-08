import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkType } from "./navbarLinks";

type NavbarLinkProps = {
  link: LinkType;
};

export default function NavbarLink({ link }: NavbarLinkProps) {
  const currentPath = usePathname();
  const isPathMatch = (path: string) => {
    return currentPath === path.split("#")[0];
  };
  return (
    <li key={link.name}>
      <Link
        href={link.href}
        className={
          isPathMatch(link.href) ? "font-bold text-zinc-50" : "text-zinc-400"
        }
      >
        {link.name}
      </Link>
    </li>
  );
}
