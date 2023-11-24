import React from "react";

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      userInput: "",
    };
  }

  handleDoubleClick = () => {
    const { data, updateInput } = this.props;
    this.setState({ editing: true, userInput: data.name });
  };

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  handleBlur = () => {
    const { data, updateInput } = this.props;
    const { userInput } = this.state;

    if (userInput.trim() !== "" && userInput !== data.name) {
      updateInput(data.id, userInput);
    }

    this.setState({ editing: false, userInput: "" });
  };

  render() {
    const { data, markComplete, deleteTodo } = this.props;
    const { editing, userInput } = this.state;

    const textDecorationStyle = {
      textDecoration: data.isDone ? "line-through" : "none",
    };

    return (
      <div style={textDecorationStyle} onDoubleClick={this.handleDoubleClick}>
        {editing ? (
          <input
            type="text"
            value={userInput}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            autoFocus
          />
        ) : (
          <>
            <input
              type="checkbox"
              checked={data.isDone}
              onChange={() => markComplete(data.id)}
            />
            {data.name} {data.status}
            <button onClick={() => deleteTodo(data.id)}>Delete</button>
          </>
        )}
      </div>
    );
  }
}

export default Todolist;
