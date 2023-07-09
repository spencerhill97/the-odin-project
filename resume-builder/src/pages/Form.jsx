import React, { Component } from "react";
import PersonalDetails from "../components/PersonalDetails";
import Education from "../components/Education";
import Experience from "../components/Experience";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal, addPersonal } = this.props;

    return (
      <section className="wrapper">
        <article className="form">
          <PersonalDetails personal={personal} addPersonal={addPersonal} />
          <Education />
          <Experience />
        </article>
      </section>
    );
  }
}

export default Form;
