import axios from "axios";
import {
  GET_ERRORS_TYPE,
  GET_PROJECTS_TYPE,
  UPDATE_PROJECT_TYPE,
} from "./types";

export const createProjectAction = (project, history) => async (dispatch) => {
  try {
    const backendResponse = await axios.post(
      "http://localhost:8080/api/project",
      project
    );
    history.push("/dashboard");
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
    "http://localhost:8080/api/project/all"
  );
  dispatch({
    type: GET_PROJECTS_TYPE,
    payload: backendResponse.data,
  });
};

export const updateProjectAction =
  (projectIdentifier, history) => async (dispatch) => {
    const backendResponse = await axios.get(
      `http://localhost:8080/api/project/${projectIdentifier}`
    );
    dispatch({
      type: UPDATE_PROJECT_TYPE,
      payload: backendResponse.data,
    });
  };
