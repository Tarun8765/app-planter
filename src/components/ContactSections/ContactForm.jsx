import FormInputs from "../FormInputs/FormInputs";
import Button from "../common/Button";
import Textarea from "../FormInputs/Textarea";
function ContactForm() {
  return (
    <form>
      <FormInputs
        divClass={"mb-3 mt-3"}
        type={"text"}
        inputClass={"form-control"}
        id={"name"}
        placeholder={"Your Name.*"}
      />

      <FormInputs
        divClass={"mb-3 mt-3"}
        type={"email"}
        inputClass={"form-control"}
        id={"email"}
        placeholder={"Your email.*"}
      />
      <Textarea
        divClass={"mb-3"}
        taClass={"form-control"}
        row={"5"}
        plaseholder={"Message..."}
        name={"intro"}
        id={"comment"}
      />
      <Button
        type={"submit"}
        divClass={"text-center"}
        className={"btn form_submit_btn "}
        text={"Send Message"}
      />
    </form>
  );
}

export default ContactForm;
