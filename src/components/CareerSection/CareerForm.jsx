import FormInputs from "../FormInputs/FormInputs";
import Textarea from "../FormInputs/Textarea";
import Button from "../common/Button";
import jobPost from "../data/jobPost.json";
import education from "../data/educationData.json";

function CareerForm() {
  return (
    <form className="row">
      <div className="container">
        <div className="row">
          <FormInputs
            divClass={"col-md-6 mb-3 mt-3"}
            type={"type"}
            inputClass={"form-control"}
            id={"fname"}
            placeholder={"First name.*"}
          />
          <FormInputs
            divClass={"col-md-6 mb-3 mt-3"}
            type={"type"}
            inputClass={"form-control"}
            id={"lname"}
            placeholder={"Last name.*"}
          />
        </div>
        <div className="row">
          <FormInputs
            divClass={"col-md-6 mb-3 mt-3"}
            type={"email"}
            inputClass={"form-control"}
            id={"email"}
            placeholder={"Email.*"}
          />{" "}
          <FormInputs
            divClass={"col-md-6 mb-3 mt-3"}
            type={"number"}
            inputClass={"form-control"}
            id={"mobile"}
            placeholder={"Mobile.*"}
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3 mt-3">
            <select
              class="form-select form-control"
              name="jobPost"
              id="postSelect"
              required
              defaultValue={""}
            >
              <option
                className="text-secondary form-control"
                value={""}
                disabled
              >
                Select Role
              </option>

              {jobPost?.jobData?.map((item, index) => {
                return (
                  <option
                    key={index}
                    className="text-secondary form-control"
                    value={item.value}
                  >
                    {item.role}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-6 mb-3 mt-3">
            <select
              class="form-select form-control"
              name="jobPost"
              id="postSelect"
              required
              defaultValue={""}
            >
              <option
                className="text-secondary form-control"
                value={""}
                disabled
              >
                Select Qualification
              </option>
              {education?.educationData?.map((item, index) => {
                return (
                  <option
                    className="text-secondary form-control"
                    value="HR"
                    key={index}
                  >
                    {item.type}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="row">
          <FormInputs
            divClass={"col-md-6 mb-3 mt-3"}
            inputClass={"form-control"}
            id={"address"}
            type={"text"}
            placeholder={"Address..*"}
          />
          <FormInputs
            divClass={"col-md-6 mb-3 mt-3"}
            inputClass={"form-control"}
            id={"dot"}
            type={"date"}
          />
        </div>
        <div className="row">
          <Textarea
            divClass={" mb-3"}
            taClass={"form-control"}
            row={"4"}
            plaseholder={"Tell me about yourself..."}
            name={"intro"}
            id={"introduction"}
          />
        </div>
        <Button
          type={"submit"}
          divClass={"text-center"}
          className={"btn form_submit_btn "}
          text={"Submit"}
        />
      </div>
    </form>
  );
}

export default CareerForm;
