import Inputs from "./Inputs";
import Button from "../common/Button";
import Textarea from "../FormInputs/Textarea";
import { useState } from "react";
function Contact_form() {
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
  });

  function handleInput() {
    return;
  }
  return (
    <>
      <div className="contact_form">
        <div className="contact_form_heading">
          <h2>Ready to Get Started?</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        732 4
        <form>
          <Inputs
            divClass={"mb-3 mt-3"}
            inputClass={"form-control"}
            id={"name"}
            placeholder={"Your Name*"}
            name={"name"}
            type={"text"}
            value={formData.name}
            onChange={handleInput}
          />
          <Inputs
            divClass={"mb-3"}
            inputClass={"form-control"}
            id={"email"}
            placeholder={"Your Email*"}
            name={"email"}
            text={"email"}
            value={formData.email}
            onChange={handleInput}
          />
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="5"
              id="comment"
              name="text"
              onChange={handleInput}
              placeholder="Message..."
            ></textarea>
          </div>
          <Textarea
            divclass={"form-control"}
            row={"5"}
            id={"Comment"}
            name={"text"}
            plaseholder={"Message"}
          />
          <Button
            text={"Send Message."}
            className={"border-0 text-black px-5 py-3"}
          />
          <button type="submit" className="btn form_submit_btn">
            Send Message...
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact_form;
