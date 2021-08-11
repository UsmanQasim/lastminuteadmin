import {
  FETCH_CONTACT_INQUIRIES_REQUEST,
  FETCH_CONTACT_INQUIRIES_SUCCESS,
  FETCH_CONTACT_INQUIRIES_FAILURE,
} from "./contactInquiryTypes";

const initialState = { loading: true, contactInquiries: [], error: "" };

const contactInquiryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACT_INQUIRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CONTACT_INQUIRIES_SUCCESS:
      return {
        loading: false,
        contactInquiries: action.payload,
        error: "",
      };
    case FETCH_CONTACT_INQUIRIES_FAILURE:
      return {
        loading: false,
        inqcontactInquiriesuires: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default contactInquiryReducer;
