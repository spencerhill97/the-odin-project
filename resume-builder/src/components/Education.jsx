import React, { Component } from "react";
import AddEducation from "./AddEducation";
import AddBtn from "../ui/AddBtn";
import EditBtn from "../ui/EditBtn";
import DeleteBtn from "../ui/DeleteBtn";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: false,
      mutatedEducation: undefined,
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.setEducationProps = this.setEducationProps.bind(this);
    this.clearEducationProps = this.clearEducationProps.bind(this);
  }

  toggleForm() {
    if (this.state.form && this.state.mutatedEducation) {
      this.clearEducationProps();
    }

    this.setState({
      form: !this.state.form,
    });
  }

  setEducationProps(params) {
    this.setState({
      mutatedEducation: params,
    });
  }

  clearEducationProps() {
    this.setState({
      mutatedEducation: undefined,
    });
  }

  render() {
    const { addEducation, education, deleteEducation, editEducation } =
      this.props;

    return (
      <article>
        <h3>Education</h3>
        {education.map((el, index) => {
          const { name, degree } = el;
          return (
            <div key={name + String(index)} className="submitted-display">
              <div className="info">
                <h2>{name}</h2>
                <p>{degree}</p>
              </div>
              <div className="btn-container">
                <EditBtn
                  handleToggle={this.toggleForm}
                  setProps={this.setEducationProps}
                  form={this.state.form}
                  params={education[index]}
                />
                <DeleteBtn
                  handleDelete={deleteEducation}
                  params={education[index]}
                />
              </div>
            </div>
          );
        })}
        {this.state.form && (
          <AddEducation
            handleToggle={this.toggleForm}
            addEducation={addEducation}
            editEducation={editEducation}
            params={this.state.mutatedEducation}
            clearParams={this.clearEducationProps}
          />
        )}
        {!this.state.form && <AddBtn handleToggle={this.toggleForm} />}
      </article>
    );
  }
}

export default Education;
