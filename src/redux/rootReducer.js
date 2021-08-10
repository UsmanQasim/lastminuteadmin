import { combineReducers } from "redux";

import inquiryReducer from "./inquiries/inquiryReducer";

const rootReducer = combineReducers({
  inquiryState: inquiryReducer,
});

export default rootReducer;
