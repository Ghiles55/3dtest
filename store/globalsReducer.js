import { createSlice } from "@reduxjs/toolkit";


const globalsInitialState={
    isLoggedin:false,
    darkMode:false
}

const globalsState= createSlice({
    name:'globalState',
    initialState:globalsInitialState,
    reducers:{
        logIn(state){
            state.isLoggedin=true
        },
        logOut(state){
            state.isLoggedin=false
        },
        darkModeToggle(state,action){
            state.darkMode=action.payload
        }
        
    }
})

export default globalsState