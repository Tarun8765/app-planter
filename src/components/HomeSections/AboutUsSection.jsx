import Content_text from "../Content/ContentText";
import Heading5 from "../HeadingTitle/heading5";
import LinkBtn from "../common/LinkBtn";
function AboutUsSection() {
  return (
    <>
      <section className="about_section ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-md-none">
              <img className="img-fluid" src="/images/about.png" alt="about" />
            </div>
            <div className="col-md-6">
              <div className="about_content_wrapper">
                <div className="heading_title">// about company</div>
                <div className="heading_main">
                  Your Partner for Software Innovation
                </div>
                <Content_text
                  contentClass={"content"}
                  content={`Engitech is the partner of choice for many of the world's
                  leading enterprises, SMEs and technology challengers. We help
                  businesses elevate their value through custom software
                  development, product design, QA and consultancy services.`}
                />
                <div className="about_points row">
                  <div className="col-md-6">
                    <div className="about_points_heading">
                      <div className="icon">
                        <i className="fa fa-trophy" aria-hidden="true"></i>
                      </div>

                      <Heading5 heading={"Experience"} />
                    </div>
                    <div className="about_points_content">
                      Our great team of more than 1400 software experts.
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="about_points_heading">
                      <div className="icon">
                        <i className="fa fa-gear"></i>
                      </div>

                      <Heading5 heading={"Quick Support"} />
                    </div>
                    <div className="about_points_content">
                      We'll help you test bold new ideas while sharing your.
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <LinkBtn className="link" href="#" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <img className="img-fluid" src="/images/about.png" alt="about" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUsSection;
