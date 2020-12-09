import React from "react";

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  myStyles = {
    color: "blue",
    WebkitTransaction: "all",
    msTransition: "all"
  };

  render() {
    return (
      <div>
        <h1 className="test-class">
          Hello, {this.props.fname} {this.props.lname}
        </h1>
        <span style={this.myStyles}>
          It is {new Date().toLocaleTimeString()}
        </span>
        <div>
          <span style={this.myStyles}>
            It is {this.state.date.toLocaleTimeString()}
          </span>
        </div>
      </div>
    );
  }
}
