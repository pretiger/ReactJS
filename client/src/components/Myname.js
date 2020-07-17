import React, { Component } from "react";

class Myname extends Component {
  /*   static defaultProps = {
    name: "Basic Name",
  }; */

  render() {
    return (
      <div>
        <h2>This is props example</h2>
        <h1>My name is {this.props.name}</h1>;
      </div>
    );
  }
}
Myname.defaultProps = {
  name: "Basic Name",
};

export default Myname;
