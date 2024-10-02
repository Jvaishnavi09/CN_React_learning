import { Component } from "react";
export default class TimerApp extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      display: false,
    };
    this.timer = null;
    console.log("Inside constructor");
  }
  componentDidMount() {
    console.log("Timer ComponentDidMount");
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }
  handleTimer = () => {
    this.setState({
      display: !this.state.display,
    });
    if (this.state.display === false) {
      this.setState({
        time: 0,
      });
    }
  };
  render() {
    console.log("Inside Render");
    return (
      <div>
        <button onClick={this.handleTimer}>
          {this.state.display ? "STOP" : "START"}
        </button>
        {this.state.display ? (
          <h1>
            Timer :{" "}
            {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
          </h1>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
