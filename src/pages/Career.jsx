import Heading_title from "../components/HeadingTitle/Heading_title";
import BannerSection from "../components/common/BannerSection";
import CareerForm from "../components/CareerSection/CareerForm";
import { Helmet } from "react-helmet";
import React from "react";

function Career() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Careers at App Planter Technologies | Join Our Team</title>
        <meta
          name="description"
          content="Build your career with App Planter Technologies. Explore job opportunities in web development, UI/UX design, IT consultancy, QA testing, and software engineering. Apply now and grow with us."
        />
        <meta
          name="keywords"
          content="App Planter careers, IT jobs, web developer jobs, UI/UX designer jobs, QA tester jobs, IT consultancy careers, software engineering jobs, technology careers"
        />
      </Helmet>
      <BannerSection heading={"Career"} />
      <section className="contact_section ptb_100">
        <div className="container">
          <div className="row">
            <Heading_title
              heading_title={"Career"}
              main_heading1={`Become a part of our dynamic team`}
            />
            <div className="col-md-12">
              <div className="contact_form">
                <div className="contact_form_heading text-center">
                  <h2>Resigstraion for Software developer</h2>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <CareerForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Career;
