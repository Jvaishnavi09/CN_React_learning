import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: "",
      id: "",
    };
    this.timer = null;
  }
  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState(
      (prevState) => {
        return {
          curIndex: prevState.curIndex + 1,
          currentName: prevState.fullName.substring(0, prevState.curIndex),
        };
      },
      () => console.log(this.state.currentName)
    );
  };

  // Required lifecycle methods here
  componentDidMount() {
    console.log("Compoennet Did Mount");
  }
  componentDidUpdate() {
    console.log("component did update");
    if (this.props.showName == true) {
      this.timer = setInterval(this.typeWriterEffect, 5000);
    }
  }
  componentWillUnmount() {
    console.log("component will unmount ");
    clearInterval(this.state.id);
  }
  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
