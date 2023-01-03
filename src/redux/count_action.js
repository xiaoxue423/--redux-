import {INCREMENT,DECREMENT} from './constant'

export function createIncrementAction(data){
  return {type:INCREMENT,data}
}

export const createDecrementAction = data => ({type:DECREMENT,data})