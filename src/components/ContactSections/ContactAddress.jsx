import { Link } from "react-router-dom";
function ContactAddress({
  linkStatus,
  material_icon,
  linkClass,
  toHref,
  heading,
  subHeading,
}) {
  return (
    <div className="col-md-12">
      <div className="contact_icon_wrapper">
        <div className="contact_icon">
          <i className="material-icons">{material_icon}</i>
        </div>
        <div className="contact_content">
          <div className="heading_h4">{heading}</div>
          {linkStatus ? <Link className={linkClass} to={toHref} /> : ""}
          <div className="sub_heading">{subHeading}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactAddress;
