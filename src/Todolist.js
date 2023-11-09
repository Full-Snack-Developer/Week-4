import React from "react";

class Todolist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
          {this.props.uid} {this.props.tag} {this.props.status}
        </p>
      </div>
    );
  }
}

export default Todolist;
