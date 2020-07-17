import axios from "axios";

// Action Types
export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const ADDING_SMURF_START = "ADDING_SMURF_START";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";
export const ADDING_SMURF_FAILURE = "ADDING_SMURF_FAILURE";

// Action Creators

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_SMURFS_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCHING_SMURFS_FAILURE, payload: error.message });
      });
  };
};

export const addSmurf = (smurf) => {
  debugger;
  return (dispatch) => {
    // dispatch({ type: ADDING_SMURF_START });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((response) => {
        dispatch({ type: ADDING_SMURF_SUCCESS, payload: smurf });
      })
      .catch((error) => {
        dispatch({ type: ADDING_SMURF_FAILURE, payload: error.message });
      });
  };
};
