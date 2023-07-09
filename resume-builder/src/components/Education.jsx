import React, { Component } from "react";
import AddEducation from "./AddEducation";
import AddBtn from "../ui/AddBtn";
import CancelBtn from "../ui/CancelBtn";
import SubmitBtn from "../ui/SubmitBtn";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: false,
    };

    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({
      form: !this.state.form,
    });
  }

  render() {
    return (
      <div>
        <h3>Education</h3>
        {this.state.form && <AddEducation />}
        <div className="btn-container">
          {this.state.form && <SubmitBtn />}
          {this.state.form ? (
            <CancelBtn toggleForm={this.toggleForm} />
          ) : (
            <AddBtn toggleForm={this.toggleForm} />
          )}
        </div>
      </div>
    );
  }
}

export default Education;
