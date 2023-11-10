import "./App.css";
import React from "react";
import Header from "./Header";
import Todo from "./Todo";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todolist: [
        { id: 1, name: "Di hoc", status: false },
        { id: 2, name: "Di choi", status: false },
        { id: 3, name: "Di ngu", status: false },
      ],
    };
  }
  render() {
    const { todolist } = this.state;

    return (
      <div>
        <Header />
        <Todo todolist={todolist} />
        <Footer />
      </div>
    );
  }
}

export default App;

//Phần code đã chạy được theo đề bài
// import "./App.css";
// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Todolist from "./Todolist";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       todos: [
//         {
//           uid: 1,
//           tag: "clean",
//           status: false,
//         },
//       ],
//     };
//   }

//   addTodo = (todo) => {
//     this.setState({
//       todos: [...this.state.todos, todo],
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Header onSubmit={this.addTodo} />
//         <Todolist todoList={this.state.todos} />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;
