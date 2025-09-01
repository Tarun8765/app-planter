import React from "react";
import ChooseUs from "../components/HomeSections/ChooseUs";
import SliderSection from "../components/HomeSections/SliderSection";
import AboutUsSection from "../components/HomeSections/AboutUsSection";
import ServicesSection from "../components/HomeSections/ServicesSection";
import TechSection from "../components/HomeSections/TechSection";
import BlogSection from "../components/HomeSections/BlogSection";
import OurWork from "../components/HomeSections/OurWork";
import { Helmet } from "react-helmet";
function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>App Planter Technologies | Innovative Web & IT Solutions</title>
        <meta
          name="description"
          content="App Planter Technologies delivers cutting-edge web development, mobile apps, UI/UX design, IT consultancy, and software solutions tailored to your business needs."
        />
        <meta
          name="keywords"
          content="App Planter Technologies, web development, mobile app development, UI/UX design, IT consultancy, software solutions, IT company"
        />
      </Helmet>
      <SliderSection />
      <AboutUsSection />
      <ChooseUs />
      <ServicesSection />
      <TechSection />
      <OurWork />
      <BlogSection />
    </React.Fragment>
  );
}

export default Home;
