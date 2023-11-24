import React from "react";
import Todolist from "./Todolist";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todolist, markComplete, deleteTodo, updateInput } = this.props;
    debugger;
    return (
      <div>
        {todolist.map((item) => (
          <Todolist
            key={item.id}
            markComplete={markComplete}
            deleteTodo={deleteTodo}
            updateInput={updateInput}
            data={item}
          />
        ))}
      </div>
    );
  }
}

export default Todo;
