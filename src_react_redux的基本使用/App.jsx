import React, { Component } from 'react'
import Count from './containers/Count/index'
import store from './redux/store.js'

export default class App extends Component {
  render() {
    return (
      <div>
        App胡雪测试
        <Count store={store}/>
      </div>
    )
  }
}
