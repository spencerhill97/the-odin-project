import { Component } from "react";
import CancelBtn from "../ui/CancelBtn";
import SubmitBtn from "../ui/SubmitBtn";

class AddExperience extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const company = document.querySelector(".experience.company");
    const position = document.querySelector(".experience.position");
    const city = document.querySelector(".experience.city");
    const state = document.querySelector(".experience.state");
    const zipcode = document.querySelector(".experience.zipcode");
    const startMonth = document.querySelector(".experience.start-month");
    const startYear = document.querySelector(".experience.start-year");
    const endMonth = document.querySelector(".experience.end-month");
    const endYear = document.querySelector(".experience.end-year");
    const present = document.querySelector(".experience.present");

    const result = {
      company: company.value,
      position: position.value,
      city:
        city.value.split("")[0].toUpperCase() +
        city.value.split("").slice(1).join(""),
      state: state.value.toUpperCase(),
      zipcode: zipcode.value,
      startMonth: startMonth.value,
      startYear: startYear.value,
      endMonth: endMonth.value,
      endYear: endYear.value,
      present: present.checked,
    };

    if (!this.props.params) {
      this.props.addExperience(result);
    } else {
      this.props.editExperience(this.props.params, result);
    }

    company.value = "";
    city.value = "";
    state.value = "";
    zipcode.value = "";
    position.value = "";
    startMonth.value = "";
    startYear.value = "";
    endMonth.value = "";
    endYear.value = "";
    present.value = "";

    this.props.clearParams();
    this.props.handleToggle();
  }

  render() {
    const { handleToggle, params } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>
            {(params && "edit experience:") || "add new experience:"}
          </legend>
          <input
            defaultValue={params && params.company}
            className="percent-45 experience company"
            type="text"
            name="experience-name"
            placeholder="Company name"
            required
          />
          <input
            defaultValue={params && params.position}
            className="percent-45 experience position"
            type="text"
            name="experience-degree"
            placeholder="Position title"
            required
          />
          <div className="location">
            <input
              defaultValue={params && params.city}
              className="percent-45 experience city"
              type="text"
              name="experience-city"
              placeholder="City"
              pattern="^[a-zA-Z]+$"
            />
            <input
              defaultValue={params && params.state}
              className="percent-22 experience state"
              type="text"
              name="experience-state"
              placeholder="State"
              pattern="^[a-zA-Z]{2}$"
            />
            <input
              defaultValue={params && params.zipcode}
              className="percent-22 experience zipcode"
              type="text"
              name="experience-zipcode"
              placeholder="Zipcode"
              pattern="^[0-9]{5}$"
            />
          </div>
          <div className="date-div">
            <div className="start-date">
              <h4>start date:</h4>
              <input
                defaultValue={params && params.startMonth}
                className="experience start-month"
                type="text"
                name="experience-start-month"
                placeholder="Month"
                pattern="^(0?[1-9]|1{1}[0-2]{1})$"
                required
              />
              <input
                defaultValue={params && params.startYear}
                className="experience start-year"
                type="text"
                name="experience-start-year"
                placeholder="Year"
                pattern="^[0-9]{4}$"
                required
              />
            </div>
            <div className="end-date">
              <h4>end date:</h4>
              <input
                defaultValue={params && params.endMonth}
                className="experience end-month"
                type="text"
                name="experience-end-month"
                placeholder="Month"
                pattern="^(0?[1-9]|1{1}[0-2]{1})$"
              />
              <input
                defaultValue={params && params.endYear}
                className="experience end-year"
                type="text"
                name="experience-end-year"
                placeholder="Year"
                pattern="^[0-9]{4}$"
              />
              <p>or</p>
              <label htmlFor="present">Present: </label>
              <input
                id="present"
                type="checkbox"
                name="experience-present"
                className="experience present"
                defaultChecked={params && params.present ? true : false}
              />
            </div>
          </div>
        </fieldset>
        <div className="btn-container">
          <SubmitBtn params={params} />
          <CancelBtn handleToggle={handleToggle} />
        </div>
      </form>
    );
  }
}

export default AddExperience;
