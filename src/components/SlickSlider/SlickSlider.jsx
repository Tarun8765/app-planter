import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slick_data from "../data/Slick_data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function Slick_slider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992, // Bootstrap md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Bootstrap sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // Bootstrap xs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {Slick_data?.Slick_data?.map((item, index) => {
        return (
          <div className="blog_shadow_wrapper" key={index}>
            <div className="blog_wrapper">
              <div className="blog_heading_icon_wrapper">
                <div className="blog_icon">
                  <FontAwesomeIcon icon={faUser} size="2x" />
                </div>
                <div className="blog_heading_wrapper">
                  <div className="heading_h4">{item.heading_h4}</div>
                  <div className="sub_heading">{item.sub_heading}</div>
                </div>
              </div>
              <div className="blog_content">{item.blog_content}</div>
            </div>
            <div className="blog_shadow"></div>
          </div>
        );
      })}
    </Slider>
  );
}

export default Slick_slider;
