import { useEffect, useState } from "react";
import Navbarlogo from "./NavbarLogo";
import TopHeader from "./TopHeader";
import HeaderContact from "./HeaderContact";
import MainNav from "./MainNav";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function isOpen() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className={`main-header ${isSticky ? "sticky" : ""}`}>
      {/* Top Bar */}
      <TopHeader />
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm ">
        <div className="container d-flex justify-content-between align-items-center">
          {/* LEFT: Logo */}
          <div className="header-left min-w-full d-flex align-items-center">
            <Navbarlogo className="logo_section mw-25" />
          </div>
          {/* CENTER: Navigation */}
          <div
            className={`collapse navbar-collapse main_menu justify-content-center`}
          >
            <MainNav
              ulClassName={"navbar-nav navbar-nav-scroll d-none d-md-flex"}
              liClassName={"nav-item"}
              onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
            />
          </div>

          {/* RIGHT: Contact Info */}
          <HeaderContact isMenuOpen={isMenuOpen} isOpen={isOpen} />
        </div>
      </nav>{" "}
      {isMenuOpen && (
        <MainNav
          linkClass={"nav-link border-bottom py-2 px-3"}
          ulClassName={"mobile_menu list-unstyled mt-2 "}
          liClassName={"nav-item d-lg-none d-md-none "}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </header>
  );
}

export default Header;
