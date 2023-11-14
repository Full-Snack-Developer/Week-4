import "./App.css";
import React from "react";
import Header from "./Header";
import Todo from "./Todo";
import Todolist from "./Todolist";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todolist: [],
    };
  }

  addTodoList = (newTodo) => {
    this.setState({
      todolist: [newTodo, ...this.state.todolist],
    });
  };

  markComplete = (id, isDone) => {
    this.setState((prevState) => {
      const updatedTodoList = prevState.todolist.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isDone: !isDone,
          };
        }
        return item;
      });

      return {
        todolist: updatedTodoList,
      };
    });
  };

  render() {
    const { todolist } = this.state;
    debugger;
    return (
      <div>
        <Header addTodoList={this.addTodoList} />
        <Todo todolist={todolist} markComplete={this.markComplete} />
        <Footer todolist={todolist} />
      </div>
    );
  }
}

export default App;
