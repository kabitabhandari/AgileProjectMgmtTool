import axios from "axios";
import {
  GET_ERRORS,
  GET_PROJECTS,
  UPDATE_PROJECT,
  DELETE_PROJECT
} from "./types";

export const action_post = (project, history) => async (dispatch) => {
  try {
      await axios.post("/api/project", project);
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (error) {
    // if error dispatch the action and backend response
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};



export const action_get = () => async (dispatch) => {
  const backendResponse = await axios.get(
    "/api/project/all"
  );
  dispatch({
    type: GET_PROJECTS,
    // will give what response is given from backend when we call api
    payload: backendResponse.data,
  });
};



export const action_update =
  (projectIdentifier, history) => async (dispatch) => {
  try {
    const backendResponse = await axios.get(
        `/api/project/${projectIdentifier}`
    );
    dispatch({
      type: UPDATE_PROJECT,
      payload: backendResponse.data,
    });
  }catch(error){
    history.push("/dashboard");

  }
  };



export const action_delete = (projectIdentifier) => async (dispatch) => {
  if (
      window.confirm(
          "Are you sure? This will delete the project and all the data related to it"
      )
  ) {

    await axios.delete(
        `/api/project/${projectIdentifier}`
    );
    dispatch({
      type: DELETE_PROJECT,
      payload: projectIdentifier,
    });
  }
  };
