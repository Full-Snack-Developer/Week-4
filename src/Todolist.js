import React from "react";

class Todolist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.id} {data.name} {data.status}
      </div>
    );
  }
}

export default Todolist;

//Phần code đã chạy theo được đề bài
// import React from "react";
// import Todo from "./Todo";

// class Todolist extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         {this.props.todoList.map((todo, index) => {
//           return <Todo key={todo.uid} todo={todo} />;
//         })}
//       </div>
//     );
//   }
// }

// export default Todolist;
