import { createSlice } from "@reduxjs/toolkit";

const backDecalinitialState = {
  image: "sharingan.png",
  position_x: 0,
  position_y: 0.3,
  size_x: 1,
  size_y: 1,
  isDecal: false,
};

const backDecalState = createSlice({
  name: "backDecalState",
  initialState: backDecalinitialState,
  reducers: {
    changeImage(state, action) {
      state.image = action.payload;
      state.isDecal = true;
    },
    setSize(state, action) {
      state.size_x = action.payload.size_x;
      state.size_y = action.payload.size_y;
    },
    changeSizeX(state, action) {
      state.size_x = action.payload;
    },
    changeSizeY(state, action) {
      state.size_y = action.payload;
    },
    changePositionX(state, action) {
      state.position_x = state.position_x + action.payload;
    },
    changePositionY(state, action) {
      state.position_y += action.payload;
    },
  },
});

export default backDecalState;