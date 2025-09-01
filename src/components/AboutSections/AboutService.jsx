import Content_text from "../Content/ContentText";

function AboutService() {
  return (
    <section className="service_section ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-lg-5 mx-auto service_heading text-center">
            <div className="heading_title">// our service</div>
            <div className="heading_main">Our Leadership Team</div>
            <Content_text
              contentClass={"content"}
              content={` We help businesses elevate their value through custom software
                development, product design, QA and consultancy services.`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutService;
