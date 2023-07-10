import { Component } from "react";
import capitalizeString from "../utilities/CapitalizeString";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal, education, experience } = this.props;

    return (
      <section className="wrapper">
        <article className="preview">
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
              <h3>work experience</h3>
              {experience &&
                experience &&
                experience.map((el, index) => {
                  console.log(el);
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
          </div>
          <div className="sidebar">
            <img src={personal.avatar} alt="avatar" />
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
            {personal && personal.linkedin && (
              <p>
                <i className="fa-brands fa-linkedin"></i>
                <a href={personal.linkedin}>linkedin</a>
              </p>
            )}
            {personal && personal.github && (
              <p>
                <i className="fa-brands fa-github"></i>
                <a href={personal.github}>github</a>
              </p>
            )}
          </div>
        </article>
      </section>
    );
  }
}

export default Preview;
