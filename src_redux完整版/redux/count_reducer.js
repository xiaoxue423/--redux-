import {INCREMENT,DECREMENT} from './constant'

const initState = 99 //初始化状态
export default function countReducer(preState=initState,action){
  console.log('preState',preState)
  const {type,data} = action;

  switch(type){
    case INCREMENT:
      return preState+data
    case DECREMENT:
      return preState-data
    default:
      return preState
  }
}