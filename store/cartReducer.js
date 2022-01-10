import { createSlice } from "@reduxjs/toolkit";

const cartInitialState= {
    showCart: false,
    cartItems:[]
}

const cartState=createSlice({
    name:'cartReducer',
    initialState:cartInitialState,
    reducers:{
        toggleCart(state,action){
            state.showCart=action.payload
        },
        addItem(state,action){
            state.cartItems=[...state.cartItems,action.payload]
        },
        removeItem(state,action){
            let newItems=state.cartItems.filter(el=> el.id !=action.payload)
            state.cartItems=newItems
        }
    }
})

export default cartState