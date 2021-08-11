import Axios from "axios";
import {
  FETCH_INQUIRIES_REQUEST,
  FETCH_INQUIRIES_SUCCESS,
  FETCH_INQUIRIES_FAILURE,
} from "./inquiryTypes";

export const fetchInquiries = () => {
  return (dispatch) => {
    dispatch(fetchInquiriesRequest());

    const reqURL = "http://backend.lastminuteweddings.uk/?inquiries";

    Axios.get(reqURL)
      .then((response) => dispatch(fetchInquiriesSuccess(response.data)))
      .catch((error) => dispatch(fetchInquiriesFailure(error.message)));
  };
};

const fetchInquiriesRequest = () => ({ type: FETCH_INQUIRIES_REQUEST });

const fetchInquiriesSuccess = (inquiries) => ({
  type: FETCH_INQUIRIES_SUCCESS,
  payload: inquiries,
});

const fetchInquiriesFailure = (error) => ({
  type: FETCH_INQUIRIES_FAILURE,
  payload: error,
});
