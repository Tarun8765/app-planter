import ContactAddress from "./ContactAddress";
import ContactForm from "./ContactForm";
import addressData from "../data/contactAddresData.json";
function ContactUS() {
  return (
    <section className="contact_section ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_content_wrapper contact_wrapper">
              <div className="heading_title">// contact details</div>
              <div className="heading_main">Contact us</div>
              <div className="content">
                Give us a call or drop by anytime, we endeavour to answer all
                enquiries within 24 hours on business days. We will be happy to
                answer your questions.
              </div>
              <div className="contact_points row">
                {addressData?.addressData?.map((item, index) => {
                  return (
                    <ContactAddress
                      key={index}
                      material_icon={item.icon}
                      heading={item.heading}
                      subHeading={item.subHeading}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact_form">
              <div className="contact_form_heading text-center">
                <h2>Ready to Get Started?</h2>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUS;
