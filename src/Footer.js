import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCountArray = (num) => {};
  render() {
    const { todolist } = this.props;
    const count = todolist.length;
    debugger;
    return (
      <div>
        <h4>Total work to day: {count}</h4>
      </div>
    );
  }
}

export default Footer;
