import Link from 'next/link';

export default function NavbarLogo() {
  return (
    <div className="navbar-start">
      <Link className="btn btn-ghost text-xl" href="/explore">
        OTravel
      </Link>
    </div>
  );
}
