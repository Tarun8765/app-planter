import Navbarlogo from "../Header/NavbarLogo";
import ConpyRight from "./ConpyRight";
import FooterSocialLiks from "./FooterSocialLiks";
import FooterNavLinks from "./FooterNavLinks";
import FooterAddress from "./FooterAddress";

function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <Navbarlogo className={"footer_logo"} />
        <FooterAddress />
        <FooterNavLinks />
        <ConpyRight />
        <FooterSocialLiks />
      </div>
    </footer>
  );
}
export default Footer;
