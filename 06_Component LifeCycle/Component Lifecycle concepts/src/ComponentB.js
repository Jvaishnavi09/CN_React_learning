import { Component } from "react";
export default class ComponentB extends Component {
  constructor() {
    super();
    this.state = {
      name: "Componenet B",
    };
    console.log("Component B Constructor");
  }
  static getDerivedStateFromProps() {
    console.log("Compoenent B getDerivedStateFromProps");
    return null; // should return something
  }
  componentDidMount() {
    console.log("Compoenent B ComponentDidMount");
  }
  render() {
    console.log("Componenet B render");
    return (
      <>
        <h1>{this.state.name}</h1>
      </>
    );
  }
}
