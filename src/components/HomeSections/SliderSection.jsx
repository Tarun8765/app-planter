import Content_text from "../Content/ContentText";
import Button from "../common/Button";
function SliderSection() {
  return (
    <section className="slider">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="banner_content_wrapper">
              <div className="banner_heading_wrapper">
                <div className="banner_sub_heading">
                  // Fully Cycle Software Development
                </div>
                <div className="banner_heading">
                  <h1>FROM IDEA TO PRODUCT</h1>
                </div>
              </div>

              <Content_text
                content={`We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.`}
              />
              <div className="read_more_btn">
                <Button
                  className={
                    "bg_sky_blue bg-primary border-0 text-white px-5 py-3 "
                  }
                  text="learn more"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderSection;
