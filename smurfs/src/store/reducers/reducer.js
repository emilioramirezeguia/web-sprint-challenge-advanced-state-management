import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADDING_SMURF,
} from "../actions/actions";

const initialState = {
  isLoading: false,
  smurfs: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADDING_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
      };
    default:
      return state;
  }
};
