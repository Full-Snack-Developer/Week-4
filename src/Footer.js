import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showIncompleteTasks: false,
    };

    this.handleFilterIncompleteTasks =
      this.handleFilterIncompleteTasks.bind(this);
  }

  handleFilterIncompleteTasks() {
    const { getIncompleteTasks } = this.props;
    if (getIncompleteTasks) {
      this.setState({ showIncompleteTasks: true });
    }
  }

  render() {
    const { todolist, getIncompleteTasks } = this.props;
    const { showIncompleteTasks } = this.state;
    const count = todolist.length;

    return (
      <div>
        <h4>Total work today: {count}</h4>
        <button onClick={this.handleFilterIncompleteTasks}>
          Show Incomplete Tasks
        </button>

        {showIncompleteTasks && getIncompleteTasks && (
          <div>
            <h4>Incomplete Tasks:</h4>
            <ul>
              {getIncompleteTasks().map((todolist) => (
                <li key={todolist.id}>{todolist.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Footer;
