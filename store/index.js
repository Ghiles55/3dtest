import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import frontDecalState from "./frontPrintReducer";
import modelReducer from "./modelReducer";
import backDecalState from "./backPrintreducer";
import globalState from "./globalsReducer";
import cartState from "./cartreducer";
import ordersState from "./adminOrdersReducer";
import itemPreviewState from "./itemPreviewReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
  fontImageReducer: frontDecalState.reducer,
  modelReducer: modelReducer.reducer,
  backImageReducer: backDecalState.reducer,
  globalReducer: globalState.reducer,
  cartReducer: cartState.reducer,
  ordersReducer: ordersState.reducer,
  itemsPreviewReducer: itemPreviewState.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const frontDecalActions = frontDecalState.actions;
export const modelActions = modelReducer.actions;
export const backDecalActions = backDecalState.actions;
export const globalActions = globalState.actions;
export const cartActions = cartState.actions;
export const ordersActions = ordersState.actions;
export const itemsPreviewActions = itemPreviewState.actions;
export default store;
