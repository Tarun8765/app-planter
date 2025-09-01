import LinkBtn from "../common/LinkBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Box_wraper({ icon, count, heading_4, text }) {
  return (
    <>
      <div className="col-lg-3">
        <div className="choose_box_wrapper">
          <div className="choose_big_count">{count}</div>
          <div className="choose_icon">
            <FontAwesomeIcon icon={icon} size="2x" />{" "}
          </div>
          <div className="choose_content">
            <div className="heading_h4">{heading_4}</div>
            <div className="choose_text">{text}</div>
            <div className="choose_link">
              <LinkBtn href={"#"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Box_wraper;
