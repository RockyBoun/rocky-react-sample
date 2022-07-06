import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers";
const initialState = {};
const createStorewithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStorewithMiddleware(
  rootReducer,
  initialState,
  window._REDUX_DEVTOOLS_EXTENTION_ && window._REDUX_DEVTOOLS_EXTENTION()
);
export default store;
