import CountUI from "../../components/Count/index";
import { connect } from "react-redux";
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

function a(state) {
  return { count: state };
}

function b(dispatch) {
  return {
    jia: (data) => {
      // 通知redux执行加法
      dispatch(createIncrementAction(data))
    },
    jian:(data) => {
      // 通知redux执行减法
      dispatch(createDecrementAction(data))
    },
    jiaAsync:(data,time) => {
      // 通知redux执行异步加法
      dispatch(createIncrementAsyncAction(data,time))
    },
  };
}

const CountContainer = connect(a, b)(CountUI);

export default CountContainer;
