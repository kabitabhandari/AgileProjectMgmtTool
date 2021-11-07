import { GET_PROJECTS_TYPE } from "../actions/types";
const initialState = {
  projects: [],
  project: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS_TYPE:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
}
