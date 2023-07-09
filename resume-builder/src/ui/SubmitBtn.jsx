import { Component } from "react";

class SubmitBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="submit" className="submit btn">
        submit
      </button>
    );
  }
}

export default SubmitBtn;
