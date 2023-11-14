import React from "react";

class Todolist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, markComplete } = this.props;
    console.log(data.id);
    console.log(data.name);
    console.log(data.status);

    return (
      <div style={{ textDecoration: data.isDone ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={data.isDone}
          onChange={() => markComplete(data.isDone)}
        />
        {data.name} {data.status}
      </div>
    );
  }
}

export default Todolist;
