import ItServices from "./ItServices";
import Heading_title from "../HeadingTitle/Heading_title";
import Button from "../common/Button";
import servicesData from "../data/servicesData.json";
import {
  faLaptopCode,
  faPenRuler,
  faUserTie,
  faBug,
  faUsers,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
let DevIcons = [faLaptopCode, faPenRuler, faPalette, faBug, faUserTie, faUsers];

function ServicesSection() {
  return (
    <section className="service_section ptb_100">
      <div className="container">
        <Heading_title
          heading_title={"our service"}
          main_heading1={`We Offer a Wide`}
          main_heading2={`Variety of IT Services`}
        />
        <div className="row">
          {servicesData?.services?.map((item, index) => {
            return (
              <ItServices
                key={index}
                heading={item.heading}
                icon={DevIcons[index]}
                text_content={item.text_content}
              />
            );
          })}
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Button
              className={"bg-primary border-0 text-white px-5 py-3 "}
              text="All Service"
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
