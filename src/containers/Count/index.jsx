import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";

// UI组件
class Count extends Component {
  state = { carName: "奔驰" };

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
    this.props.jiaAsync(value * 1, 2000);
  };

  render() {
    return (
      <div>
        <h1>我是count组件</h1>
        <h1>我的车是：{this.state.carName}</h1>
        <h1>和为：{this.props.count}</h1>
        <h1>Person组件的人数为:{this.props.personCount}</h1>
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

//暴露容器组件
const CountContainer = connect(
  (state) => ({ count: state.count, personCount: state.persons.length }), //映射状态
  // (dispatch) => {
  //   return {
  //     jia: (data) => {
  //       // 通知redux执行加法
  //       dispatch(createIncrementAction(data));
  //     },
  //     jian: (data) => {
  //       // 通知redux执行减法
  //       dispatch(createDecrementAction(data));
  //     },
  //     jiaAsync: (data, time) => {
  //       // 通知redux执行异步加法
  //       dispatch(createIncrementAsyncAction(data, time));
  //     },
  //   };
  // }
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction,
  } //映射操作状态的方法
)(Count);

export default CountContainer;
