import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./pages/Form";
import Preview from "./pages/Preview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: undefined,
      education: [
        {
          degree: "general studies",
          endDate: "08/2023",
          city: "Chicago",
          state: "IL",
          zipcode: "60622",
          name: "joliet junior college",
          present: true,
          startMonth: "06",
          startYear: "2020",
          endMonth: undefined,
          endYear: undefined,
        },
      ],
      experience: [
        {
          position: "divisional team leader",
          endDate: "08/2023",
          city: "Chicago",
          state: "IL",
          zipcode: "60622",
          company: "celeritas freight solutions",
          present: false,
          startMonth: "06",
          startYear: "2020",
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
        {this.state.preview && <Preview />}
      </>
    );
  }
}

export default App;
