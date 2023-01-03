
export function createIncrementAction(data){
  return {type:'increment',data}
}

export const createDecrementAction = data => ({type:'increment',data})