import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { testReducer } from "./reducers/testReducers"
import { skillReducer } from "./reducers/skillReducers"

const reducer = combineReducers({
  test: testReducer,
  skill: skillReducer
})

const tokenTestFromStorage = localStorage.getItem("tokenTest")
  ? JSON.parse(localStorage.getItem("tokenTest"))
  : "change me"

const initialState = {
  test: { testReducerItem: tokenTestFromStorage },
  skill: { skill: "Front-End" }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
