import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Actual_do_icon from "../data/actual_do_icon.json";
import ContentText from "../Content/ContentText";
import {
  faCode,
  faPalette,
  faShieldHalved,
  faChartLine,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

let icons = [faPalette, faCode, faChartLine, faShieldHalved, faPuzzlePiece];

function AboutActualDo() {
  return (
    <section className="actual_do_section ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="../../public/images/about.png"
              alt="backgrand image"
            />
          </div>
          <div className="col-md-6">
            <div className="about_content_wrapper contact_wrapper pt-4">
              <div className="heading_title">
                // Experience. Execution. Excellence.
              </div>
              <div className="heading_main">What We Actually Do</div>
              <div className="actual_do_icon">
                <ul>
                  {Actual_do_icon?.Actual_do_icon?.map((item, index) => {
                    return (
                      <li key={index}>
                        <FontAwesomeIcon
                          style={{
                            fontSize: "50px",
                            display: "flex",
                            gap: "20px",
                          }}
                          icon={icons[index]}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="heading_h4">Website Development Services</div>

              <ContentText
                contentClass={"content"}
                content={` Engitech is the partner of choice for many of the world's
                  leading enterprises, SMEs and technology challengers. We help
                  businesses elevate their value through custom software
                  development, product design, QA and consultancy services.`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutActualDo;
