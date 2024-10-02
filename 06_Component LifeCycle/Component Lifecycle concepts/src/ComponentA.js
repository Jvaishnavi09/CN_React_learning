import { Component } from "react";
import ComponentB from "./ComponentB";
export default class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      name: "ComponenetA",
    };
    console.log("Component A Constructor");
  }
  static getDerivedStateFromProps() {
    console.log("Compoenent A getDerivedStateFromProps");
    return null; // should return something
  }
  componentDidMount() {
    console.log("Compoenent A ComponentDidMount");
  }
  render() {
    console.log("Componenet A render");
    return (
      <>
        <h1>{this.state.name}</h1>
        <ComponentB />
      </>
    );
  }
}
