import axios from "axios";

// Action Types
export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

// Action Creators

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_SMURFS_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: FETCHING_SMURFS_FAILURE, payload: error.message });
      });
  };
};
