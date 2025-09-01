import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tech_list from "../data/tech_list.json";
import Heading_title from "../HeadingTitle/Heading_title";
import { faCube, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faPython,
  faJava,
  faPhp,
  faAngular,
  faVuejs,
  faGitAlt,
  faGithub,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
let IconsMap = [
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faPython,
  faJava,
  faPhp,
  faAngular,
  faVuejs,
  faGitAlt,
  faGithub,
  faNpm,
  faCube,
  faPuzzlePiece,
];
function TechSection() {
  return (
    <section className="tech_section">
      <div className="bg_black_transprant ptb_100">
        <div className="container">
          <Heading_title
            heading_title={"TECHNOLOGY"}
            main_heading1={
              "We Deliver Solution with the Goal of Trusting Relationships"
            }
          />
          <ul className="tech_list text-center d-flex">
            {tech_list?.tech_list?.map((data, index) => {
              return (
                <li key={index}>
                  <div className="tech_icon_wrapper ">
                    <div className="tech_icon">
                      <FontAwesomeIcon
                        style={{
                          fontSize: "50px",
                          display: "flex",
                          gap: "20px",
                        }}
                        icon={IconsMap[index]}
                      />
                    </div>
                    <div className="tech_name">{data?.tech_name}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TechSection;
