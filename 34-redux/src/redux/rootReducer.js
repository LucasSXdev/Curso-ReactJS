import { combineReducers } from "redux";
import userReducer from "./user/slice";

export default combineReducers({
  user: userReducer,
  createUser: (state, action) => {
    console.log(...state);
    return { ...state };
  },
});
