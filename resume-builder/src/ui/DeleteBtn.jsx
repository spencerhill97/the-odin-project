import React, { Component } from "react";

class DeleteBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleDelete, params } = this.props;

    return (
      <button
        onClick={() => handleDelete(params)}
        type="button"
        className="delete btn"
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    );
  }
}

export default DeleteBtn;
