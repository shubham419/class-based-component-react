import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.textContent == "Increment") {
      this.setState((prv) => {
        return {
          count: prv.count + 1,
        };
      });
    } else {
      console.log("hi");
    }
  }
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
        <button onClick={this.handleClick}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
