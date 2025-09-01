import ContentText from "../Content/ContentText";
import Offer_imge_block from "../OfferImgBlock/OfferImgeBlock";
function AboutContact() {
  return (
    <section className="contact_section ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_content_wrapper contact_wrapper pt-4">
              <div className="heading_title">// what we offer</div>
              <div className="heading_main">
                Your Partner for Software Innovation
              </div>

              <ContentText
                contentClass={"content italic_text"}
                content={`Engitech is the partner of choice for many of the world's
                  leading enterprises, SMEs and technology challengers. We help
                  businesses elevate their value through custom software
                  development, product design, QA and consultancy services.`}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="what_offer_wraper">
              <div className="what_offer_col">
                <Offer_imge_block
                  heading={"Our Mission"}
                  imgeSrc={"/images/img_box1.jpg"}
                />
                <Offer_imge_block
                  heading={"Our Philosophy"}
                  imgeSrc={"/images/img_box3.jpg"}
                />
              </div>
              <div className="what_offer_col">
                <Offer_imge_block
                  heading={"Our Vision"}
                  imgeSrc={"/images/img_box2.jpg"}
                />
                <Offer_imge_block
                  heading={"Our Strategy"}
                  imgeSrc={"/images/img_box4.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContact;
