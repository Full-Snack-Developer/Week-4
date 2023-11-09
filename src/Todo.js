import React from "react";
import Todolist from "./Todolist";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Todolist
          uid={this.props.uid}
          tag={this.props.tag}
          status={this.props.status}
        />
      </div>
    );
  }
}

export default Todo;
