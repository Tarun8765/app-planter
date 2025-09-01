import favicon_links from "../data/favicon_links.json";
import { Link } from "react-router-dom";
function FooterSocialLiks() {
  return (
    <div className="row">
      <div className="col-md-12">
        <ul className="nav social_links justify-content-center">
          {favicon_links?.favicaonLinks?.map((item, index) => {
            return (
              <li key={index} className="nav-item">
                <Link className="nav-link" to={"#"}>
                  <i className={`fa ${item.fa_linkName}`}></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FooterSocialLiks;
