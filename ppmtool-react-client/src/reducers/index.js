import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
//  all the reducers that we create are taken as parameter by combine reducers().
export default combineReducers({
  errors_in_state: errorReducer,
  projects_in_state: projectReducer,
});
