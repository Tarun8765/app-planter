import image_Url from "../data/image_Url.json";
import { Link } from "react-router-dom";
import Button from "../common/Button";

function OurWork() {
  return (
    <section className="service_section ptb_100">
      <div className="container">
        <h1 className="heading_main text-center">Our work</h1>
        <div className="row  ">
          {image_Url?.image_Url?.map((item, index) => {
            return (
              <div key={index} className="col-md-3 col-12 col-sm-6 gy-5 gx-5">
                <Link className="animated_image d-block" to="#" target="blank">
                  <img src={item.url} alt="animate" className="img-fluid " />
                  <span className="overlay"></span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col mt-4">
        <div className="col-md-12 text-center ">
          <Button
            className={"bg-primary border-0 text-white px-5 py-3 "}
            text="See All"
          ></Button>
        </div>
      </div>
    </section>
  );
}

export default OurWork;
