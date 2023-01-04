import React, { Component } from 'react'
import Count from './containers/Count/index'
import Person from './containers/Person/index'

export default class App extends Component {
  render() {
    return (
      <div>
        App胡雪测试
        <Count/>
        <hr />
        <Person/>
      </div>
    )
  }
}
