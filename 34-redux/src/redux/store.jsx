import { configure, configureStore } from "@reduxjs/toolkit";

import userReducers from "./reducers/userReducers";

export default const store = configureStore({
  reducer:{
    user:userReducers
  }
})