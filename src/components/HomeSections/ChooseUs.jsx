import {
  faCode,
  faPalette,
  faShieldHalved,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import chooseUs from "../data/chooseUs.json";
import Heading_title from "../HeadingTitle/Heading_title";
import BoxWraper from "../BoxWraper/BoxWraper";
let icons = [faPalette, faCode, faChartLine, faShieldHalved];

function ChooseUs() {
  return (
    <>
      <section className="choose_us_section ptb_100">
        <div className="container">
          <Heading_title
            heading_title={"why choose us"}
            main_heading1={" Design the Concept of "}
            main_heading2={"Your Business Idea Now"}
          />
          <div className="row choose_row_wrapper">
            {chooseUs?.chooseUs?.map((item, index) => {
              return (
                <BoxWraper
                  key={index}
                  count={item.count}
                  icon={icons[index]}
                  heading_4={item.heading_4}
                  text={item.text}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
