import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { testReducer } from "./reducers/testReducers"

const reducer = combineReducers({
  test: testReducer
})

const tokenTestFromStorage = localStorage.getItem("tokenTest")
  ? JSON.parse(localStorage.getItem("tokenTest"))
  : "change me"

const initialState = {
  test: { testReducerItem: tokenTestFromStorage }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
