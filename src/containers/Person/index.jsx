import React, { Component } from "react";
import { nanoid } from "nanoid";
import {connect} from 'react-redux'
import {addPerson} from '../../redux/actions/person'


class Person extends Component {
  addPerson = ()=>{
    const name = this.name.value
    const age = this.age.value*1
    const personObj = {id:nanoid(),name,age}

    this.props.addPerson(personObj)
    this.name.value = ""
    this.age.value = ""
  }
  render() {
    return (
      <div>
        <h1>我是Person组件...</h1>
        <h1>Count组件的和为:{this.props.count}</h1>
        <input
          ref={(c) => (this.name = c)}
          type="text"
          placeholder="输入名字"
        />
        <input ref={(c) => (this.age = c)} type="text" placeholder="输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.persons.map((personObj)=>{
              return (
                <li key={personObj.id}>id：{personObj.id}-名字：{personObj.name}-年龄：{personObj.age}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state=>({persons:state.persons,count:state.count}),//映射状态
  {
    addPerson//映射操作状态的方法
  }
)(Person)
