import {DELETE_PROJECT, GET_PROJECTS, UPDATE_PROJECT} from "../actions/types";
const initialState = {
  projects: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      console.log("state.projects", state.projects)

      return {
        ...state,
        projects: action.payload,
      };

    case UPDATE_PROJECT:
      return {
        ...state,
        project: action.payload,
      };

    case DELETE_PROJECT:
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
