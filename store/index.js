import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import frontDecalState from "./frontPrintReducer";
import modelReducer from "./modelReducer";
import backDecalState from "./backPrintreducer";
import globalState from "./globalsReducer";
import cartState from "./cartreducer";
import ordersState from "./adminOrdersReducer";
import itemPreviewState from "./itemPreviewReducer";

const store = configureStore({
  reducer: {
    fontImageReducer: frontDecalState.reducer,
    modelReducer: modelReducer.reducer,
    backImageReducer: backDecalState.reducer,
    globalReducer:globalState.reducer,
    cartReducer:cartState.reducer,
    ordersReducer: ordersState.reducer,
    itemsPreviewReducer: itemPreviewState.reducer
  },
});

export const frontDecalActions = frontDecalState.actions;
export const modelActions = modelReducer.actions;
export const backDecalActions= backDecalState.actions
export const globalActions= globalState.actions
export const cartActions= cartState.actions
export const ordersActions= ordersState.actions
export const itemsPreviewActions= itemPreviewState.actions
export default store;
