import "../App.css";
import BannerSection from "../components/common/BannerSection";
import ContactMap from "../components/ContactSections/ContactMap";
import ContactUS from "../components/ContactSections/ContactUS";
import { Helmet } from "react-helmet";
function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | App Planter Technologies</title>
        <meta
          name="description"
          content="Get in touch with App Planter Technologies for IT consultancy, web and mobile app development, UI/UX design, and custom software solutions. Let’s grow your business together."
        />
        <meta
          name="keywords"
          content="Contact App Planter, IT company contact, software solutions inquiry, web development contact, app development support, IT consultancy contact"
        />
      </Helmet>
      <BannerSection heading={"Contact"} />
      <ContactUS />
      <ContactMap />
    </>
  );
}
export default Contact;
