import React from "react";
import ComponentA from "./ComponentA";
import TimerApp from "./TimerApp";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mount: false,
    };
  }
  handleMount = () => {
    this.setState({
      mount: !this.state.mount,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.handleMount}>
          {this.state.mount ? "Unmount Timer" : "Mount Timer"}
        </button>
        {this.state.mount ? <TimerApp /> : <></>}
      </>
    );
  }
}
