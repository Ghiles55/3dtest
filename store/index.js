import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import frontDecalState from "./frontPrintReducer";
import modelReducer from "./modelReducer";
import backDecalState from "./backPrintreducer";
import loginState from "./loginReducer";
import cartState from "./cartreducer";

const store = configureStore({
  reducer: {
    fontImageReducer: frontDecalState.reducer,
    modelReducer: modelReducer.reducer,
    backImageReducer: backDecalState.reducer,
    loginReducer:loginState.reducer,
    cartReducer:cartState.reducer
  },
});

export const frontDecalActions = frontDecalState.actions;
export const modelActions = modelReducer.actions;
export const backDecalActions= backDecalState.actions
export const loginActions= loginState.actions
export const cartActions= cartState.actions
export default store;
