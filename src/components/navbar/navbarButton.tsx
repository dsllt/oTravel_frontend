type NavbarButtonProps = {
  title: string;
  onClick: () => void;
};
export default function NavbarButton({ title, onClick }: NavbarButtonProps) {
  return (
    <div className="navbar-end">
      <button className="btn btn-ghost" onClick={onClick}>
        {title}
      </button>
    </div>
  );
}
