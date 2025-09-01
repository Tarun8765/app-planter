import BannerSection from "../components/common/BannerSection";
import AboutService from "../components/AboutSections/AboutService";
import AboutContact from "../components/AboutSections/AboutContact";
import AboutActualDo from "../components/AboutSections/AboutActualDo";
import { Helmet } from "react-helmet";
function About() {
  return (
    <>
      <Helmet>
        <title>About Us | App Planter Technologies</title>
        <meta
          name="description"
          content="Learn about App Planter Technologies, our vision, mission, and expertise in providing modern IT solutions including web development, app design, and consultancy services."
        />
        <meta
          name="keywords"
          content="About App Planter, IT company profile, technology company, software solutions, IT consultancy, app development"
        />
      </Helmet>
      <BannerSection heading={"About Us"} />
      <AboutContact />
      <AboutActualDo />
      <AboutService />
    </>
  );
}
export default About;
