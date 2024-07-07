import { Component } from "react";
import Weather from "./Weather";

class Main extends Component {
  constructor() {
    super();
    this.state = "";
  }
  render() {
    return (
      <div className="main-container">
        <div className="header">Weather Forecast</div>
        <Weather />
      </div>
    );
  }
}

export default Main;
