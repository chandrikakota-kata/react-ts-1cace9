import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Toggle from "./Toggle";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Hello fname="Chandrika" lname="Kota" />
        <p>Start editing to see some magic happen :)</p>
        <Toggle />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
