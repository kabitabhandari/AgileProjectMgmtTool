import axios from "axios";
import { GET_ERRORS, GET_PROJECTS } from "./types";

export const createProject = (project, history) => async (dispatch) => {
  try {
    const backendResponse = await axios.post(
      "http://localhost:8080/api/project",
      project
    );
    history.push("/dashboard");
  } catch (error) {
    // if error dispatch the Type.js
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getProjects = () => async (dispatch) => {
  const backendResponse = await axios.get(
    "http://localhost:8080/api/project/all"
  );
  dispatch({
    type: GET_PROJECTS,
    payload: backendResponse.data,
  });
};
