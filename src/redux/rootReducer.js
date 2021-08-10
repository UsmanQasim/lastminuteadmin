import { combineReducers } from "redux";

import inquiryReducer from "./inquiries/inquiryReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  inquiryState: inquiryReducer,
  userState: userReducer
});

export default rootReducer;
