import React, { Component } from "react";

export default class Count extends Component {
  state = { carName: "奔驰" };

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }

  // 加
  increment = () => {
    const { value } = this.selectNumber;

  };

  // 减
  decrement = () => {
    const { value } = this.selectNumber;
  };

  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;

  
  };

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;

  };

  render() {
    return (
      <div>
        <h1>和为：????</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}
