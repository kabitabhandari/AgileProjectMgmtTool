import { combineReducers } from "redux";
import errorReducer from "./errorReducer";

// we are exporting combineReducers, which is going to take parameter as an object that contain all reducers that we are going to create moving forward.
export default combineReducers({
  errors: errorReducer,
});
