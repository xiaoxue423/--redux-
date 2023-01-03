import {legacy_createStore as createStore} from 'redux'

import CountReducer from './count_reducer'

export default createStore(CountReducer)

