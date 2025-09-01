import { Link } from "react-router-dom";
function NavbarLogo({ className, imgClass }) {
  return (
    <>
      <div className={className}>
        <Link className="navbar-brand">
          <img className={imgClass} src="/images/logo.png" alt="brand-log" />
        </Link>
      </div>
    </>
  );
}

export default NavbarLogo;
