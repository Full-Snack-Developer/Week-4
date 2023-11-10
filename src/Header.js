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

//Phần code đã chạy được theo đề bài
// import React from "react";

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   handleChange = (event) => {
//     const inputValue = event.target.value;
//     console.log(inputValue);
//   };

//   handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       const inputValue = event.target.value;
//       this.props.onSubmit({
//         // uid: new Date().getTime(), // Tạo unique ID
//         tag: inputValue,
//         status: false,
//       });
//       event.target.value = "";
//     }
//   };

//   render() {
//     return (
//       <div>
//         <input
//           onChange={this.handleChange}
//           onKeyDown={this.handleKeyDown}
//           type="text"
//           placeholder="Type something..."
//         />
//       </div>
//     );
//   }
// }

// export default Header;
