import React, { Component } from "react";
import { FaRegPaperPlane } from "react-icons/fa";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { togglePreview, preview } = this.props;

    return (
      <div className="header-wrapper">
        <header className="header">
          <h1 className="title">
            <FaRegPaperPlane />
            cv builder
          </h1>
          <div className="btn-container">
            {preview ? (
              <button
                type="button"
                onClick={togglePreview}
                className="btn preview"
              >
                form
              </button>
            ) : (
              <button
                type="button"
                onClick={togglePreview}
                className="btn preview"
              >
                preview
              </button>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
