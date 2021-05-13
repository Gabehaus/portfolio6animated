import { ADD_TEST_REDUCER_ITEM } from "../constants/testConstants"

export const testReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TEST_REDUCER_ITEM:
      return {
        ...state,
        testReducerItem: action.payload
      }
    default:
      return state
  }
}
