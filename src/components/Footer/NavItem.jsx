import { Link } from "react-router-dom";
function NavItem({ link_name, href }) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to={href}>
          {link_name}
        </Link>
      </li>
    </>
  );
}

export default NavItem;
