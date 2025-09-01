import footerData from "../data/footer.json";
import FooterContact from "./FooterContact";
function FooterAddress() {
  return (
    <div className="row">
      {footerData?.footerNavData?.map((item, index) => {
        return (
          <FooterContact
            key={index}
            material_icon={item.icon}
            footer_content={item.content}
            footer_type={item.type}
          />
        );
      })}
    </div>
  );
}

export default FooterAddress;
