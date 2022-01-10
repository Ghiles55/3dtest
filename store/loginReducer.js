import { createSlice } from "@reduxjs/toolkit";


const loginInitialState={
    isLoggedin:false
}

const loginState= createSlice({
    name:'loginState',
    initialState:loginInitialState,
    reducers:{
        logIn(state){
            state.isLoggedin=true
        },
        logOut(state){
            state.isLoggedin=false
        }
    }
})

export default loginState