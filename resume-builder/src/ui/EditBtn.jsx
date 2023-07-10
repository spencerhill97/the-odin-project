import React, { Component } from "react";

class EditBtn extends Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.props.setProps(this.props.params);
    if (this.props.form) {
      return;
    }

    this.props.handleToggle();
  }

  render() {
    return (
      <button onClick={this.handleEdit} type="button" className="edit btn">
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
    );
  }
}

export default EditBtn;
