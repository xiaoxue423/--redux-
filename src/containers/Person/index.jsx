import React, { Component } from "react";
import { nanoid } from "nanoid";


export default class Person extends Component {
  addPerson = ()=>{
    const name = this.name.value
    const age = this.age.value
    const personObj = {id:nanoid(),name,age}
    console.log('personObj',personObj)
  }
  render() {
    return (
      <div>
        <h1>我是Person组件...</h1>
        <input
          ref={(c) => (this.name = c)}
          type="text"
          placeholder="输入名字"
        />
        <input ref={(c) => (this.age = c)} type="text" placeholder="输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {

          }
          <li>名字1-年龄</li>
          <li>名字2-年龄</li>
          <li>名字3-年龄</li>
        </ul>
      </div>
    );
  }
}
