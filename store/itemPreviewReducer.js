import { createSlice } from "@reduxjs/toolkit";

const itemPreviewInitialState={
    selectedArticle:{},
    frontImage:"",
    backImage:""
}

const itemPreviewState= createSlice({
    name:'itemPreviewState',
    initialState:itemPreviewInitialState,
    reducers:{
        setActiveItem(state,action){
            state.selectedArticle= action.payload
        },
        setFrontImage(state,action){
            state.frontImage=action.payload
        },
        setBackImage(state,action){
            state.backImage= action.payload
        }
    }
})

export default itemPreviewState