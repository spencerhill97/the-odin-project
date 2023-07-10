import React, { Component } from "react";
import PersonalDetails from "../components/PersonalDetails";
import Education from "../components/Education";
import Experience from "../components/Experience";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      personal,
      addPersonal,
      education,
      deleteEducation,
      addEducation,
      editEducation,
      experience,
      addExperience,
      deleteExperience,
      editExperience,
    } = this.props;

    return (
      <section className="wrapper">
        <article className="form">
          <PersonalDetails personal={personal} addPersonal={addPersonal} />
          <Education
            addEducation={addEducation}
            education={education}
            deleteEducation={deleteEducation}
            editEducation={editEducation}
          />
          <Experience
            addExperience={addExperience}
            experience={experience}
            deleteExperience={deleteExperience}
            editExperience={editExperience}
          />
        </article>
      </section>
    );
  }
}

export default Form;
