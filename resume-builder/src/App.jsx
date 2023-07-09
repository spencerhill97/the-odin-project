import { useEffect } from "react";
import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./pages/Form";
import Preview from "./pages/Preview";
import AddEducation from "./components/AddEducation";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: undefined,
      education: [],
      experience: [],

      preview: false,
    };

    this.addEducation = this.addEducation.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
    this.addPersonal = this.addPersonal.bind(this);
  }

  togglePreview() {
    this.setState({
      preview: !this.state.preview,
    });
  }

  addPersonal(params) {
    this.setState({
      personal: params,
    });
  }

  addEducation(params) {
    this.setState({
      education: this.state.education.push(params),
    });
  }

  addExperience(params) {
    this.setState({
      data: this.state.data.experience.push(params),
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
            addPersonal={this.addPersonal}
            addEducation={this.addEducation}
            personal={this.state.personal}
          />
        )}
        {this.state.preview && <Preview />}
      </>
    );
  }
}

export default App;
