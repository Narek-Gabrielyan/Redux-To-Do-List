// Libraries
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
// Slices
import albumsReducer from "../Slices/albumsReducers";
import commentsReducer from "../Slices/commentsReducers";
import todoReducer from "../Slices/todoListReducers";


const rootReducer = combineReducers({
  todo: todoReducer,
  albumsReducer,
  commentsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

