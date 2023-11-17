import "./App.css";
import React from "react";
import Header from "./Header";
import Todo from "./Todo";
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

  // markUnComplete = (id, isDone) => {
  //   this.setState((prevState) => {
  //     const updatedTodoList = prevState.todolist.map((item) => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           isDone: isDone,
  //         };
  //       }

  //       return item;
  //     });

  //     return {
  //       todolist: updatedTodoList,
  //     };
  //   });
  // };

  deleteTodo = (id) => {
    this.setState((prevState) => {
      const updatedTodoList = prevState.todolist.filter(
        (item) => item.id !== id
      );

      return {
        todolist: updatedTodoList,
      };
    });
  };

  updateInput = (id, newName) => {
    this.setState((prevState) => {
      const updatedTodoList = prevState.todolist.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name: newName,
          };
        }
        return item;
      });

      return {
        todolist: updatedTodoList,
      };
    });
  };

  getIncompleteTasks(id, isDone) {
    // Lọc theo id và isDone (nếu được cung cấp)
    return this.state.todolist.filter((item) => {
      // Nếu id được cung cấp và không khớp, loại bỏ
      if (id !== undefined && item.id !== id) {
        return false;
      }

      // Nếu isDone được cung cấp và không khớp, loại bỏ
      if (isDone !== undefined && item.isDone !== isDone) {
        return false;
      }

      // Chỉ giữ lại những công việc chưa hoàn thành
      return !item.isDone;
    });
  }

  render() {
    const { todolist } = this.state;
    debugger;
    return (
      <div>
        <Header addTodoList={this.addTodoList} />
        <Todo
          todolist={todolist}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
          updateInput={this.updateInput}
        />
        <Footer
          todolist={todolist}
          getIncompleteTasks={this.getIncompleteTasks}
        />
      </div>
    );
  }
}

export default App;
