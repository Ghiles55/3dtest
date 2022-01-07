import { createSlice } from "@reduxjs/toolkit";

const modelInitialState = {
  model: false,
  size: "M",
  color: "#194d43",
};

const modelReducer = createSlice({
  name: "modelReducer",
  initialState: modelInitialState,
  reducers: {
    changeModel(state,action) {
      state.model = action.payload;
    },
    changeSize(state, action) {
      state.size = action.payload;
    },
    changeColor(state, action) {
      state.color = action.payload;
    },
  },
});

export default modelReducer;
