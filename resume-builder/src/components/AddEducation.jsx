import React, { Component } from "react";

class AddEducation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <fieldset>
          <input
            className="percent-45"
            type="text"
            name="name"
            placeholder="School name"
          />
          <input
            className="percent-45"
            type="text"
            name="degree"
            placeholder="Title of study"
          />
          <div className="date-div">
            <div className="start-date">
              <h4>start date</h4>
              <input
                type="text"
                name="start-month"
                placeholder="Month"
                pattern="^([1-9]|1{1}[0-2]{1})$"
              />
              <input
                type="text"
                name="end-year"
                placeholder="Year"
                pattern="^[0-9]{4}$"
              />
            </div>
            <div className="end-date">
              <h4>end date</h4>
              <input
                type="text"
                name="start-month"
                placeholder="Month"
                pattern="^([1-9]|1{1}[0-2]{1})$"
              />
              <input
                type="text"
                name="end-year"
                placeholder="Year"
                pattern="^[0-9]{4}$"
              />
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default AddEducation;
