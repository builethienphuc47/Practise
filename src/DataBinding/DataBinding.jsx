import React, { Component } from "react";

class DataBinding extends Component {
  renderMultiConponent = () => {
    const virus = {
      id: "covid19",
      name: "corona",
    };
    return (
      <div>
        <h1>name:{virus.id}</h1>
        <h1>name:{virus.name}</h1>
      </div>
    );
  }
  render() {
    return <div>{this.renderMultiConponent()}</div>;
  }
}

export default DataBinding;
