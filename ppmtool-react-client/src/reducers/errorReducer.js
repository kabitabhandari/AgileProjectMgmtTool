import { GET_ERRORS_TYPE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS_TYPE:
      return action.payload;

    default:
      return state;
  }
}
