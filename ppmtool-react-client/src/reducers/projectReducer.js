import {DELETE_PROJECT_TYPE, GET_PROJECTS_TYPE, UPDATE_PROJECT_TYPE} from "../actions/types";
const initialState = {
  projects: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS_TYPE:
      console.log("state.projects", state.projects)

      return {
        ...state,
        projects: action.payload,
      };

    case UPDATE_PROJECT_TYPE:
      return {
        ...state,
        project: action.payload,
      };

    case DELETE_PROJECT_TYPE:
      console.log("state.projects", state.projects)
      return {
        ...state,
        projects: state.projects.filter(
            p => p.projectIdentifier !== action.payload
        )
      };

    default:
      return state;
  }
}
