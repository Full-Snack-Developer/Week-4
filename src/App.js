import "./App.css";
import React from "react";
import Header from "./Header";
import Todo from "./Todo";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = [
      {
        uid: 1,
        tag: "clean",
        status: false,
      },
    ];
  }
  render() {
    return (
      <div>
        <Header />
        <Todo
          uid={this.state.uid}
          tag={this.state.tag}
          status={this.state.status}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
