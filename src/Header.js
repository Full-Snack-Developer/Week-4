import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Press Enter");
    }
  };

  render() {
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
