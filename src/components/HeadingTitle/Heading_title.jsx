import "./Heading_title.css";
function Heading_title({ heading_title, main_heading1, main_heading2 }) {
  return (
    <>
      <div className="row">
        <div className="col-md-8 col-lg-6 mx-auto text-center">
          <div className="heading_title">{`// ${heading_title} `}</div>
          <div className="heading_main">
            {main_heading1}
            <br />
            {main_heading2}
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading_title;
