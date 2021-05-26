//import axios from "axios"

import { CHANGE_SKILLSET } from "../constants/skillConstants"

const changeSkillSet = argument => async (dispatch, getState) => {
  dispatch({
    type: CHANGE_SKILLSET,
    payload: argument
  })

  //   localStorage.setItem(
  //     "tokenTest",
  //     JSON.stringify(getState().test.testReducerItem)
  //   )
}

export default changeSkillSet
