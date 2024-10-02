import React from "react";

export default class TimerOne extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("Timer Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Timer getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Timer ComponentDidMount");
    console.log(_______________________);
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Timer getSnapshotBeforeUpdate");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Timer shouldComponentUpdate");
    console.log(_______________________);
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Timer componentDidUpdate");
  }

  addOne = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("Inside Render");
    return (
      <div>
        <h2>Timer</h2>
        <p>{this.state.count}</p>
        <button onClick={this.addOne}>click me!</button>
      </div>
    );
  }
}
