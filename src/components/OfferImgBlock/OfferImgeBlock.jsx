import { Link } from "react-router-dom";
function OfferImgeBlock({ heading, imgeSrc }) {
  return (
    <>
      <div className="offer_img_block">
        <Link href="#">
          <div className="what_offer_overlay">
            <div className="heading_h4">{heading}</div>
          </div>
          <img className="img-fluid" src={imgeSrc} alt=""></img>
        </Link>
      </div>
    </>
  );
}

export default OfferImgeBlock;
