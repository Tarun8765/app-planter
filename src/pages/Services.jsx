import BannerSection from "../components/common/BannerSection/";
import { Helmet } from "react-helmet";
function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | App Planter Technologies</title>
        <meta
          name="description"
          content="Explore App Planter Technologies’ services including web development, mobile applications, UI/UX design, QA testing, IT consultancy, and full-stack solutions for businesses."
        />
        <meta
          name="keywords"
          content="App Planter services, web development, app development, UI/UX design, QA testing, IT consultancy, full-stack development"
        />
      </Helmet>
      <BannerSection heading={"Services"} />
      <section className="contact_section ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about_content_wrapper contact_wrapper">
                <div className="heading_title">// contact details</div>
                <div className="heading_main">Contact us</div>
                <div className="content">
                  Give us a call or drop by anytime, we endeavour to answer all
                  enquiries within 24 hours on business days. We will be happy
                  to answer your questions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
