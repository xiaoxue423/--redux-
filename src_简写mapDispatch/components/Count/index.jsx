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
    this.props.jia(value * 1);
  };

  // 减
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value * 1);
  };

  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1);
    }
  };

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jiaAsync(value*1,2000)
  };

  render() {
    return (
      <div>
        <h1>和为：{this.props.count}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}
