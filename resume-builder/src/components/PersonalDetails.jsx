import React, { Component } from "react";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    const firstName = document.querySelector(`input[name="name"]`).value;
    const email = document.querySelector(`input[name="email"]`).value;
    const phone = document.querySelector(`input[name="phone-number"]`).value;
    const linkedin = document.querySelector(`input[name="linkedin"]`).value;
    const github = document.querySelector(`input[name="github"]`).value;
    const bio = document.querySelector(`textarea[name="bio"]`).value;

    this.props.addPersonal({
      firstName,
      email,
      phone,
      linkedin,
      github,
      bio,
    });
  }

  render() {
    const { personal } = this.props;
    return (
      <div>
        <h3>personal details</h3>
        <form onChange={this.onChange}>
          <fieldset>
            <input
              className="percent-45"
              type="text"
              name="fname"
              placeholder="First name"
              pattern="^[a-zA-Z]+$"
              defaultValue={
                personal && "firstName" in personal && personal.firstName
              }
              required
            />
            <input
              className="percent-45"
              type="text"
              name="lname"
              placeholder="Last name"
              pattern="^[a-zA-Z]+$"
              defaultValue={
                personal && "firstName" in personal && personal.firstName
              }
              required
            />
            <div className="location percent-45">
              <input
                className="percent-45"
                type="text"
                name="city"
                placeholder="City"
              />
              <input
                className="percent-22"
                type="text"
                name="state"
                placeholder="State"
              />
              <input
                className="percent-22"
                type="text"
                name="zipcode"
                placeholder="Zipcode"
              />
            </div>
            <input
              className="percent-45"
              type="email"
              name="email"
              placeholder="Email"
              pattern=".+@[a-z]+\.[a-z]+"
              defaultValue={personal && "email" in personal && personal.email}
              required
            />
            <input
              className="percent-45"
              type="text"
              name="phone-number"
              placeholder="Phone number"
              pattern="\(?[0-9]{3}\)?-?[0-9]{3}-?[0-9]{4}"
              defaultValue={personal && "phone" in personal && personal.phone}
              required
            />
            <input
              className="percent-45"
              type="text"
              name="linkedin"
              placeholder="Linkedin profile"
              defaultValue={
                personal && "linkedin" in personal && personal.linkedin
              }
              pattern="^(https://www.linkedin.com/in/).+$"
            />
            <input
              className="percent-45"
              type="text"
              name="github"
              placeholder="Github profile"
              defaultValue={personal && "github" in personal && personal.github}
              pattern="^(https://github.com/).+$"
            />
            <textarea
              className="short-bio"
              name="bio"
              defaultValue={personal && "bio" in personal && personal.bio}
              placeholder="Short bio..."
            ></textarea>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default PersonalDetails;
