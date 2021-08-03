import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
} from "./types";
import history from "../history";
import streams from "../apis/streams";
const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};
const signOut = () => {
  return { type: "SIGN_OUT" };
};

const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const response = await streams.post("/streams", { ...formValues, uid });
    dispatch({ type: CREATE_STREAM, payload: response.data });
    history.push("/");
  };
};
const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: response.data });
  };
};
const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get("/streams");
    dispatch({ type: FETCH_STREAMS, payload: response.data });
  };
};
const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push("/");
  };
};
const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
    history.push("/");
  };
};

export {
  signIn,
  signOut,
  SIGN_IN,
  SIGN_OUT,
  createStream,
  editStream,
  fetchStream,
  fetchStreams,
  deleteStream,
};
