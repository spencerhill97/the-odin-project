import { Component } from "react";

class CancelBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { toggleForm } = this.props;

    return (
      <button onClick={toggleForm} type="button" className="cancel btn">
        cancel
      </button>
    );
  }
}

export default CancelBtn;
