import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./pages/Form";
import Preview from "./pages/Preview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        firstName: "John",
        lastName: "Doe",
        jobTitle: "Software Engineer",
        avatar:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        email: "mockemail@gmail.com",
        phone: "999-999-9999",
        city: "Chicago",
        state: "IL",
        zipcode: "60544",
        linkedin: "https://www.linkedin.com",
        github: "https://github.com",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, hic numquam! Rem perferendis error necessitatibus. Excepturi numquam minus in quidem temporibus, quam illo ut amet, mollitia quisquam labore quos repellat.Cum nostrum, deleniti tempore sunt dolore numquam, repellat dolorem fugit necessitatibus aliquam tenetur omnis.",
      },
      education: [
        {
          degree: "general studies",
          endDate: "06/2022",
          city: "Chicago",
          state: "IL",
          zipcode: "60622",
          name: "University of Loyola",
          present: true,
          startMonth: "09",
          startYear: "2018",
          endMonth: undefined,
          endYear: undefined,
        },
      ],
      experience: [
        {
          position: "software engineer",
          endDate: "",
          city: "Chicago",
          state: "IL",
          zipcode: "60622",
          company: "Google",
          present: true,
          startMonth: "06",
          startYear: "2022",
          endMonth: "08",
          endYear: "2022",
        },
      ],
      preview: false,
    };

    this.addPersonal = this.addPersonal.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.editEducation = this.editEducation.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.editExperience = this.editExperience.bind(this);
  }

  togglePreview() {
    this.setState({
      preview: !this.state.preview,
    });
  }

  addPersonal(params) {
    this.state.personal = params;
  }

  addEducation(params) {
    this.setState((prevState) => {
      prevState.education.push(params);
    });
  }

  deleteEducation(params) {
    this.setState({
      education: this.state.education.filter(
        (el) => el.name !== params.name && el.degree !== params.degree
      ),
    });
  }

  editEducation(params, newParams) {
    this.setState({
      education: this.state.education.map((el) => {
        if (el.name !== params.name && el.degree !== params.degree) {
          return el;
        }

        return newParams;
      }),
    });
  }

  addExperience(params) {
    this.setState((prevState) => {
      prevState.experience.push(params);
    });
  }

  deleteExperience(params) {
    this.setState({
      experience: this.state.experience.filter(
        (el) => el.company !== params.company && el.position !== params.position
      ),
    });
  }

  editExperience(params, newParams) {
    this.setState({
      experience: this.state.experience.map((el) => {
        if (el.company !== params.company && el.company !== params.company) {
          return el;
        }

        return newParams;
      }),
    });
  }

  render() {
    return (
      <>
        <Header
          togglePreview={this.togglePreview}
          preview={this.state.preview}
        />
        {!this.state.preview && (
          <Form
            personal={this.state.personal}
            addPersonal={this.addPersonal}
            addEducation={this.addEducation}
            deleteEducation={this.deleteEducation}
            editEducation={this.editEducation}
            education={this.state.education}
            addExperience={this.addExperience}
            experience={this.state.experience}
            deleteExperience={this.deleteExperience}
            editExperience={this.editExperience}
          />
        )}
        {this.state.preview && (
          <Preview
            personal={this.state.personal}
            education={this.state.education}
            experience={this.state.experience}
          />
        )}
      </>
    );
  }
}

export default App;
