import React, { Component } from "react";
import AddBtn from "../ui/AddBtn";
import AddExperience from "./AddExperience";
import EditBtn from "../ui/EditBtn";
import DeleteBtn from "../ui/DeleteBtn";
class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: false,
      mutatedExperience: undefined,
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.setExperienceProps = this.setExperienceProps.bind(this);
    this.clearExperienceProps = this.clearExperienceProps.bind(this);
  }

  toggleForm() {
    if (this.state.form && this.state.mutatedExperience) {
      this.clearExperienceProps();
    }

    this.setState({
      form: !this.state.form,
    });
  }

  setExperienceProps(params) {
    this.setState({
      mutatedExperience: params,
    });
  }

  clearExperienceProps() {
    this.setState({
      mutatedExperience: undefined,
    });
  }

  render() {
    const { addExperience, experience, deleteExperience, editExperience } =
      this.props;
    return (
      <div>
        <h3>work experience</h3>
        {experience.map((el, index) => {
          const { company, position } = el;
          return (
            <div key={company + String(index)} className="submitted-display">
              <div className="info">
                <h2>{company}</h2>
                <p>{position}</p>
              </div>
              <div className="btn-container">
                <EditBtn
                  handleToggle={this.toggleForm}
                  setProps={this.setExperienceProps}
                  form={this.state.form}
                  params={experience[index]}
                />
                <DeleteBtn
                  handleDelete={deleteExperience}
                  params={experience[index]}
                />
              </div>
            </div>
          );
        })}
        {this.state.form && (
          <AddExperience
            addExperience={addExperience}
            handleToggle={this.toggleForm}
            params={this.state.mutatedExperience}
            clearParams={this.clearExperienceProps}
            editExperience={editExperience}
          />
        )}
        {!this.state.form && <AddBtn handleToggle={this.toggleForm} />}
      </div>
    );
  }
}

export default Experience;
