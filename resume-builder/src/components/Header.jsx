import React, { Component } from "react";
import { FaRegPaperPlane } from "react-icons/fa";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { togglePreview, preview } = this.props;

    return (
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
          <button type="button" className="btn preview">
            print
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
