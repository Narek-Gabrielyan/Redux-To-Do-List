// Libraries
import axios from "axios";
// Loading File Function
import { IS_FETCHING_AT, isFetching_AC } from "./assets/loadingCreator";
// Action Type
const GET_ALBUMS = "get-albums";

// albumsReducer InitialState
const initialState = {
  albums: [],
  isFetching: false,
};

// Reducer
const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    case IS_FETCHING_AT:
      return {
        ...state,
        isFetching: action.payload,
      };

    default:
      return state;
  }
};

// Action Creator
const getAlbums_AC = (albums) => ({ type: GET_ALBUMS, payload: albums });

// Thunk Creator
const getAlbums_TC = () => {
  return (dispatch) => {
    dispatch(isFetching_AC(true));
    axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
      dispatch(getAlbums_AC(res.data));
      dispatch(isFetching_AC(false));
    });
  };
};

// Export Files
export { getAlbums_TC };
export default albumsReducer;
