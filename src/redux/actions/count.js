import {INCREMENT,DECREMENT} from '../constant'
import store from '../store'

export function createIncrementAction(data){
  return {type:INCREMENT,data}
}

export const createDecrementAction = data => ({type:DECREMENT,data})

export const createIncrementAsyncAction = (data,time) =>{
  return ()=>{
    setTimeout(()=>{
      store.dispatch(createIncrementAction(data))
    },time)
  }
}