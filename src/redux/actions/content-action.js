import { GET_CONTENT, GET_CONTENT_ERROR, GET_CONTENT_LOADING } from "../types";
import { makeRequest } from "../MakeRequest";

const getContent = () => {
  return makeRequest(
    null,
    `http://${window.location.host}/dataContent.json`,
    "get"
  );
};

export const fetchContent = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_CONTENT_ERROR,
      payload: null,
    });

    dispatch({ type: GET_CONTENT_LOADING, payload: true });
    const result = await getContent();
    await dispatch({
      type: GET_CONTENT,
      payload: result.data,
    });

    dispatch({ type: GET_CONTENT_LOADING, payload: false });
  } catch (error) {
    dispatch({
      type: GET_CONTENT_ERROR,
      payload: error.message,
    });

    dispatch({ type: GET_CONTENT_LOADING, payload: false });
  }
};
