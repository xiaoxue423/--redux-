import {ADD_PERSON} from '../constant'
import store from '../store'

// 创建增加一个人的action动作对象
export function createAddPersonAction(personObj){
  return {type:ADD_PERSON,data:personObj}
}