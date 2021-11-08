import { UPDATE_PROJECT_TYPE } from "../actions/types";
const initialState = {
  project: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROJECT_TYPE:
      return {
        ...state,
        project: action.payload,
      };
    default:
      return state;
  }
}
