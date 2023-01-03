import React, { Component } from "react";
import store from '../../redux/store'

export default class Count extends Component {
  state = { carName: '奔驰' };

  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  }

  // 加
  increment = () => {
    const { value } = this.selectNumber;

    store.dispatch({type:'increment',data:value*1})
  };

  // 减
  decrement = () => {
    const { count } = this.state;
    const { value } = this.selectNumber;

    this.setState({ count: count - value * 1 });
  };

  // 奇数再加
  incrementIfOdd = () => {
    const { count } = this.state;
    const { value } = this.selectNumber;

    if (count % 2 !== 0) {
      this.setState({ count: count + value * 1 });
    }
  };

  // 异步加
  incrementAsync = () => {
    const { count } = this.state;
    const { value } = this.selectNumber;

    setTimeout(() => {
      this.setState({ count: count + value * 1 });
    },2000);
  };

  render() {
    return (
      <div>
        <h1>和为：{store.getState()}</h1>
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
