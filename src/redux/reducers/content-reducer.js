import { GET_CONTENT, GET_CONTENT_ERROR, GET_CONTENT_LOADING } from "../types";

const INITIAL_STATE = {
  content: null,
  errorContent: null,
  loadingContent: null,
};

export const contentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        content: action.payload,
      };
    case GET_CONTENT_ERROR:
      return {
        ...state,
        errorContent: action.payload,
      };
    case GET_CONTENT_LOADING:
      return {
        ...state,
        loadingContent: action.payload,
      };
    default:
      return state;
  }
};
