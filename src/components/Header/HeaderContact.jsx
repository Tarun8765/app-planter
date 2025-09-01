import { Link } from "react-router-dom";

export default function HeaderContact({ isOpen }) {
  return (
    <div className="header-right d-flex align-items-center">
      <div className="header_icon me-2">
        <Link className="nav-link" to="tel:+91-8115457797">
          <i className="material-icons">phone_in_talk</i>
        </Link>
      </div>
      <div className="header_phone_content d-none d-lg-block ">
        <span>Have Any Questions?</span>
        <Link className="nav-link" to="tel:+91-8115457797">
          +91-8115457797
        </Link>
      </div>
      <button onClick={isOpen} className="mx-2 btn border d-lg-none d-md-none ">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  );
}
