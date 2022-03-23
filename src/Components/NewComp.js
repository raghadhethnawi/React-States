import React, { Component } from "react";
import BellA from "./BellA.png";
import BellB from "./BellB.png";

class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to VS",
      sub: "Subscribe",
      imageURL: BellA,
    };
  }
  styles = {
    fontStyle: "italic",
    color: "purple",
  };

  ButtonChange = () => {
    this.setState({
      message: "Hit the bell incon to never miss an update",
      sub: "Subscribed",
    });
  };

  messageChange = () => {
    this.setState({
      message: "Thanks !!",
      imageURL: BellB,
    });
  };

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <p></p>
        <img
          style={{ width: "30px", height: "30px" }}
          src={this.state.imageURL}
          alt=""
          onClick={this.messageChange}
        />
      </div>
    );
  }
}

export default NewComp;
