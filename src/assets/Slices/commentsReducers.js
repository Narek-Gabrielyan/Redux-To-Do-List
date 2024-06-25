// Libraries
import axios from "axios";
// Loading File Function
import { IS_FETCHING_AT, isFetching_AC } from "./assets/loadingCreator";
// Action Type
const GET_COMMENTS = "get-comments";

// commentsReducer InitialState
const initialState = {
  comments: [],
  isFetching: false,
};

// Reducer
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case IS_FETCHING_AT:
      return Object.assign(state, { isFetching: action.payload });

    default:
      return state;
  }
};

// Action Creator
const getComments_AC = (comments) => ({
  type: GET_COMMENTS,
  payload: comments,
});

// Thunk Creator
const getComments_TC = () => {
  return (dispatch) => {
    dispatch(isFetching_AC(true));
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      dispatch(getComments_AC(res.data));
      dispatch(isFetching_AC(false));
    });
  };
};

// Export Files
export { getComments_TC };
export default commentsReducer;
