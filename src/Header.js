import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    const inputValue = event.target.value;
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const { addTodoList } = this.props;
      const inputValue = event.target.value;
      const newTodo = {
        id: Date.now(),
        name: inputValue,
        status: false,
        isDone: false,
      };
      addTodoList(newTodo);
      event.target.value = "";
    }
  };

  render() {
    debugger;
    return (
      <div>
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          type="text"
          placeholder="Type something..."
        />
      </div>
    );
  }
}

export default Header;
