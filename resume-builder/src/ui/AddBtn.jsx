import React, { Component } from "react";

class AddBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleToggle } = this.props;

    return (
      <button onClick={handleToggle} type="button" className="add btn">
        add
      </button>
    );
  }
}

export default AddBtn;
