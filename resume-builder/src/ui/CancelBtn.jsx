import { Component } from "react";

class CancelBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleToggle } = this.props;

    return (
      <button onClick={handleToggle} type="button" className="cancel btn">
        cancel
      </button>
    );
  }
}

export default CancelBtn;
