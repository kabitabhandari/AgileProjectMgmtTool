import axios from "axios";
import {
  GET_ERRORS_TYPE,
  GET_PROJECTS_TYPE,
  UPDATE_PROJECT_TYPE,
  DELETE_PROJECT_TYPE
} from "./types";

export const createProjectAction = (project, history) => async (dispatch) => {
  try {
      await axios.post("/api/project", project);
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS_TYPE,
      payload: {},
    });
  } catch (error) {
    // if error dispatch the Type.js
    dispatch({
      type: GET_ERRORS_TYPE,
      payload: error.response.data,
    });
  }
};

export const getProjectsAction = () => async (dispatch) => {
  const backendResponse = await axios.get(
    "/api/project/all"
  );
  dispatch({
    type: GET_PROJECTS_TYPE,
    // will give what response is given from backend when we call api
    payload: backendResponse.data,
  });
};

export const updateProjectAction =
  (projectIdentifier, history) => async (dispatch) => {
  try {
    const backendResponse = await axios.get(
        `/api/project/${projectIdentifier}`
    );
    dispatch({
      type: UPDATE_PROJECT_TYPE,
      payload: backendResponse.data,
    });
  }catch(error){
    history.push("/dashboard");

  }
  };

export const deleteProjectAction = (projectIdentifier) => async (dispatch) => {
  if (
      window.confirm(
          "Are you sure? This will delete the project and all the data related to it"
      )
  ) {

    await axios.delete(
        `/api/project/${projectIdentifier}`
    );
    dispatch({
      type: DELETE_PROJECT_TYPE,
      payload: projectIdentifier,
    });
  }
  };
