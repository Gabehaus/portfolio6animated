import { CHANGE_SKILLSET } from "../constants/skillConstants"

export const skillReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_SKILLSET:
      return {
        ...state,
        skill: action.payload
      }
    default:
      return state
  }
}
