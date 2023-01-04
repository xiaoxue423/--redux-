// 引入为Count组件服务的reducer
import count from './count'

// 引入为Person组件服务的reducer
import persons from './person'

import {combineReducers} from 'redux'

export default combineReducers({
  count,
  persons
})
