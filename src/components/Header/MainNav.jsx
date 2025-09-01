import { Link } from "react-router-dom";
import navData from "../data/navData.json";

export default function MainNav({
  ulClassName,
  onClick,
  liClassName,
  linkClass,
}) {
  return (
    <ul className={ulClassName}>
      {navData?.headerNav?.map((item, index) => {
        return (
          <li key={index} className={liClassName}>
            <Link
              className={linkClass}
              to={item.href}
              onClick={onClick ? onClick : ""}
            >
              {item.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
