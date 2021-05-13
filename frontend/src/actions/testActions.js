//import axios from "axios"
import { ADD_TEST_REDUCER_ITEM } from "../constants/testConstants"

const addToTestReducer = argument => async (dispatch, getState) => {
  dispatch({
    type: ADD_TEST_REDUCER_ITEM,
    payload: argument
  })

  localStorage.setItem(
    "tokenTest",
    JSON.stringify(getState().test.testReducerItem)
  )
}

export default addToTestReducer
