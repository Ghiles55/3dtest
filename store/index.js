import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import frontDecalState from "./frontPrintReducer";
import modelReducer from "./modelReducer";
import backDecalState from "./backPrintreducer";

const store = configureStore({
  reducer: {
    fontImageReducer: frontDecalState.reducer,
    modelReducer: modelReducer.reducer,
    backImageReducer: backDecalState.reducer
  },
});

export const frontDecalActions = frontDecalState.actions;
export const modelActions = modelReducer.actions;
export const backDecalActions= backDecalState.actions
export default store;
