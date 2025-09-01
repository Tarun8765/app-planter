import Heading_title from "../HeadingTitle/Heading_title";
import SlickSlider from "../SlickSlider/SlickSlider";
function BlogSection() {
  return (
    <section className="blog_section ptb_100">
      <div className="container">
        <Heading_title
          heading_title={"BlOGS"}
          main_heading1={`We are Trusted `}
          main_heading2={`15+ Countries Worldwide`}
        />
        <div className="row">
          <div className="col-md-12">
            <div className="blog_slider">
              <div>
                <SlickSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BlogSection;
