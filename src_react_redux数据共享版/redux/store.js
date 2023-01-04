import {legacy_createStore as createStore,applyMiddleware,combineReducers} from 'redux'

// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'

const allReducers = combineReducers({
  count:countReducer,
  persons:personReducer
})

export default createStore(allReducers,applyMiddleware(thunk))

