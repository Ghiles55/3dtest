import { createSlice } from "@reduxjs/toolkit";

const modelInitialState = {
  model: false,
  size: "M",
  color: "#194d43",
  texture:""
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
    resetValues(state){
      state.size="M"
      state.color="#194d43"
    },
    setTexture(state,action){
      state.texture= action.payload
    }
  },
});

export default modelReducer;
