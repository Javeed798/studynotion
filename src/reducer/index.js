import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice"
import profileSlice from "../slices/profileSlice";
import cartSlice from "../slices/cartSlice";

//  instead of using configureStore we are using this combine reducer 
const rootReducer = combineReducers({
  auth : authSlice,
  profile : profileSlice,
  cart : cartSlice
})

export default rootReducer;
