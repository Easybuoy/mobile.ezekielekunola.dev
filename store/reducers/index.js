import { combineReducers } from "redux";

import actionReducer from "./action";

export default combineReducers({
  action: actionReducer,
});
