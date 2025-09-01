function FooterContact({ material_icon, footer_content, footer_type }) {
  return (
    <>
      <div className="col-md-4">
        <div className="foter_icon">
          <i className="material-icons">{material_icon}</i>
        </div>
        <div className="footer_content_type">{footer_type}</div>
        <div className="footer_content">{footer_content}</div>
      </div>
    </>
  );
}

export default FooterContact;
