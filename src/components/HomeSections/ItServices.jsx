import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IServices({ heading, icon, text_content }) {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="service_box_wrapper">
          <div className="service_icon">
            <FontAwesomeIcon icon={icon} size="2x" />
          </div>
          <div className="service_content">
            <div className="heading_h4">{heading}</div>
            <div className="service_text">{text_content}</div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <section className="service_section ptb_100">
  <div className="container">
    <Heading_title
      heading_title={"our service"}
      main_heading1={`We Offer a Wide`}
      main_heading2={`Variety of IT Services`}
    />
    <div className="row">
      {servicesData?.services?.map((item, index) => {
        return (
          <Service_section
            key={index}
            heading={item.heading}
            icon={DevIcons[index]}
            text_content={item.text_content}
          />
        );
      })}
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <Button
          className={"bg-primary border-0 text-white px-5 py-3 "}
          text="All Service"
        ></Button>
      </div>
    </div>
  </div>
</section>; */
}
export default IServices;
