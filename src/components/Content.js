import React from "react";

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        Už jsi kliknul {this.state.counter}x.
        <br />
        <button onClick={e => this.handleClick(e)}>Klikni!</button>
      </div>
    );
  }

  handleClick(e) {
    this.setState({ counter: this.state.counter + 1 });
  }
}
