import {legacy_createStore as createStore,applyMiddleware} from 'redux'

import CountReducer from './reducers/count'
import thunk from 'redux-thunk'

export default createStore(CountReducer,applyMiddleware(thunk))

