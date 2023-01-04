import CountUI from "../../components/Count/index";
import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

const CountContainer = connect(
  (state) => {
    return { count: state };
  }, 
  // (dispatch) => {
  //   return {
  //     jia: (data) => {
  //       // 通知redux执行加法
  //       dispatch(createIncrementAction(data));
  //     },
  //     jian: (data) => {
  //       // 通知redux执行减法
  //       dispatch(createDecrementAction(data));
  //     },
  //     jiaAsync: (data, time) => {
  //       // 通知redux执行异步加法
  //       dispatch(createIncrementAsyncAction(data, time));
  //     },
  //   };
  // }
  {
      jia: createIncrementAction,
      jian: createDecrementAction,
      jiaAsync: createIncrementAsyncAction,
  }
  )(CountUI);

export default CountContainer;
