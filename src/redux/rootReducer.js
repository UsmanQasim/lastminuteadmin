import { combineReducers } from "redux";

import inquiryReducer from "./inquiries/inquiryReducer";
import contactInquiryReducer from "./contactInquiries/contactInquiryReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  inquiryState: inquiryReducer,
  contactInquiryState: contactInquiryReducer,
  userState: userReducer,
});

export default rootReducer;
