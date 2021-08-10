import {
  FETCH_INQUIRIES_REQUEST,
  FETCH_INQUIRIES_SUCCESS,
  FETCH_INQUIRIES_FAILURE,
} from "./inquiryTypes";

const initialState = { loading: true, inquiries: [], error: "" };

const inquiryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INQUIRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_INQUIRIES_SUCCESS:
      return {
        loading: false,
        inquiries: action.payload,
        error: "",
      };
    case FETCH_INQUIRIES_FAILURE:
      return {
        loading: false,
        inquires: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default inquiryReducer;
