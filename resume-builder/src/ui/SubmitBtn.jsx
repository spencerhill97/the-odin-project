import { Component } from "react";

class SubmitBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { params } = this.props;
    return (
      <button type="submit" className="submit btn">
        {params ? "edit" : "submit"}
      </button>
    );
  }
}

export default SubmitBtn;
