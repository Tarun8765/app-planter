function BannerSection({ heading }) {
  return (
    <>
      <section className="banner_section ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner_content_wrapper">
                <div className="banner_heading_wrapper">
                  <div className="banner_heading">
                    <h1>{heading}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerSection;
