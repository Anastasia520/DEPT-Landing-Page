import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import { contentReducer } from "./content-reducer";
import { contactFormReducer } from "./contactForm-reducer";

const reducers = combineReducers({
  form,
  content: contentReducer,
  contact: contactFormReducer,
});

export default reducers;
