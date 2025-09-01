import { Link } from "react-router-dom";
function LinkBtn({ href }) {
  return (
    <>
      <Link className="link" href={href}>
        <i className="material-icons">chevron_right</i> Learn More
      </Link>
    </>
  );
}

export default LinkBtn;
