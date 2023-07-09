import React, { Component } from "react";
import { MdAdd } from "react-icons/md";

class AddBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { toggleForm } = this.props;

    return (
      <button onClick={toggleForm} type="button" className="add btn">
        add <MdAdd />
      </button>
    );
  }
}

export default AddBtn;
