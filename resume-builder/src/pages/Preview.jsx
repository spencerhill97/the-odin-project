import { Component } from "react";
import capitalizeString from "../utilities/CapitalizeString";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal, education, experience } = this.props;
    {
      console.log(personal.avatar);
    }

    return (
      <section className="wrapper">
        <article id="preview" className="preview">
          <div className="main-content">
            <div className="name-occupation">
              <h2>
                {personal &&
                  capitalizeString(personal.firstName) +
                    " " +
                    capitalizeString(personal.lastName)}
              </h2>
              <p>{personal && capitalizeString(personal.jobTitle)}</p>
            </div>
            <div className="description">
              <p>{personal && personal.bio && personal.bio}</p>
            </div>
            <div className="work-experience">
              <h3>
                <i className="fa-solid fa-briefcase"></i>work experience
              </h3>
              {experience &&
                experience &&
                experience.map((el, index) => {
                  return (
                    <div key={el.company + String(index)} className="work-item">
                      <div>
                        <h4>{el.company}</h4>
                        <p>{el.position}</p>
                      </div>
                      <div>
                        <p>
                          {`${capitalizeString(el.city)}, 
                            ${capitalizeString(el.state)} ${el.zipcode}`}
                        </p>
                        <p>
                          {String(el.startMonth).length === 1
                            ? "0" + String(el.startMonth)
                            : String(el.startMonth)}
                          /{el.startYear} ~
                          {el.present
                            ? " Present"
                            : String(el.endMonth).length === 1
                            ? " 0" + String(el.endMonth)
                            : " " + String(el.endMonth)}
                          {!el.present && "/" + String(el.endYear)}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="education">
              <h3>
                <i className="fa-solid fa-graduation-cap"></i>education
              </h3>
              {education &&
                education &&
                education.map((el, index) => {
                  return (
                    <div
                      key={el.name + String(index)}
                      className="education-item"
                    >
                      <div>
                        <h4>{el.name}</h4>
                        <p>{el.degree}</p>
                      </div>
                      <div>
                        <p>
                          {`${capitalizeString(el.city)}, 
                            ${capitalizeString(el.state)} ${el.zipcode}`}
                        </p>
                        <p>
                          {String(el.startMonth).length === 1
                            ? "0" + String(el.startMonth)
                            : String(el.startMonth)}
                          /{el.startYear} ~
                          {el.present
                            ? " Present"
                            : String(el.endMonth).length === 1
                            ? " 0" + String(el.endMonth)
                            : " " + String(el.endMonth)}
                          {!el.present && "/" + String(el.endYear)}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div id="section" className="sidebar">
            <img src={personal.avatar.result || personal.avatar} alt="avatar" />
            {personal && (
              <p>
                <i className="fa-solid fa-location-dot"></i>
                {`${capitalizeString(personal.city)}, 
                  ${capitalizeString(personal.state)} ${personal.zipcode}`}
              </p>
            )}
            {personal && (
              <p>
                <i className="fa-solid fa-square-phone"></i>
                {personal.phone}
              </p>
            )}
            {personal && (
              <p style={{ textTransform: "lowercase" }}>
                <i className="fa-solid fa-envelope"></i>
                {personal.email}
              </p>
            )}
            {personal && personal.linkedin && (
              <p>
                <a href={personal.linkedin}>
                  <i className="fa-brands fa-linkedin"></i>linkedin
                </a>
              </p>
            )}
            {personal && personal.github && (
              <p>
                <a href={personal.github}>
                  <i className="fa-brands fa-github"></i>github
                </a>
              </p>
            )}
          </div>
        </article>
      </section>
    );
  }
}

export default Preview;
