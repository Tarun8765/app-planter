import navData from "../data/navData.json";
import NavItem from "./NavItem";
function FooterNavLinks() {
  return (
    <div className="row">
      <div className="col-md-12">
        <ul className="nav justify-content-center footer_links">
          {navData?.footerNav?.map((item, index) => (
            <NavItem key={index} link_name={item.text} href={item.href} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterNavLinks;
