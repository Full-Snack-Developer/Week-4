import React from "react";
import Todolist from "./Todolist";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todolist } = this.props;
    // debugger;
    return (
      <div>
        {todolist.map((item) => {
          <Todolist data={item} />;
        })}
        {/* <Todolist data="Trung" /> */}
      </div>
    );
  }
}

export default Todo;

//Phần code đã chạy theo được đề bài
// import React from "react";

// class Todo extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { todo } = this.props;
//     return (
//       <p>
//         {todo.uid} {todo.tag} {todo.status}
//       </p>
//     );
//   }
// }

// export default Todo;
