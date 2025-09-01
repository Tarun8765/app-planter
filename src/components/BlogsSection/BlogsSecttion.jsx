import Heading5 from "../HeadingTitle/heading5";
import ContentText from "../Content/ContentText";
function BlogsSecttion() {
  return (
    <section class="contact_section ptb_100">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="about_content_wrapper contact_wrapper">
              <Heading5 heading={"// Blogs details"} />
              <div class="heading_main">Blogs</div>
              <ContentText
                contentClass={"content"}
                content={`    Give us a call or drop by anytime, we endeavour to answer all
                enquiries within 24 hours on business days. We will be happy to
                answer your questions.`}
              />
            </div>
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
    </section>
  );
}

export default BlogsSecttion;
