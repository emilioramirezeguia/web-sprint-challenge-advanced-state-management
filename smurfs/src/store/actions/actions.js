import axios from "axios";

// Action Types
export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const ADDING_SMURF = "ADDING_SMURF";

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
  return (dispatch) => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((response) => {
        dispatch({ type: ADDING_SMURF, payload: response.data });
      })
      .catch((error) => {
        console.log("Couldn't add Smurf. Error: ", error.message);
      });
  };
};
