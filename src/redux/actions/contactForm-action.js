import {
  POST_CONTACT,
  POST_CONTACT_ERROR,
  POST_CONTACT_LOADING,
} from "../types";

export const fetchContactForm = (data) => async (dispatch) => {
  try {
    dispatch({
      type: POST_CONTACT_ERROR,
      payload: null,
    });

    dispatch({ type: POST_CONTACT_LOADING, payload: true });

    await dispatch({
      type: POST_CONTACT,
      payload: data,
    });

    dispatch({ type: POST_CONTACT_LOADING, payload: false });
  } catch (error) {
    dispatch({
      type: POST_CONTACT_ERROR,
      payload: error.message,
    });

    dispatch({ type: POST_CONTACT_LOADING, payload: false });
  }
};
