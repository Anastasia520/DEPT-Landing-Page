import {
  POST_CONTACT,
  POST_CONTACT_ERROR,
  POST_CONTACT_LOADING,
} from "../types";

const INITIAL_STATE = {
  contactFormRequested: null,
  errorContactFormRequested: null,
  loadingContactFormRequested: null,
};

export const contactFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_CONTACT:
      return {
        ...state,
        contactFormRequested: action.payload,
      };
    case POST_CONTACT_ERROR:
      return {
        ...state,
        errorContactFormRequested: action.payload,
      };
    case POST_CONTACT_LOADING:
      return {
        ...state,
        loadingContactFormRequested: action.payload,
      };
    default:
      return state;
  }
};
