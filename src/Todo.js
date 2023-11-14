import React from "react";
import Todolist from "./Todolist";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todolist } = this.props;
    debugger;
    return (
      <div>
        {todolist.map((item) => {
          return <Todolist data={item} />;
        })}
      </div>
    );
  }
}

export default Todo;
