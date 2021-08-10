import Axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());

    const reqURL = "http://backend.lastminuteweddings.uk/users/getUsers.php";

    Axios.get(reqURL)
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => dispatch(fetchUsersFailure(error.message)));
  };
};

const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });

const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});
